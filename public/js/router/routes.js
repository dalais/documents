import docListComponent from '../components/doclist-component.vue';

export const routes = [
    {
        path: '/documents',
        method: 'GET',
        components: {
            default: null,
            documents: docListComponent
        }
    },
];
