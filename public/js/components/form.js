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
            axios.post('/api/documents', formData, {method: 'POST',emulateJSON: true, headers: {
                    'Content-Type': 'multipart/form-data'
                }})
                .then(response => {
                    const status = response.data.status;
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
