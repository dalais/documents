import { DoclistTemplate } from '../templates/doclist-template.js'

const Doclist = {
    data: function () {
        return {
            results: []
        }
    },
    template: DoclistTemplate,
    created() {
        let th = this;
        axios.get('/api/documents', {emulateJSON: true}).then(response => {
            th.results = response.data
        })
    },
    methods: {
        clicked(id, index) {
            if(confirm("Действительно хотите удалить этот документ?")){

                axios.delete('/api/documents/'+id)
                    .then(response => {
                        this.results.splice(index, 1);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }
}

export { Doclist }
