// Modules
const { app, BrowserWindow,Menu } = require('electron');
const { ipcMain } = require('electron');
const xml2js = require('xml2js');
const fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
const tempFolder = app.getPath('temp');
var dir = `${tempFolder}\\FTVSE`;
let userPath;

// Create a new BrowserWindow when `app` is ready
function createWindow() {
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 800,
		webPreferences: { nodeIntegration: true },
		transparent: true,
		minWidth: 992,
		minHeight: 600,
		
	});

	// Load index.html into the new BrowserWindow
	mainWindow.loadFile('index.html'); 

	// Open DevTools - Remove for PRODUCTION!
	 mainWindow.webContents.openDevTools();

	// Listen for window being closed
	mainWindow.on('closed', () => {
		mainWindow = null;
	});

	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir);
	}
}

Menu.setApplicationMenu(null)
// Electron `app` is ready
app.on('ready', createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on('activate', () => {
	if (mainWindow === null) createWindow();
});

// IPC
ipcMain.on('ondragstart', (event, filePath) => {
	readFile(filePath);

	function readFile(filepath) {
		fs.readFile(filepath, 'utf-8', (err, data) => {
			if (err) {
				alert('An error ocurred reading the file :' + err.message);
				return;
			}
		});
	}
});
 
ipcMain.on('buildXML', (event, screenXML, filename) => {
	console.time(`${filename}m`);  
	var builder = new xml2js.Builder();
	var xml = builder.buildObject(screenXML);
	let filepath = `${tempFolder}\\FTVSE\\${filename}.xml`;
	console.log(filepath);
	fs.writeFile(filepath, xml, err => {
		if (err) throw err;
		console.log(`${filename}.xml has been created`);
	});

	event.reply('XMLCreated', filename, `${tempFolder}\\FTVSE`);
	console.timeEnd(`${filename}m`);
});

ipcMain.on('complete', event => {
	event.reply('filePath', tempFolder);
});
