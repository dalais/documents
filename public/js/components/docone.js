import { DoconeTemplate } from '../templates/docone-template.js'

const Docone = {
    data() {
        return {
            result: []
        }
    },
    template: DoconeTemplate,
    mounted() {
        let th = this;
        let id = this.$route.params.id;
        setTimeout( () => axios.get('/api/documents/' + id, {emulateJSON: true}).then(response => {
            th.result = response.data
        }),0);
    },
    methods: {
        clicked(id) {
            if(confirm("Действительно хотите удалить этот документ?")){

                axios.delete('/api/documents/'+id)
                    .then( () => this.$router.push({ name: 'doc_list' }) )
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }
}

export { Docone }
