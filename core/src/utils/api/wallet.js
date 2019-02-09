import axios from 'axios'

const walletApi = {
    list: () => {
        return axios({url: '/api/v1/core/wallets'});
    },
    create: (wallet) => {
        return axios({url: `/api/v1/core/wallets/`, data: wallet, method: 'POST'});
    },
    update: (wallet) => {
        return axios({url: `/api/v1/core/wallets/${wallet.address}`, data: wallet, method: 'PATCH'});
    },
    delete: (wallet) => {
        return axios({url: `/api/v1/core/wallets/${wallet.address}`, method: 'DELETE'});
    }
}

export {walletApi};