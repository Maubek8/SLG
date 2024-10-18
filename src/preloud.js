const { contextBridge, ipcRenderer } = require('electron');

// Exposing safe APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  sendToMain: (channel, data) => {
    // whitelist channels to prevent exposing all IPC channels
    const validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  receiveFromMain: (channel, func) => {
    const validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      // Remove the listener if exists to avoid memory leaks
      ipcRenderer.removeAllListeners(channel);
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  }
});
