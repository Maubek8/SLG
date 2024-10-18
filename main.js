const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'src/js/preload.js'), // Pré-carregamento seguro
            contextIsolation: true, // Garante que o contexto da página web seja isolado do contexto Node.js
            enableRemoteModule: false, // Desabilita o uso do módulo remoto
            nodeIntegration: false // Recomendado false para segurança
        }
    });

    // Carregar a página de login ao iniciar
    mainWindow.loadFile(path.join(__dirname, 'src/html/login.html'));

    // Se a janela for fechada
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

// Quando o Electron estiver pronto para iniciar
app.on('ready', createWindow);

// Fechar o aplicativo quando todas as janelas forem fechadas
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Criar nova janela se o aplicativo for ativado novamente
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
