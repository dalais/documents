import docListComponent from '../components/doclist.js';

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
