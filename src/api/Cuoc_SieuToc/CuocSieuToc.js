const axios = require('axios').default;

const BASE_URL = "https://api.qh217.com/api/front/bet/add"


module.exports = {
    Cuoc_VN_SieuToc:  (variables) => {
        console.log("variables ======> ");
        console.log(variables);
        return  new Promise((resolve, reject) => {
            axios({
                method: 'post',
                url: BASE_URL,
                data: {variables},
                
                headers: {
                    'accept': 'application/json, text/plain, */*',
                    'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
                    'content-type': 'application/json;charset=UTF-8',
                    'sec-ch-ua': '"Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-site',
                    'x-lang': 'vi',
                    'x-session-token': 'zknE6knqqESI4vDiHUyc2ENiif+Ex6giMcOqLu1/IXc='
                }
            }).then((success) => {
                console.log("success ======> ");
                console.log(success);
                resolve(success)
            }).catch(err => {
                console.log("err ======> ");
                console.log(err.response.data);
                reject(err.response)
            });
        })
    }
}