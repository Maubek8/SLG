const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // Cria uma janela do navegador
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,  // Desabilitar nodeIntegration por segurança
      contextIsolation: true,  // Ativar o contextIsolation para segurança
    }
  });

  // Carrega a página HTML principal
  win.loadFile('index.html');

  // Abre as DevTools opcionalmente (para depuração)
  // win.webContents.openDevTools();
}

// Chamado quando o Electron está pronto para criar janelas
app.on('ready', createWindow);

// Sai quando todas as janelas estão fechadas, exceto no macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// No macOS, recria a janela quando o ícone do dock é clicado
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
