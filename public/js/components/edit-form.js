import {EditTemplate} from "../templates/edit-template.js"

const EditForm = {
    data: () => ({
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        result: [],
        disabled: false,
        errors: {}
    }),
    template: EditTemplate,
    mounted() {
        let th = this;
        let id = this.$route.params.id;
        setTimeout(() => axios.get('/api/documents/' + id, {emulateJSON: true}).then(response => {
            th.result = response.data
        }), 0);
    },
    methods: {
        submit: function () {
            let id = this.$route.params.id;
            const formData = new FormData(document.getElementById('editForm'));

            if (formData.get('title') === "") {
                formData.delete('title')
            }
            if (formData.get('description') === "") {
                formData.delete('description')
            }
            if (formData.get('file').size === 0) {
                formData.delete('file')
            }
            axios.put('/api/documents/' + id, formData, {method: 'PUT',emulateJSON: true, headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                .then(response => {
                    console.log(response.data)
                    /*const status = response.data.status;
                    if (status === 'success') {
                        this.$router.push({ name: 'doc_one', params: { id: id }});
                    } else {
                        console.log(response.data)
                    }*/
                });
        }
    }
}

export {EditForm}
