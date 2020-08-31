// Require Node Modules
const fs = require('fs'),
	exToJson = require('convert-excel-to-json'),
	xml2js = require('xml2js'),
	util = require('util'),
	d3 = require('d3'),
	{ ipcRenderer } = require('electron'),
	$ = require('jquery');

// Require User Modules
const { instrumentSeparator } = require('./FactoryTalkObjects/Instruments/InstrumentsFunctions'),
	{ lineSeparator, createXmlLines } = require('./FactoryTalkObjects/Lines/LineFunctions'),
	{ valveSeparator } = require('./FactoryTalkObjects/Valves/ValvesFunctions'),
	{ tankSeparator } = require('./FactoryTalkObjects/Tanks/TanksFunctions'),
	{ HeaderSE10 } = require('./FactoryTalkObjects/Header/SE10');
 
var dragFile = document.getElementById('drag-file');
var txtArea = document.getElementById('txtArea');

dragFile.addEventListener('drop', function (e) {
	e.preventDefault();
	e.stopPropagation();

	for (let f of e.dataTransfer.files) {
		let filename = f.name.slice(0, -4);
		console.time(`${filename}`); // Start timer for current file
		console.time(`${filename}a`); // Start timer for current file
		console.log('The file(s) you dragged: ', f);  
		ipcRenderer.send('ondragstart', f.path);

		let xlsJSON = exToJson({
			sourceFile: f.path,
			columnToKey: {
				'*': '{{columnHeader}}',
			},
		});

		const { lines, processLines, cipLines, serviceLines, airLines } = lineSeparator(
			xlsJSON.Summary
		); 
		const valves = valveSeparator(xlsJSON.Summary);
		const tanks = tankSeparator(xlsJSON.Summary);
		const instruments = instrumentSeparator(xlsJSON.Summary);
		const text = xlsJSON.Summary.filter(d => d.Name === 'Text');

		// Scale the drawing to fit on a 1920 X 853 FTView screen
		const padding = 10;

		let xValues = [...lines.map(obj => obj['End X']), ...lines.map(obj => obj['Start X'])];
		let yValues = [...lines.map(obj => obj['End Y']), ...lines.map(obj => obj['Start Y'])];

		xValues = xValues.filter(
			num => num !== undefined && num !== 'Center X' && num !== 'End X' && num !== 'Start X'
		); // Filter out the heading values and undefined values

		yValues = yValues.filter(
			num => num !== undefined && num !== 'Center Y' && num !== 'End Y' && num !== 'Start Y'
		); // Filter out the heading values and undefined values

		xValues = xValues.map(num => parseInt(num, 10));
		yValues = yValues.map(num => parseInt(num));

		xMin = d3.min(xValues);
		xMax = d3.max(xValues);
		yMin = d3.min(yValues);
		yMax = d3.max(yValues);

		const xRatio = 1800 / (xMax - xMin);
		const yRatio = 800 / (yMax - yMin);

		const scaleFactor = Math.floor(Math.min(xRatio, yRatio));

		// Flip vertically

		let xmlLines = [...createXmlLines(lines)];
		// let xmlMixproofValves = [...createMixproofValves()];
		// let xmlTanks = [...createTanks()];
		

		HeaderSE10.gfx.line = xmlLines;
		// let grouparray = [...xmlTanks, ...xmlMixproofValves];

		ipcRenderer.send('buildXML', HeaderSE10, filename);
		console.timeEnd(`${filename}a`);
	}
	ipcRenderer.send('complete');
});

dragFile.addEventListener('dragover', e => {
	e.preventDefault();
	e.stopPropagation();
	if (e.target.classList.contains('backColor')) {
		e.target.classList.remove('alert-info');
		e.target.classList.add('alert-dark');
	}  
});

dragFile.addEventListener('dragleave', e => {
	e.preventDefault();
	e.stopPropagation();
	if (e.target.classList.contains('backColor')) {
		e.target.classList.remove('alert-dark');
		e.target.classList.add('alert-info');
	}
}); 

ipcRenderer.on('XMLCreated', (event, filename, tempFolder) => {
	console.timeEnd(`${filename}`);
});

ipcRenderer.on('filePath', (event, tempFolder) => {
	if (!txtArea.childNodes.length) {
		var h1 = document.createElement('h4');
		var textNode = document.createTextNode(`Files can be found at: ${tempFolder}\\FTVSE`);
		h1.appendChild(textNode);
		txtArea.appendChild(h1);
	}
});
