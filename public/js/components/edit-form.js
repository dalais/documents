import { EditTemplate } from "../templates/edit-template.js"

const EditForm = {
    data() {
        return {
            result: []
        }
    },
    template: EditTemplate,
    mounted() {
        let th = this;
        let id = this.$route.params.id;
        setTimeout( () => axios.get('/api/documents/' + id, {emulateJSON: true}).then(response => {
            th.result = response.data
        }),0);
    },
}

export { EditForm }
