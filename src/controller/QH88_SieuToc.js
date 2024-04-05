const ApiQH88_SieuToc = require("../api/Api_QH88/SieuToc");


let jsCheck_VN_SieuToc_45s = require("../model/Qh88_Xoso/VN_SieuToc_45s.json")
let jsCheck_VN_SieuToc_60s = require("../model/Qh88_Xoso/VN_SieuToc_60s.json")
let jsCheck_VN_SieuToc_90s = require("../model/Qh88_Xoso/VN_SieuToc_90s.json")

let jsCheck_SieuToc_45s = require("../model/Qh88_Xoso/SieuToc_45s.json")
let jsCheck_SieuToc_60s = require("../model/Qh88_Xoso/SieuToc_60s.json")
let jsCheck_SieuToc_90s = require("../model/Qh88_Xoso/SieuToc_90s.json")

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
}

module.exports = {QH88_Event_SieuToc};