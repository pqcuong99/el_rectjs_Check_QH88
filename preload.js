const {contextBridge, ipcRenderer} = require("electron");


contextBridge.exposeInMainWorld('eventCheck', {
    // findDataByUuid: (data) => ipcRenderer.invoke('findDataByUuid',data),
    runCheckTaxi_30s: () => ipcRenderer.invoke('runCheckTaxi_30s'),
    runCheckXocDia_30s: () => ipcRenderer.invoke('runCheckXocDia_30s'),
    runCheckXocDia_45s: () => ipcRenderer.invoke('runCheckXocDia_45s'),
    runCheckTaxi_45s: () => ipcRenderer.invoke('runCheckTaxi_45s'),
    runCheckTaxi_60s: () => ipcRenderer.invoke('runCheckTaxi_60s'),
    runCheckXocDia_60s: () => ipcRenderer.invoke('runCheckXocDia_60s'),

    // Lắng nghe sự kiện từ main process để cập nhật dữ liệu
    onUpdate_runCheckTaxi_30s: (callback) => {
        ipcRenderer.on('onUpdate_runCheckTaxi_30s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheckXocDia_30s: (callback) => {
        ipcRenderer.on('onUpdate_runCheckXocDia_30s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheckXocDia_45s: (callback) => {
        ipcRenderer.on('onUpdate_runCheckXocDia_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheckTaxi_45s: (callback) => {
        ipcRenderer.on('onUpdate_runCheckTaxi_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheckTaxi_60s: (callback) => {
        ipcRenderer.on('onUpdate_runCheckTaxi_60s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheckXocDia_60s: (callback) => {
        ipcRenderer.on('onUpdate_runCheckXocDia_60s', (event, data) => {
            callback(data);
        });
    },


    // show/hide image load 
    onUpdate_ImageCheckTaxi_30s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheckTaxi_30s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheckTaxi_45s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheckTaxi_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheckTaxi_60s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheckTaxi_60s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheckXocDia_30s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheckXocDia_30s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheckXocDia_45s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheckXocDia_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheckXocDia_60s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheckXocDia_60s', (event, data) => {
            callback(data);
        });
    },
})



contextBridge.exposeInMainWorld('eventCheck_SieuToc', {
    runCheck_VN_SieuToc_45s: () => ipcRenderer.invoke('runCheck_VN_SieuToc_45s'),
    runCheck_VN_SieuToc_60s: () => ipcRenderer.invoke('runCheck_VN_SieuToc_60s'),
    runCheck_VN_SieuToc_90s: () => ipcRenderer.invoke('runCheck_VN_SieuToc_90s'),

    runCheck_SieuToc_45s: () => ipcRenderer.invoke('runCheck_SieuToc_45s'),
    runCheck_SieuToc_60s: () => ipcRenderer.invoke('runCheck_SieuToc_60s'),
    runCheck_SieuToc_90s: () => ipcRenderer.invoke('runCheck_SieuToc_90s'),

    // Lắng nghe sự kiện từ main process để cập nhật dữ liệu
    onUpdate_runCheck_VN_SieuToc_45s: (callback) => {
        ipcRenderer.on('onUpdate_runCheck_VN_SieuToc_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheck_VN_SieuToc_60s: (callback) => {
        ipcRenderer.on('onUpdate_runCheck_VN_SieuToc_60s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheck_VN_SieuToc_90s: (callback) => {
        ipcRenderer.on('onUpdate_runCheck_VN_SieuToc_90s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheck_SieuToc_45s: (callback) => {
        ipcRenderer.on('onUpdate_runCheck_SieuToc_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheck_SieuToc_60s: (callback) => {
        ipcRenderer.on('onUpdate_runCheck_SieuToc_60s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_runCheck_SieuToc_90s: (callback) => {
        ipcRenderer.on('onUpdate_runCheck_SieuToc_90s', (event, data) => {
            callback(data);
        });
    },


    // show/hide image load 
    onUpdate_ImageCheck_VN_SieuToc_45s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheck_VN_SieuToc_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheck_VN_SieuToc_60s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheck_VN_SieuToc_60s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheck_VN_SieuToc_90s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheck_VN_SieuToc_90s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheck_SieuToc_45s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheck_SieuToc_45s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheck_SieuToc_60s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheck_SieuToc_60s', (event, data) => {
            callback(data);
        });
    },
    onUpdate_ImageCheck_SieuToc_90s: (callback) => {
        ipcRenderer.on('onUpdate_ImageCheck_SieuToc_90s', (event, data) => {
            callback(data);
        });
    },
})

