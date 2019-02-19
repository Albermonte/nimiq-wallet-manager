'use strict'; // eslint-disable-line

import Vue from "vue"
import Notifications from 'vue-notification'
import VuejsDialog from 'vuejs-dialog';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

// import VuejsDialogMixin from 'vuejs-dialog/vuejs-dialog-mixin.min.js';

import 'vuejs-dialog/dist/vuejs-dialog.min.css';
import "@nimiq/style/nimiq-style.min.css"
import "@nimiq/style/nimiq-style-icons.min.css"
import "assets/scss/main.scss"
import "assets/scss/layout.scss"
import "assets/scss/icon-addon.scss"
import "assets/scss/fonts.scss"
import "assets/scss/loading.scss"
import "assets/scss/inputs.scss"
import "assets/scss/dashboard.scss"
import "assets/scss/scrollbar.scss"
import "assets/scss/transaction.scss"


import store from './store'
import App from "./App.vue"
import DefaultDialog from 'components/dialog/DefaultDialog.vue'
import AddContactDialog from 'views/contacts/Add.vue'
import EditWalletDialog from 'views/wallet/Edit.vue'
import ContactPopupDialog from 'views/transaction/ContactPopup.vue'

import router from "./router"
import axios from "axios"
import Nimiq from '@nimiq/core-web';
import { AUTH_SUCCESS } from 'store/actions/auth'

const token = localStorage.getItem('user-token');
if (token) {
    axios.defaults.headers.common['Authorization'] = 'Token '+ token;
    store.commit(AUTH_SUCCESS, {token: token})
}

let socketPort = (window.location.port) ? ':'+ window.location.port : '';
let socketHost = window.location.protocol + '//' + window.location.host + socketPort
export const SocketInstance = socketio(socketHost, {
    upgrade: true,
    transports: ['websocket']
});
const workerURL = location.origin + '/build/';

Vue.use(new VueSocketIO({
    debug: true,
    connection: SocketInstance,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))
Vue.config.productionTip = false;

Vue.use(Notifications)
Vue.use(VuejsDialog, {
    view: 'DefaultDialog',
    backdropClose: true
});
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");

(async () => {
    await Nimiq.load(workerURL)
    Vue.dialog.registerComponent('DefaultDialog', DefaultDialog);
    Vue.dialog.registerComponent('AddContactDialog', AddContactDialog);
    Vue.dialog.registerComponent('EditWalletDialog', EditWalletDialog);
    Vue.dialog.registerComponent('ContactPopupDialog', ContactPopupDialog);

    setTimeout(() => {
        document.querySelectorAll(".loading-container-overlay").forEach( el => el.remove() )
    }, 1000);

})()


