import Vue from './vue.js';
import VueRouter from './vue-router.js';
import { Doclist } from './components/doclist.js';
import { About } from './components/about.js';
import { MainTemplate } from './templates/main-template.js';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
        path: '/about',
        component: About,
        name: "О нас"
        }
    ]
});

new Vue({
    el: '#app',
    components: {
    },
    router,
    template: MainTemplate
});
