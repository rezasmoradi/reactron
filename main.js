const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWin;
let indexPath;
let isDev = false;

// Determine Development or production environment
if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') isDev = true;

function createWindow() {
    // create main window with specific width and height
    mainWin = new BrowserWindow({
        width: 1024,
        height: 768,
        show: false,
        webPreferences: {
            nodeIntegration: true, // use node
            contextIsolation: false, // use require or import
            enableRemoteModule: true // test
        }
    });

    // set path based on production or development env to use react
    indexPath = isDev && process.argv.indexOf('--noDevServer') === -1
        ? "http://localhost:8080/index.html"
        : `file://${path.join(__dirname, 'dist', 'index.html')}`;

    mainWin.loadURL(indexPath);

    mainWin.once('ready-to-show', () => {
        mainWin.show();

        if (isDev) mainWin.webContents.openDevTools();
    });

    mainWin.on('closed', () => {
        mainWin = null
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})

app.on('activate', () => {
    if (mainWin === null) createWindow();
})