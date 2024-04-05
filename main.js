const { app, ipcMain, BrowserWindow } = require("electron");
const qh88_Trochoi = require("./src/controller/QH_88_Trochoi");
const qh88_SieuToc = require("./src/controller/QH88_SieuToc");
const telegram_handler = require("./src/controller/Send_message_telegram");

let ev_Trochoi = new qh88_Trochoi.QH88_Event;
let ev_SieuToc = new qh88_SieuToc.QH88_Event_SieuToc;
let telegram_Handler = new telegram_handler.Telegram_Handler;

const path = require("path");

let win;


const createWindow = () => {
    win = new BrowserWindow({
      width: 430,
      height: 500,
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
ipcMain.handle('runCheckTaxi_30s',async(event) =>{
    // telegram_Handler.guiTinNhanNhomTelegram("123");
    while (true) {
        event.sender.send('onUpdate_ImageCheckTaxi_30s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheckTaxi_30s', "hidden");
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
                    event.sender.send('onUpdate_runCheckTaxi_30s', {turn:turnNum.split("-")[1],tai:tai_Taxi_30s,xiu:xiu_Taxi_30s,chan:chan_Taxi_30s,le:le_Taxi_30s});
                }
            }
        })
        
        
    }
})


let old_Turn_XocDia_30s = ""
let chan_XocDia_30s = 0;
let le_XocDia_30s = 0;
ipcMain.handle('runCheckXocDia_30s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheckXocDia_30s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheckXocDia_30s', "hidden");
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
                    event.sender.send('onUpdate_runCheckXocDia_30s', {turn:turnNum.split("-")[1],chan:chan_XocDia_30s,le:le_XocDia_30s});
                }
            }
        })
       
    }
})


let old_Turn_XocDia_45s = ""
let chan_XocDia_45s = 0;
let le_XocDia_45s = 0;
ipcMain.handle('runCheckXocDia_45s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheckXocDia_45s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheckXocDia_45s', "hidden");
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
                    event.sender.send('onUpdate_runCheckXocDia_45s', {turn:turnNum.split("-")[1],chan:chan_XocDia_45s,le:le_XocDia_45s});
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
ipcMain.handle('runCheckTaxi_45s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheckTaxi_45s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheckTaxi_45s', "hidden");
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

                    event.sender.send('onUpdate_runCheckTaxi_45s', {turn:turnNum.split("-")[1],tai:tai_Taxi_45s,xiu:xiu_Taxi_45s,chan:chan_Taxi_45s,le:le_Taxi_45s});
                }
            }
        })
        
    }
})



let old_Turn_XocDia_60s = ""
let chan_XocDia_60s = 0;
let le_XocDia_60s = 0;
ipcMain.handle('runCheckXocDia_60s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheckXocDia_60s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheckXocDia_60s', "hidden");
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
                    event.sender.send('onUpdate_runCheckXocDia_60s', {turn:turnNum.split("-")[1],chan:chan_XocDia_60s,le:le_XocDia_60s});
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
ipcMain.handle('runCheckTaxi_60s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheckTaxi_60s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheckTaxi_60s', "hidden");
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
                    event.sender.send('onUpdate_runCheckTaxi_60s', {turn:turnNum.split("-")[1],tai:tai_Taxi_60s,xiu:xiu_Taxi_60s,chan:chan_Taxi_60s,le:le_Taxi_60s});
                }
            }
        })
        
    }
})




let old_Turn_VN_SieuToc_45s = ""
let chan_VN_SieuToc_45s = 0;
let le_VN_SieuToc_45s = 0;
let tai_VN_SieuToc_45s = 0;
let xiu_VN_SieuToc_45s = 0;
let sum_chan_VN_SieuToc_45s = 0;
let sum_le_VN_SieuToc_45s = 0;
ipcMain.handle('runCheck_VN_SieuToc_45s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheck_VN_SieuToc_45s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheck_VN_SieuToc_45s', "hidden");
            let res = await ev_SieuToc.Result_VN_SieuToc_45s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_VN_SieuToc_45s != turnNum){
                    old_Turn_VN_SieuToc_45s = turnNum;
                    let n5  = parseInt(res.n5)
                    let n6  = parseInt(res.n6)

                    let sum =  n5 + n6;

                    if(n6 % 2 == 0){
                        chan_VN_SieuToc_45s += 1;
                        le_VN_SieuToc_45s = 0;
                    }else{
                        chan_VN_SieuToc_45s = 0;
                        le_VN_SieuToc_45s += 1;
                    }
                    
                    if(n5 > 4 ){
                        tai_VN_SieuToc_45s += 1;
                        xiu_VN_SieuToc_45s = 0;
                    }else{
                        tai_VN_SieuToc_45s = 0;
                        xiu_VN_SieuToc_45s += 1;
                    }

                    if(sum % 2 == 0){
                        sum_chan_VN_SieuToc_45s += 1;
                        sum_le_VN_SieuToc_45s = 0;
                    }else{
                        sum_chan_VN_SieuToc_45s = 0;
                        sum_le_VN_SieuToc_45s += 1;
                    }
                    

                    if(chan_VN_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 45s:\n- Chẵn : "+chan_VN_SieuToc_45s+"\n Hãy đánh : LẺ")
                    }
                    if(le_VN_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 45s:\n- LẺ : "+le_VN_SieuToc_45s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_VN_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 45s:\n- Tài : "+tai_VN_SieuToc_45s+"\n Hãy đánh : XỈU")
                    }
                    if(xiu_VN_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 45s:\n- XỈU : "+xiu_VN_SieuToc_45s+"\n Hãy đánh : TÀI")
                    }
                    if(sum_chan_VN_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 45s:\n- Tổng Chẵn : "+sum_chan_VN_SieuToc_45s+"\n Hãy đánh : Tổng Lẻ")
                    }
                    if(sum_le_VN_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 45s:\n- Tổng LẺ : "+sum_le_VN_SieuToc_45s+"\n Hãy đánh : Tổng Chẵn")
                    }
                    
                    event.sender.send('onUpdate_runCheck_VN_SieuToc_45s', {turn:turnNum.split("-")[1],
                        chan:chan_VN_SieuToc_45s,le:le_VN_SieuToc_45s,tai:tai_VN_SieuToc_45s,xiu:xiu_VN_SieuToc_45s,sumchan:sum_chan_VN_SieuToc_45s,sumle:sum_le_VN_SieuToc_45s});
                }
            }
        })
        
    }
})



let old_Turn_VN_SieuToc_60s = ""
let chan_VN_SieuToc_60s = 0;
let le_VN_SieuToc_60s = 0;
let tai_VN_SieuToc_60s = 0;
let xiu_VN_SieuToc_60s = 0;
let sum_chan_VN_SieuToc_60s = 0;
let sum_le_VN_SieuToc_60s = 0;
ipcMain.handle('runCheck_VN_SieuToc_60s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheck_VN_SieuToc_60s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheck_VN_SieuToc_60s', "hidden");
            let res = await ev_SieuToc.Result_VN_SieuToc_60s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_VN_SieuToc_60s != turnNum){
                    old_Turn_VN_SieuToc_60s = turnNum;
                    let n5  = parseInt(res.n5)
                    let n6  = parseInt(res.n6)

                    let sum =  n5 + n6;

                    if(n6 % 2 == 0){
                        chan_VN_SieuToc_60s += 1;
                        le_VN_SieuToc_60s = 0;
                    }else{
                        chan_VN_SieuToc_60s = 0;
                        le_VN_SieuToc_60s += 1;
                    }
                    
                    if(n5 > 4 ){
                        tai_VN_SieuToc_60s += 1;
                        xiu_VN_SieuToc_60s = 0;
                    }else{
                        tai_VN_SieuToc_60s = 0;
                        xiu_VN_SieuToc_60s += 1;
                    }

                    if(sum % 2 == 0){
                        sum_chan_VN_SieuToc_60s += 1;
                        sum_le_VN_SieuToc_60s = 0;
                    }else{
                        sum_chan_VN_SieuToc_60s = 0;
                        sum_le_VN_SieuToc_60s += 1;
                    }
                    

                    if(chan_VN_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 60s:\n- Chẵn : "+chan_VN_SieuToc_60s+"\n Hãy đánh : LẺ")
                    }
                    if(le_VN_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 60s:\n- LẺ : "+le_VN_SieuToc_60s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_VN_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 60s:\n- Tài : "+tai_VN_SieuToc_60s+"\n Hãy đánh : XỈU")
                    }
                    if(xiu_VN_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 60s:\n- XỈU : "+xiu_VN_SieuToc_60s+"\n Hãy đánh : TÀI")
                    }
                    if(sum_chan_VN_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 60s:\n- Tổng Chẵn : "+sum_chan_VN_SieuToc_60s+"\n Hãy đánh : Tổng Lẻ")
                    }
                    if(sum_le_VN_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 60s:\n- Tổng LẺ : "+sum_le_VN_SieuToc_60s+"\n Hãy đánh : Tổng Chẵn")
                    }
                    
                    event.sender.send('onUpdate_runCheck_VN_SieuToc_60s', {turn:turnNum.split("-")[1],
                        chan:chan_VN_SieuToc_60s,le:le_VN_SieuToc_60s,tai:tai_VN_SieuToc_60s,xiu:xiu_VN_SieuToc_60s,sumchan:sum_chan_VN_SieuToc_60s,sumle:sum_le_VN_SieuToc_60s});
                }
            }
        })
        
    }
})



let old_Turn_VN_SieuToc_90s = ""
let chan_VN_SieuToc_90s = 0;
let le_VN_SieuToc_90s = 0;
let tai_VN_SieuToc_90s = 0;
let xiu_VN_SieuToc_90s = 0;
let sum_chan_VN_SieuToc_90s = 0;
let sum_le_VN_SieuToc_90s = 0;
ipcMain.handle('runCheck_VN_SieuToc_90s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheck_VN_SieuToc_90s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheck_VN_SieuToc_90s', "hidden");
            let res = await ev_SieuToc.Result_VN_SieuToc_90s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_VN_SieuToc_90s != turnNum){
                    old_Turn_VN_SieuToc_90s = turnNum;
                    let n5  = parseInt(res.n5)
                    let n6  = parseInt(res.n6)

                    let sum =  n5 + n6;

                    if(n6 % 2 == 0){
                        chan_VN_SieuToc_90s += 1;
                        le_VN_SieuToc_90s = 0;
                    }else{
                        chan_VN_SieuToc_90s = 0;
                        le_VN_SieuToc_90s += 1;
                    }
                    
                    if(n5 > 4 ){
                        tai_VN_SieuToc_90s += 1;
                        xiu_VN_SieuToc_90s = 0;
                    }else{
                        tai_VN_SieuToc_90s = 0;
                        xiu_VN_SieuToc_90s += 1;
                    }

                    if(sum % 2 == 0){
                        sum_chan_VN_SieuToc_90s += 1;
                        sum_le_VN_SieuToc_90s = 0;
                    }else{
                        sum_chan_VN_SieuToc_90s = 0;
                        sum_le_VN_SieuToc_90s += 1;
                    }
                    

                    if(chan_VN_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 90s:\n- Chẵn : "+chan_VN_SieuToc_90s+"\n Hãy đánh : LẺ")
                    }
                    if(le_VN_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 90s:\n- LẺ : "+le_VN_SieuToc_90s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_VN_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 90s:\n- Tài : "+tai_VN_SieuToc_90s+"\n Hãy đánh : XỈU")
                    }
                    if(xiu_VN_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 90s:\n- XỈU : "+xiu_VN_SieuToc_90s+"\n Hãy đánh : TÀI")
                    }
                    if(sum_chan_VN_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 90s:\n- Tổng Chẵn : "+sum_chan_VN_SieuToc_90s+"\n Hãy đánh : Tổng Lẻ")
                    }
                    if(sum_le_VN_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** VN Siêu Tốc 90s:\n- Tổng LẺ : "+sum_le_VN_SieuToc_90s+"\n Hãy đánh : Tổng Chẵn")
                    }
                    
                    event.sender.send('onUpdate_runCheck_VN_SieuToc_90s', {turn:turnNum.split("-")[1],
                        chan:chan_VN_SieuToc_90s,le:le_VN_SieuToc_90s,tai:tai_VN_SieuToc_90s,xiu:xiu_VN_SieuToc_90s,sumchan:sum_chan_VN_SieuToc_90s,sumle:sum_le_VN_SieuToc_90s});
                }
            }
        })
        
    }
})




let old_Turn_SieuToc_45s = ""
let chan_SieuToc_45s = 0;
let le_SieuToc_45s = 0;
let tai_SieuToc_45s = 0;
let xiu_SieuToc_45s = 0;
let sum_chan_SieuToc_45s = 0;
let sum_le_SieuToc_45s = 0;
ipcMain.handle('runCheck_SieuToc_45s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheck_SieuToc_45s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheck_SieuToc_45s', "hidden");
            let res = await ev_SieuToc.Result_SieuToc_45s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_SieuToc_45s != turnNum){
                    old_Turn_SieuToc_45s = turnNum;
                    let n5  = parseInt(res.n5)
                    let n6  = parseInt(res.n6)

                    let sum =  n5 + n6;

                    if(n6 % 2 == 0){
                        chan_SieuToc_45s += 1;
                        le_SieuToc_45s = 0;
                    }else{
                        chan_SieuToc_45s = 0;
                        le_SieuToc_45s += 1;
                    }
                    
                    if(n5 > 4 ){
                        tai_SieuToc_45s += 1;
                        xiu_SieuToc_45s = 0;
                    }else{
                        tai_SieuToc_45s = 0;
                        xiu_SieuToc_45s += 1;
                    }

                    if(sum % 2 == 0){
                        sum_chan_SieuToc_45s += 1;
                        sum_le_SieuToc_45s = 0;
                    }else{
                        sum_chan_SieuToc_45s = 0;
                        sum_le_SieuToc_45s += 1;
                    }
                    

                    if(chan_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 45s:\n- Chẵn : "+chan_SieuToc_45s+"\n Hãy đánh : LẺ")
                    }
                    if(le_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 45s:\n- LẺ : "+le_SieuToc_45s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 45s:\n- Tài : "+tai_SieuToc_45s+"\n Hãy đánh : XỈU")
                    }
                    if(xiu_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 45s:\n- XỈU : "+xiu_SieuToc_45s+"\n Hãy đánh : TÀI")
                    }
                    if(sum_chan_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 45s:\n- Tổng Chẵn : "+sum_chan_SieuToc_45s+"\n Hãy đánh : Tổng Lẻ")
                    }
                    if(sum_le_SieuToc_45s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 45s:\n- Tổng LẺ : "+sum_le_SieuToc_45s+"\n Hãy đánh : Tổng Chẵn")
                    }
                    
                    event.sender.send('onUpdate_runCheck_SieuToc_45s', {turn:turnNum.split("-")[1],
                        chan:chan_SieuToc_45s,le:le_SieuToc_45s,tai:tai_SieuToc_45s,xiu:xiu_SieuToc_45s,sumchan:sum_chan_SieuToc_45s,sumle:sum_le_SieuToc_45s});
                }
            }
        })
        
    }
})



let old_Turn_SieuToc_60s = ""
let chan_SieuToc_60s = 0;
let le_SieuToc_60s = 0;
let tai_SieuToc_60s = 0;
let xiu_SieuToc_60s = 0;
let sum_chan_SieuToc_60s = 0;
let sum_le_SieuToc_60s = 0;
ipcMain.handle('runCheck_SieuToc_60s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheck_SieuToc_60s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheck_SieuToc_60s', "hidden");
            let res = await ev_SieuToc.Result_SieuToc_60s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_SieuToc_60s != turnNum){
                    old_Turn_SieuToc_60s = turnNum;
                    let n5  = parseInt(res.n5)
                    let n6  = parseInt(res.n6)

                    let sum =  n5 + n6;

                    if(n6 % 2 == 0){
                        chan_SieuToc_60s += 1;
                        le_SieuToc_60s = 0;
                    }else{
                        chan_SieuToc_60s = 0;
                        le_SieuToc_60s += 1;
                    }
                    
                    if(n5 > 4 ){
                        tai_SieuToc_60s += 1;
                        xiu_SieuToc_60s = 0;
                    }else{
                        tai_SieuToc_60s = 0;
                        xiu_SieuToc_60s += 1;
                    }

                    if(sum % 2 == 0){
                        sum_chan_SieuToc_60s += 1;
                        sum_le_SieuToc_60s = 0;
                    }else{
                        sum_chan_SieuToc_60s = 0;
                        sum_le_SieuToc_60s += 1;
                    }
                    

                    if(chan_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 60s:\n- Chẵn : "+chan_SieuToc_60s+"\n Hãy đánh : LẺ")
                    }
                    if(le_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 60s:\n- LẺ : "+le_SieuToc_60s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 60s:\n- Tài : "+tai_SieuToc_60s+"\n Hãy đánh : XỈU")
                    }
                    if(xiu_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 60s:\n- XỈU : "+xiu_SieuToc_60s+"\n Hãy đánh : TÀI")
                    }
                    if(sum_chan_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 60s:\n- Tổng Chẵn : "+sum_chan_SieuToc_60s+"\n Hãy đánh : Tổng Lẻ")
                    }
                    if(sum_le_SieuToc_60s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 60s:\n- Tổng LẺ : "+sum_le_SieuToc_60s+"\n Hãy đánh : Tổng Chẵn")
                    }
                    
                    event.sender.send('onUpdate_runCheck_SieuToc_60s', {turn:turnNum.split("-")[1],
                        chan:chan_SieuToc_60s,le:le_SieuToc_60s,tai:tai_SieuToc_60s,xiu:xiu_SieuToc_60s,sumchan:sum_chan_SieuToc_60s,sumle:sum_le_SieuToc_60s});
                }
            }
        })
        
    }
})



let old_Turn_SieuToc_90s = ""
let chan_SieuToc_90s = 0;
let le_SieuToc_90s = 0;
let tai_SieuToc_90s = 0;
let xiu_SieuToc_90s = 0;
let sum_chan_SieuToc_90s = 0;
let sum_le_SieuToc_90s = 0;
ipcMain.handle('runCheck_SieuToc_90s',async(event) =>{
    while (true) {
        event.sender.send('onUpdate_ImageCheck_SieuToc_90s', "none");
        await sleep(8000).then(async() => {
            event.sender.send('onUpdate_ImageCheck_SieuToc_90s', "hidden");
            let res = await ev_SieuToc.Result_SieuToc_90s();
            if(res != null){
                let turnNum = res.turnNum;
                if(old_Turn_SieuToc_90s != turnNum){
                    old_Turn_SieuToc_90s = turnNum;
                    let n5  = parseInt(res.n5)
                    let n6  = parseInt(res.n6)
                    
                    let sum =  n5 + n6;

                    if(n6 % 2 == 0){
                        chan_SieuToc_90s += 1;
                        le_SieuToc_90s = 0;
                    }else{
                        chan_SieuToc_90s = 0;
                        le_SieuToc_90s += 1;
                    }
                    
                    if(n5 > 4 ){
                        tai_SieuToc_90s += 1;
                        xiu_SieuToc_90s = 0;
                    }else{
                        tai_SieuToc_90s = 0;
                        xiu_SieuToc_90s += 1;
                    }

                    if(sum % 2 == 0){
                        sum_chan_SieuToc_90s += 1;
                        sum_le_SieuToc_90s = 0;
                    }else{
                        sum_chan_SieuToc_90s = 0;
                        sum_le_SieuToc_90s += 1;
                    }
                    

                    if(chan_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 90s:\n- Chẵn : "+chan_SieuToc_90s+"\n Hãy đánh : LẺ")
                    }
                    if(le_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 90s:\n- LẺ : "+le_SieuToc_90s+"\n Hãy đánh : CHẴN")
                    }
                    if(tai_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 90s:\n- Tài : "+tai_SieuToc_90s+"\n Hãy đánh : XỈU")
                    }
                    if(xiu_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 90s:\n- XỈU : "+xiu_SieuToc_90s+"\n Hãy đánh : TÀI")
                    }
                    if(sum_chan_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 90s:\n- Tổng Chẵn : "+sum_chan_SieuToc_90s+"\n Hãy đánh : Tổng Lẻ")
                    }
                    if(sum_le_SieuToc_90s > 14){
                        telegram_Handler.SendMessager_Chanel_TaXi("*** Siêu Tốc 90s:\n- Tổng LẺ : "+sum_le_SieuToc_90s+"\n Hãy đánh : Tổng Chẵn")
                    }
                    
                    event.sender.send('onUpdate_runCheck_SieuToc_90s', {turn:turnNum.split("-")[1],
                        chan:chan_SieuToc_90s,le:le_SieuToc_90s,tai:tai_SieuToc_90s,xiu:xiu_SieuToc_90s,sumchan:sum_chan_SieuToc_90s,sumle:sum_le_SieuToc_90s});
                }
            }
        })
        
    }
})