const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWin;
let indexPath;
let isDev = false;

if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development') isDev = true;

function createWindow() {
    mainWin = new BrowserWindow({
        width: 1024,
        height: 768,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    indexPath = isDev ? "http://localhost:8080/index.html" : `file://${path.join(__dirname, 'dist', 'index.html')}`;

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