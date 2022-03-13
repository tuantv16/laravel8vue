//require('./bootstrap');

window.Vue = require('vue');
import router from './router';

import App from './views/app.vue'
const app = new Vue({
    el: '#root',
    router,
    //router: router,
    components: {
        App
    }
});

