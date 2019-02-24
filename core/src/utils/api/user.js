import axios from 'axios'

const userApi = {
    login: ({username, password}) => {
        return axios({url: '/api/v1/core/user/login', data: {username: username, password: password}, method: 'POST'});
    },
    register: (newUser) => {
        return axios({url: '/api/v1/core/user/register', data: newUser, method: 'POST'});
    },
    current: () => {
        return axios({url: '/api/v1/core/user/current', method: 'GET'});
    },
    changePassword: (data) => {
        return axios({url: '/api/v1/core/user/password', method: 'PUT', data: data});
    },
    twofactor: {
        getSecret: () => {
            return axios({url: '/api/v1/core/user/two-factor/generate-secret', method: 'GET'});
        },
        verifySecret: (otp) => {
            return axios({url: '/api/v1/core/user/two-factor/setup-verify', method: 'POST', data: {otp: otp}});
        }
    }
}

export {userApi};