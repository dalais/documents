const DoclistTemplate = `
<div>
    <router-link v-bind:to="{ name: 'doc_add' }">
        <button type="button" class="btn btn-sm btn-primary">Добавить</button>
    </router-link>
    <hr>
    <div v-if="results.length">
        <div class="documents-list">
            <p class="documents-list_head">Список документов</p>
            <div class="documents-list_toggler">
                <div class="list-group" v-for="(item, key) in results">
                    <a class="list-group-item list-group-item-action flex-column align-items-baseline">
                        <div class="d-flex w-100 justify-content-between">
                            <router-link v-bind:to="{ name: 'doc_one', params: {id: item.id }}"><h5 class="mb-1">{{ item.title }}</h5></router-link>
                        </div>
                        <p>{{ item.description }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <p class="documents-list_head">Список документов пуст</p>
    </div>
</div>
`;

export { DoclistTemplate }
