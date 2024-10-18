const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Evita ataques de protótipos
      enableRemoteModule: false,
      nodeIntegration: false // Mantenha false para evitar problemas de segurança
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.webContents.openDevTools(); // Remova essa linha em produção
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
