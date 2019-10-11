const DoconeTemplate = `
    <div v-if="result.id">
        <div class="card">
            <div class="card-header">
                Документ #{{ result.id }}
                <button type="button" class="btn btn-outline-danger float-right" @click="clicked(result.id)">Удалить</button>
                <router-link v-bind:to="{ name: 'doc_edit', params: { id: result.id }}">
                    <button type="button" class="btn btn-outline-secondary float-right">Изменить</button>  
                </router-link>
            </div>
            <div class="card-body">
                <h5 class="card-title">{{ result.title }}</h5>
                <p class="card-text">{{ result.description }}</p>
                <router-link v-bind:to="{ name: 'doc_list' }"><p class="btn btn-sm btn-link">< К списку</p></router-link>
            </div>
        </div>
    </div>
    <div v-else>Not Found</div>
`
export { DoconeTemplate }
