import Vue from '../vue.js';
import VueRouter from '../vue-router.js';
import {routes} from './routes.js';

Vue.use(VueRouter);


export const router = new VueRouter({
    mode: 'history',
    routes
});
