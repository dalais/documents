import {EditTemplate} from "../templates/edit-template.js"

const EditForm = {
    data: () => ({
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        result: [],
        changedResult: {},
        disabled: false,
        b64: null,
        errors: {},
        title: null,
        description: null
    }),
    model: {
        prop: 'checked',
        event: 'change'
    },
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
            let th = this;
            let id = this.$route.params.id;
            const formData = new FormData(document.getElementById('editForm'));
            const file = document.querySelector('#inputFile').files[0];

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
            axios.put('/api/documents/' + id, {body: inp_obj, method: 'PUT',emulateJSON: true})
                .then(response => {
                    const status = response.data.status;
                    //redirect logic
                    if (status === 'success') {
                        this.$router.push({ name: 'doc_one', params: { id: id }});
                    }
                });
        },
        handleFileSelect: (evt) => {
            let f = evt.target.files[0];
            let reader = new FileReader();
            let base64String;
            reader.onload = (function (theFile) {
                (e) => {
                    var binaryData = e.target.result;
                    //Converting Binary Data to base 64
                    base64String = window.btoa(binaryData);
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsBinaryString(f);
        },
        loadFile(ev) {
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.onload = e => this.$emit("load", e.target.result);
            return reader.readAsText(file);
        }
    }
}

export {EditForm}
