import { FormTemplate } from "../templates/form-template.js"

const Form = {
    data: () => ({
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        resutl: [],
        disabled: false
    }),
    template: FormTemplate,
    methods: {
        submit: function () {
            const formData = new FormData(document.getElementById('addForm'));
            let inp_obj = {};
            if (formData.get('_token')) {
                inp_obj._token = formData.get('_token')
            }
            if (formData.get('title')) {
                inp_obj.title = formData.get('title')
            }
            if (formData.get('description')) {
                inp_obj.description = formData.get('description')
            }
            if (formData.get('file').name !== '' && formData.get('file').size > 0) {
                inp_obj.file = {};
                inp_obj.file.size = formData.get('file').size;
                inp_obj.file.filename = formData.get('file').name;
            }
            axios.post('/api/documents', {body: inp_obj, method: 'POST',emulateJSON: true})
                .then(response => {
                    const status = response.data.status;
                    //redirect logic
                    if (status === 'success') {
                        this.$router.push({ name: 'doc_list' });
                    } else {
                        console.log(response.data)
                    }
                });
        },
    }
}

export { Form }
