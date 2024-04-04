const {contextBridge, ipcRenderer} = require("electron");

contextBridge.exposeInMainWorld('eventCheck', {
    // findDataByUuid: (data) => ipcRenderer.invoke('findDataByUuid',data),
    runCheckTaxi_30s: () => ipcRenderer.invoke('runCheckTaxi_30s'),
    runCheckXocDia_30s: () => ipcRenderer.invoke('runCheckXocDia_30s'),
    runCheckXocDia_45s: () => ipcRenderer.invoke('runCheckXocDia_45s'),
    runCheckTaxi_45s: () => ipcRenderer.invoke('runCheckTaxi_45s'),
    runCheckTaxi_60s: () => ipcRenderer.invoke('runCheckTaxi_60s'),
    runCheckXocDia_60s: () => ipcRenderer.invoke('runCheckXocDia_60s'),
})