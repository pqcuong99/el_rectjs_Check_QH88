const ApiQH88_Trochoi = require("../api/Api_QH88/TroChoi");

let jsCheck_Taxi_30s = require("../model/Qh88_TroChoi/Taxi30S.json");
let jsCheck_XocDia_30s = require("../model/Qh88_TroChoi/XocDia30s.json");
let jsCheck_XocDia_45s = require("../model/Qh88_TroChoi/XocDia45s.json");
let jsCheck_Taxi_45s = require("../model/Qh88_TroChoi/Taxi45s.json");
let jsCheck_XocDia_60s = require("../model/Qh88_TroChoi/XocDia60s.json");
let jsCheck_Taxi_60s = require("../model/Qh88_TroChoi/XocDia60s.json");

class QH88_Event {
    async Result_VN_Taxi_30s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_Taxi_30s));
            await ApiQH88_Trochoi.VN_Taxi_30s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    async Result_VN_XocDia_30s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_XocDia_30s));
            await ApiQH88_Trochoi.VN_XocDia_30s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    async Result_VN_XocDia_45s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_XocDia_45s));
            await ApiQH88_Trochoi.VN_XocDia_45s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    async Result_VN_Taxi_45s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_Taxi_45s));
            await ApiQH88_Trochoi.VN_Taxi_45s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    async Result_VN_XocDia_60s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_XocDia_60s));
            await ApiQH88_Trochoi.VN_XocDia_60s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    js_check.n4 = res.data.t.n4;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    async Result_VN_Taxi_60s(){
        try {
            let js_check = JSON.parse(JSON.stringify(jsCheck_Taxi_60s));
            await ApiQH88_Trochoi.VN_Taxi_60s().then(async (res)=>{
                if(res.data.success == true){
                    js_check.turnNum = res.data.t.turnNum;
                    js_check.openNum = res.data.t.openNum;
                    js_check.n1 = res.data.t.n1;
                    js_check.n2 = res.data.t.n2;
                    js_check.n3 = res.data.t.n3;
                    return js_check;
                }
            });
            return js_check;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
}

module.exports = {QH88_Event};