const axios = require('axios').default;

const BASE_URL = "https://api.qh217.com/api/front/lottery/lastlottery/"


module.exports = {
    VN_Taxi_30s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "266.json",
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
    VN_XocDia_30s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "263.json",
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
    VN_XocDia_45s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "264.json",
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
    VN_Taxi_45s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "267.json",
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
    VN_XocDia_60s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "186.json",
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
    VN_Taxi_60s:  () => {
        return  new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url: BASE_URL + "185.json",
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
}