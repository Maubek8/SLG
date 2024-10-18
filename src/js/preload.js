const { contextBridge, ipcRenderer } = require('electron');

// Expor APIs seguras para o contexto da página
contextBridge.exposeInMainWorld('electron', {
    sendMessage: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    onMessage: (channel, callback) => {
        ipcRenderer.on(channel, (event, ...args) => callback(...args));
    }
});
