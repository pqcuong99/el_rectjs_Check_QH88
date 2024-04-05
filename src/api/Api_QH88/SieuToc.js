const axios = require('axios').default;

const BASE_URL = "https://api.qh217.com/api/front/lottery/lastlottery/"


module.exports = {
    VN_SieuToc_45s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "173.json",
                data: {},
                headers: {
                    'Content-Type': `application/json`,
                }
            }).then((success) => {
                resolve(success)
            }).catch(err => {
                reject(err.response)
            });
        })
    },
    VN_SieuToc_60s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "176.json",
                data: {},
                headers: {
                    'Content-Type': `application/json`,
                }
            }).then((success) => {
                resolve(success)
            }).catch(err => {
                reject(err.response)
            });
        })
    },
    VN_SieuToc_90s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "177.json",
                data: {},
                headers: {
                    'Content-Type': `application/json`,
                }
            }).then((success) => {
                resolve(success)
            }).catch(err => {
                reject(err.response)
            });
        })
    },
    SieuToc_45s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "110.json",
                data: {},
                headers: {
                    'Content-Type': `application/json`,
                }
            }).then((success) => {
                resolve(success)
            }).catch(err => {
                reject(err.response)
            });
        })
    },
    SieuToc_60s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "113.json",
                data: {},
                headers: {
                    'Content-Type': `application/json`,
                }
            }).then((success) => {
                resolve(success)
            }).catch(err => {
                reject(err.response)
            });
        })
    },
    SieuToc_90s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "115.json",
                data: {},
                headers: {
                    'Content-Type': `application/json`,
                }
            }).then((success) => {
                resolve(success)
            }).catch(err => {
                reject(err.response)
            });
        })
    }
}