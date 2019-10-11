import { DoclistTemplate } from '../templates/doclist-template.js'

const Doclist = {
    data: function () {
        return {
            results: []
        }
    },
    template: DoclistTemplate,
    mounted() {
        let th = this;
        setTimeout( () => axios.get('/api/documents', {emulateJSON: true}).then(response => {
            th.results = response.data
        }), 0);

    }
}

export { Doclist }
