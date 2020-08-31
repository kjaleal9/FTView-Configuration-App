const { Line } = require('./LineObjects');

// Function that takes FTView JSON object and filters out the lines.
const lineSeparator = xmlSummary => {
	// Take entire page JSON object and filter out all lines.
	const lines = xmlSummary.filter(
		obj =>
			obj['Name'] === 'Line' &&
			(obj['Layer'] === 'CP_Process' ||
				obj['Layer'] === 'CP_CIP' ||
				obj['Layer'] === 'CP_Service' ||
				obj['Layer'] === 'CP_Air')
	);

	const processLines = lines.filter(line => line['Layer'] === 'CP_Process');
	const cipLines = lines.filter(line => line['Layer'] === 'CP_CIP');
	const serviceLines = lines.filter(line => line['Layer'] === 'CP_Service');
	const airLines = lines.filter(line => line['Layer'] === 'CP_Air');

	return {
		lines: lines,
		processLines: processLines,
		cipLines: cipLines,
		serviceLines: serviceLines,
		airLines: airLines,
	};
};

// Create line group array
const createXmlLines = arr => {
	const xmlLines = [];
	arr.forEach((line, i) => {
		let tempLine = JSON.parse(JSON.stringify(Line));
		tempLine['$'].name = `Line${i + 1}`;
		tempLine['$'].line = `${Math.floor(line['Start X'])} ${
			Math.floor(line['Start Y']) + 30
		} ${Math.floor(line['End X'])} ${Math.floor(line['End Y']) + 30}`;
		switch (line['Layer']) {
			case 'CP_Process':
				tempLine['$'].forecolor = 'white';
				break;
			case 'CP_CIP':
				tempLine['$'].forecolor = 'gray';
				break;
			case 'CP_Chemical':
				tempLine['$'].forecolor = 'magenta';
				break;
			case 'CP_Service':
				tempLine['$'].forecolor = 'blue';
				break;
			case 'air':
				tempLine['$'].forecolor = 'cyan';
				break;
			case 'glycol':
				tempLine['$'].forecolor = '#00C000';
				break;
			case 'steam':
				tempLine['$'].forecolor = '#F00000';
				break;
		}
		xmlLines.push(tempLine);
	});
	return xmlLines;
};

module.exports = {
	lineSeparator: lineSeparator,
	createXmlLines: createXmlLines,
};
