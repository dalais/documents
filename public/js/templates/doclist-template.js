const DoclistTemplate = `
    <div class="documents-list">
        <h4 class="documents-list_head">Список документов</h4>
        <div class="documents-list_toggler">
            <div class="list-group" v-for="(item, key) in results">
                <a class="list-group-item list-group-item-action flex-column align-items-baseline">
                    <div class="d-flex w-100 justify-content-between">
                        <router-link v-bind:to="{ name: 'doc_one', params: {id: item.id }}"><h5 class="mb-1">{{ item.title }}</h5></router-link>
                    </div>
                    <p>{{ item.description }}</p>
                    <div class="btn-group btn-group-sm" role="group" aria-label="">
                        <button type="button" class="btn btn-outline-secondary">Изменить</button>
                        <button type="button" class="btn btn-outline-danger" @click="clicked(item.id, key)">Удалить</button>
                    </div>
                </a>
            </div>
        </div>
    </div>
`;

export { DoclistTemplate }
