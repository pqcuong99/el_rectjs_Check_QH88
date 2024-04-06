const ApiQH88_SieuToc = require("../api/Api_QH88/SieuToc");
const ApiQH88_Cuoc_SieuToc = require("../api/Cuoc_SieuToc/CuocSieuToc");


let jsCheck_VN_SieuToc_45s = require("../model/Qh88_Xoso/VN_SieuToc_45s.json")
let jsCheck_VN_SieuToc_60s = require("../model/Qh88_Xoso/VN_SieuToc_60s.json")
let jsCheck_VN_SieuToc_90s = require("../model/Qh88_Xoso/VN_SieuToc_90s.json")

let jsCheck_SieuToc_45s = require("../model/Qh88_Xoso/SieuToc_45s.json")
let jsCheck_SieuToc_60s = require("../model/Qh88_Xoso/SieuToc_60s.json")
let jsCheck_SieuToc_90s = require("../model/Qh88_Xoso/SieuToc_90s.json")

let jsCheck_Cuoc_SieuToc = require("../model/Cuoc_SieuToc/Cuoc_SieuToc_Infor.json")

class QH88_Event_SieuToc {
    async Result_VN_SieuToc_45s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_VN_SieuToc_45s));
            await ApiQH88_SieuToc.VN_SieuToc_45s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    js_check.n5 = res.data.t.n5;
                    js_check.n6 = res.data.t.n6;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
    async Result_VN_SieuToc_60s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_VN_SieuToc_60s));
            await ApiQH88_SieuToc.VN_SieuToc_60s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    js_check.n5 = res.data.t.n5;
                    js_check.n6 = res.data.t.n6;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
    async Result_VN_SieuToc_90s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_VN_SieuToc_90s));
            await ApiQH88_SieuToc.VN_SieuToc_90s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    js_check.n5 = res.data.t.n5;
                    js_check.n6 = res.data.t.n6;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
    async Result_SieuToc_45s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_SieuToc_45s));
            await ApiQH88_SieuToc.SieuToc_45s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    js_check.n5 = res.data.t.n5;
                    js_check.n6 = res.data.t.n6;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
    async Result_SieuToc_60s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_SieuToc_60s));
            await ApiQH88_SieuToc.SieuToc_60s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    js_check.n5 = res.data.t.n5;
                    js_check.n6 = res.data.t.n6;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
    async Result_SieuToc_90s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_SieuToc_90s));
            await ApiQH88_SieuToc.SieuToc_90s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    js_check.n5 = res.data.t.n5;
                    js_check.n6 = res.data.t.n6;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };


    async Cuoc_VN_SieuToc_45s(turnNum,betInfo,monney,playCate){
        try {
            let variables = JSON.parse(JSON.stringify(jsCheck_Cuoc_SieuToc));
            variables.gameId = "173";
            variables.source = 0;
            variables.turnNum = turnNum;
            variables.bets[0].betNum = 1;
            variables.bets[0].betInfo = betInfo;
            variables.bets[0].multiple = monney/1000;
            variables.bets[0].money = 1000;
            variables.bets[0].remark = "";
            variables.bets[0].play = betInfo;
            variables.bets[0].playCate = playCate;
            await ApiQH88_Cuoc_SieuToc.Cuoc_VN_SieuToc(variables).then(async (res)=>{
                console.log("Cuoc_VN_SieuToc  ======> ");
                console.log(res);
                return res.success;
            });
            console.log("Cuoc_VN_SieuToc  ======> FALSE");
            return false;
        } catch (error) {
            return false;
        }
    };

    async Cuoc_VN_SieuToc_60s(turnNum,betInfo,monney,playCate){
        try {
            let variables = JSON.parse(JSON.stringify(jsCheck_Cuoc_SieuToc));

            variables.gameId = "176";
            variables.source = 0;
            variables.turnNum = turnNum;
            variables.bets[0].betNum = 1;
            variables.bets[0].betInfo = betInfo;
            variables.bets[0].multiple = monney/1000;
            variables.bets[0].money = 1000;
            variables.bets[0].remark = "";
            variables.bets[0].play = betInfo;
            variables.bets[0].playCate = playCate;
            await ApiQH88_Cuoc_SieuToc.Cuoc_VN_SieuToc(variables).then(async (res)=>{
                return res.success;
            });
            return false;
        } catch (error) {
            return false;
        }
    };

    async Cuoc_VN_SieuToc_90s(turnNum,betInfo,monney,playCate){
        try {
            let variables = JSON.parse(JSON.stringify(jsCheck_Cuoc_SieuToc));

            variables.gameId = "177";
            variables.source = 0;
            variables.turnNum = turnNum;
            variables.bets[0].betNum = 1;
            variables.bets[0].betInfo = betInfo;
            variables.bets[0].multiple = monney/1000;
            variables.bets[0].money = 1000;
            variables.bets[0].remark = "";
            variables.bets[0].play = betInfo;
            variables.bets[0].playCate = playCate;
            await ApiQH88_Cuoc_SieuToc.Cuoc_VN_SieuToc(variables).then(async (res)=>{
                return res.success;
            });
            return false;
        } catch (error) {
            return false;
        }
    };


    async Cuoc_SieuToc_45s(turnNum,betInfo,monney,playCate){
        try {
            let variables = JSON.parse(JSON.stringify(jsCheck_Cuoc_SieuToc));

            variables.gameId = "110";
            variables.source = 0;
            variables.turnNum = turnNum;
            variables.bets[0].betNum = 1;
            variables.bets[0].betInfo = betInfo;
            variables.bets[0].multiple = monney/1000;
            variables.bets[0].money = 1000;
            variables.bets[0].remark = "";
            variables.bets[0].play = betInfo;
            variables.bets[0].playCate = playCate;
            await ApiQH88_Cuoc_SieuToc.Cuoc_VN_SieuToc(variables).then(async (res)=>{
                return res.success;
            });
            return false;
        } catch (error) {
            return false;
        }
    };

    async Cuoc_SieuToc_60s(turnNum,betInfo,monney,playCate){
        try {
            let variables = JSON.parse(JSON.stringify(jsCheck_Cuoc_SieuToc));

            variables.gameId = "113";
            variables.source = 0;
            variables.turnNum = turnNum;
            variables.bets[0].betNum = 1;
            variables.bets[0].betInfo = betInfo;
            variables.bets[0].multiple = monney/1000;
            variables.bets[0].money = 1000;
            variables.bets[0].remark = "";
            variables.bets[0].play = betInfo;
            variables.bets[0].playCate = playCate;
            await ApiQH88_Cuoc_SieuToc.Cuoc_VN_SieuToc(variables).then(async (res)=>{
                return res.success;
            });
            return false;
        } catch (error) {
            return false;
        }
    };

    async Cuoc_SieuToc_90s(turnNum,betInfo,monney,playCate){
        try {
            let variables = JSON.parse(JSON.stringify(jsCheck_Cuoc_SieuToc));

            variables.gameId = "115";
            variables.source = 0;
            variables.turnNum = turnNum;
            variables.bets[0].betNum = 1;
            variables.bets[0].betInfo = betInfo;
            variables.bets[0].multiple = monney/1000;
            variables.bets[0].money = 1000;
            variables.bets[0].remark = "";
            variables.bets[0].play = betInfo;
            variables.bets[0].playCate = playCate;
            await ApiQH88_Cuoc_SieuToc.Cuoc_VN_SieuToc(variables).then(async (res)=>{
                return res.success;
            });
            return false;
        } catch (error) {
            return false;
        }
    };

}

module.exports = {QH88_Event_SieuToc};