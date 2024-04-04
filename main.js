const { app, ipcMain, BrowserWindow } = require("electron");
const qh88_Trochoi = require("./src/controller/QH_88_Trochoi");
const telegram_handler = require("./src/controller/Send_message_telegram");

let ev_Trochoi = new qh88_Trochoi.QH88_Event;
let telegram_Handler = new telegram_handler.Telegram_Handler;

const path = require("path");

let win;


const createWindow = () => {
    win = new BrowserWindow({
      width: 300,
      height: 400,
      webPreferences: {
        devTools: false,
        contextIsolation: true,
        preload: path.join(__dirname, "preload.js"),
      },
    });
    win.loadFile("index.html");
    win.webContents.openDevTools();
};

app.whenReady().then(() => {
    createWindow();
  
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});

async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}




let old_Turn_Taxi_30s = ""
let chan_Taxi_30s = 0;
let le_Taxi_30s = 0;
let tai_Taxi_30s = 0;
let xiu_Taxi_30s = 0;
ipcMain.handle('runCheckTaxi_30s',async() =>{
    // telegram_Handler.guiTinNhanNhomTelegram("123");
    while (true) {
        await sleep(8000).then(async() => {
            let res = await ev_Trochoi.Result_VN_Taxi_30s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_Taxi_30s != turnNum){
                    old_Turn_Taxi_30s = turnNum;
                    let n1  = parseInt(res.n1)
                    let n2  = parseInt(res.n2)
                    let n3  = parseInt(res.n3)

                    let sum = n1 + n2 + n3;

                    if(sum % 2 == 0){
                        chan_Taxi_30s += 1;
                        le_Taxi_30s = 0;
                    }else{
                        chan_Taxi_30s = 0;
                        le_Taxi_30s += 1;
                    }
                    
                    if(sum > 10 ){
                        tai_Taxi_30s += 1;
                        xiu_Taxi_30s = 0;
                    }else{
                        tai_Taxi_30s = 0;
                        xiu_Taxi_30s += 1;
                    }

                    if(chan_Taxi_30s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 30s:\n - Chẵn : "+chan_Taxi_30s+"\n Hãy đánh : LẺ")
                    }
                    if(le_Taxi_30s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 30s:\n - Lẻ : "+le_Taxi_30s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_Taxi_30s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 30s:\n - Tài : "+tai_Taxi_30s+"\n Hãy đánh : Xỉu")
                    }
                    if(xiu_Taxi_30s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 30s:\n - Xỉu : "+xiu_Taxi_30s+"\n Hãy đánh : Tài")
                    }
                }
            }
        })

        
    }
})


let old_Turn_XocDia_30s = ""
let chan_XocDia_30s = 0;
let le_XocDia_30s = 0;
ipcMain.handle('runCheckXocDia_30s',async() =>{
    while (true) {
        await sleep(8000).then(async() => {
            let res = await ev_Trochoi.Result_VN_XocDia_30s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_XocDia_30s != turnNum){
                    old_Turn_XocDia_30s = turnNum;
                    let n1  = parseInt(res.n1)
                    let n2  = parseInt(res.n2)
                    let n3  = parseInt(res.n3)
                    let n4  = parseInt(res.n4)

                    let sum = n1 + n2 + n3 + n4;

                    if(sum % 2 == 0){
                        chan_XocDia_30s += 1;
                        le_XocDia_30s = 0;
                    }else{
                        chan_XocDia_30s = 0;
                        le_XocDia_30s += 1;
                    }

                    if(chan_XocDia_30s > 7){
                        telegram_Handler.SendMessager_Chanel_XocDia("*** Trò chơi Xóc Đĩa 30s:\n - Chẵn : "+chan_XocDia_30s+"\n Hãy đánh : LẺ")
                    }
                    if(le_XocDia_30s > 7){
                        telegram_Handler.SendMessager_Chanel_XocDia("*** Trò chơi Xóc Đĩa 30s:\n - Lẻ : "+le_XocDia_30s+"\n Hãy đánh : CHẴN")
                    }
                    
                }
            }
        })
        
    }
})


let old_Turn_XocDia_45s = ""
let chan_XocDia_45s = 0;
let le_XocDia_45s = 0;
ipcMain.handle('runCheckXocDia_45s',async() =>{
    while (true) {
        await sleep(8000).then(async() => {
            let res = await ev_Trochoi.Result_VN_XocDia_45s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_XocDia_45s != turnNum){
                    old_Turn_XocDia_45s = turnNum;
                    let n1  = parseInt(res.n1)
                    let n2  = parseInt(res.n2)
                    let n3  = parseInt(res.n3)
                    let n4  = parseInt(res.n4)

                    let sum = n1 + n2 + n3 +n4;

                    if(sum % 2 == 0){
                        chan_XocDia_45s += 1;
                        le_XocDia_45s = 0;
                    }else{
                        chan_XocDia_45s = 0;
                        le_XocDia_45s += 1;
                    }

                    if(chan_XocDia_45s > 7){
                        telegram_Handler.SendMessager_Chanel_XocDia("*** Trò chơi Xóc Đĩa 45s:\n - Chẵn : "+chan_XocDia_45s+"\n Hãy đánh : LẺ")
                    }
                    if(le_XocDia_45s > 7){
                        telegram_Handler.SendMessager_Chanel_XocDia("*** Trò chơi Xóc Đĩa 45s:\n - Lẻ : "+le_XocDia_45s+"\n Hãy đánh : CHẴN")
                    }
                }
            }
        })
        
    }
})


let old_Turn_Taxi_45s = ""
let chan_Taxi_45s = 0;
let le_Taxi_45s = 0;
let tai_Taxi_45s = 0;
let xiu_Taxi_45s = 0;
ipcMain.handle('runCheckTaxi_45s',async() =>{
    while (true) {
        await sleep(8000).then(async() => {
            let res = await ev_Trochoi.Result_VN_Taxi_45s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_Taxi_45s != turnNum){
                    old_Turn_Taxi_45s = turnNum;
                    let n1  = parseInt(res.n1)
                    let n2  = parseInt(res.n2)
                    let n3  = parseInt(res.n3)

                    let sum = n1 + n2 + n3;

                    if(sum % 2 == 0){
                        chan_Taxi_45s += 1;
                        le_Taxi_45s = 0;
                    }else{
                        chan_Taxi_45s = 0;
                        le_Taxi_45s += 1;
                    }
                    
                    if(sum > 10 ){
                        tai_Taxi_45s += 1;
                        xiu_Taxi_45s = 0;
                    }else{
                        tai_Taxi_45s = 0;
                        xiu_Taxi_45s += 1;
                    }

                    if(chan_Taxi_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 45s:\n - Chẵn : "+chan_Taxi_45s+"\n Hãy đánh : LẺ")
                    }
                    if(le_Taxi_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 45s:\n - Lẻ : "+le_Taxi_45s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_Taxi_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 45s:\n - Tài : "+tai_Taxi_45s+"\n Hãy đánh : Xỉu")
                    }
                    if(xiu_Taxi_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 45s:\n - Xỉu : "+xiu_Taxi_45s+"\n Hãy đánh : Tài")
                    }
                }
            }
        })
        
    }
})



let old_Turn_XocDia_60s = ""
let chan_XocDia_60s = 0;
let le_XocDia_60s = 0;
ipcMain.handle('runCheckXocDia_60s',async() =>{
    while (true) {
        await sleep(8000).then(async() => {
            let res = await ev_Trochoi.Result_VN_XocDia_60s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_XocDia_60s != turnNum){
                    old_Turn_XocDia_60s = turnNum;
                    let n1  = parseInt(res.n1)
                    let n2  = parseInt(res.n2)
                    let n3  = parseInt(res.n3)
                    let n4  = parseInt(res.n4)

                    let sum = n1 + n2 + n3 +n4;

                    if(sum % 2 == 0){
                        chan_XocDia_60s += 1;
                        le_XocDia_60s = 0;
                    }else{
                        chan_XocDia_60s = 0;
                        le_XocDia_60s += 1;
                    }

                    if(chan_XocDia_60s > 7){
                        telegram_Handler.SendMessager_Chanel_XocDia("*** Trò chơi Xóc Đĩa 60s:\n - Chẵn : "+chan_XocDia_60s+"\n Hãy đánh : LẺ")
                    }
                    if(le_XocDia_60s > 7){
                        telegram_Handler.SendMessager_Chanel_XocDia("*** Trò chơi Xóc Đĩa 60s:\n - Lẻ : "+le_XocDia_60s+"\n Hãy đánh : CHẴN")
                    }
                    
                }
            }
        })
        
    }
})



let old_Turn_Taxi_60s = ""
let chan_Taxi_60s = 0;
let le_Taxi_60s = 0;
let tai_Taxi_60s = 0;
let xiu_Taxi_60s = 0;
ipcMain.handle('runCheckTaxi_60s',async() =>{
    while (true) {
        await sleep(8000).then(async() => {
            let res = await ev_Trochoi.Result_VN_Taxi_60s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_Taxi_60s != turnNum){
                    old_Turn_Taxi_60s = turnNum;
                    let n1  = parseInt(res.n1)
                    let n2  = parseInt(res.n2)
                    let n3  = parseInt(res.n3)

                    let sum = n1 + n2 + n3;

                    if(sum % 2 == 0){
                        chan_Taxi_60s += 1;
                        le_Taxi_60s = 0;
                    }else{
                        chan_Taxi_60s = 0;
                        le_Taxi_60s += 1;
                    }
                    
                    if(sum > 10 ){
                        tai_Taxi_60s += 1;
                        xiu_Taxi_60s = 0;
                    }else{
                        tai_Taxi_60s = 0;
                        xiu_Taxi_60s += 1;
                    }

                    if(chan_Taxi_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 60s:\n - Chẵn : "+chan_Taxi_60s+"\n Hãy đánh : LẺ")
                    }
                    if(le_Taxi_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 60s:\n - Lẻ : "+le_Taxi_60s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_Taxi_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 60s:\n - Tài : "+tai_Taxi_60s+"\n Hãy đánh : Xỉu")
                    }
                    if(xiu_Taxi_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Trò chơi tài xỉu 60s:\n - Xỉu : "+xiu_Taxi_60s+"\n Hãy đánh : Tài")
                    }
                }
            }
        })
        
    }
})