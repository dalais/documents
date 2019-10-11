import { FormTemplate } from "../templates/form-template.js"

const Form = {
    data: () => ({
        csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
        resutl: []
    }),
    template: FormTemplate,
}

export { Form }
