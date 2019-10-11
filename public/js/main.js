import Vue from './vue.js'
import VueRouter from './vue-router.js'
import { Doclist } from './components/doclist.js'
import { Docone } from './components/docone.js'
import { About } from './components/about.js'
import { Navbar } from "./components/navbar.js"
import { Form } from "./components/form.js";
import { EditForm } from "./components/edit-form.js";
import { MainTemplate } from './templates/main-template.js'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes: [
        {
            path: '/about',
            component: About,
            name: "about"
        },
        {
            path: '/documents',
            component: Doclist,
            name: "doc_list"
        },
        {
            path: '/documents/:id',
            component: Docone,
            name: "doc_one",
            props: (route) => {
                if ('id' in route.params) {
                    return {
                        id: parseInt(route.params.id, 10),
                        new: false
                    };
                } else {
                    return {
                        new: true
                    };
                }
            }
        },
        {
            path: '/documents/:id/edit',
            component: EditForm,
            name: "doc_edit",
            props: (route) => {
                if ('id' in route.params) {
                    return {
                        id: parseInt(route.params.id, 10),
                        new: false
                    };
                } else {
                    return {
                        new: true
                    };
                }
            }
        },
        {
            path: '/add-document',
            component: Form,
            name: "doc_add",
            props: true
        }
    ]
});

new Vue({
    el: '#app',
    components: {
        Navbar
    },
    router,
    template: MainTemplate
});

