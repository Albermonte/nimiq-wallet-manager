import axios from 'axios'

const nimiqApi = {
    getMempool: () => {
        return axios({url: '/api/v1/nimiq/network/mempool', method: 'GET'});
    },
    getNetworkStats: () => {
        return axios({url: '/api/v1/nimiq/network/stats', method: 'GET'});
    },
    getPeerList: () => {
        return axios({url: '/api/v1/nimiq/network/peer-list', method: 'GET'});
    }
}

export {nimiqApi};