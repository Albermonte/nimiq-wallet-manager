'use strict'; // eslint-disable-line

import Vue from "vue"
import Notifications from 'vue-notification'
import VuejsDialog from 'vuejs-dialog';
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
import router from "./router"
import axios from "axios"
// import VueFormWizard from 'vue-form-wizard'
import { AUTH_SUCCESS } from 'store/actions/auth'

const token = localStorage.getItem('user-token');
if (token) {
    axios.defaults.headers.common['Authorization'] = 'Token '+ token;
    store.commit(AUTH_SUCCESS, {token: token})
}

(async () => {
    await Nimiq.load()
    document.querySelectorAll(".loading-container-overlay").forEach( el => el.remove() )
    Vue.config.productionTip = false;
    Vue.use(Notifications)
    Vue.use(VuejsDialog, {
        view: 'DefaultDialog',
    });
    Vue.dialog.registerComponent('DefaultDialog', DefaultDialog);

    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount("#app");
})()


