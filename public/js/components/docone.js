import { DoconeTemplate } from '../templates/docone-template.js'

const Docone = {
    data() {
        return {
            result: []
        }
    },
    template: DoconeTemplate,
    created() {
        let th = this;
        let id = this.$route.params.id;
        axios.get('/api/documents/' + id, {emulateJSON: true}).then(response => {
            th.result = response.data
        })
    }
}

export { Docone }
