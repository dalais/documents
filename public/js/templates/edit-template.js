const EditTemplate = `
    <div v-if="result.id">
        <h4>Изменение документа #{{ result.id }}</h4>
        <br>
        <form ref="form" role="form" id="editForm">
            <input type="hidden" name="_token" :value="csrf">
            <div class="form-group">
                <label for="inputTitle" class="col-sm-2 col-form-label">Название:</label>
                <div class="col-sm-10">
                    <input type="text" name="title" ref="title" class="form-control" id="inputTitle" v-model="result.title">
                    <p>&nbsp;
                        <p v-if="errors.title">
                            <small class="error text-danger" v-show="true">Введите название</small>
                        </p>
                    </p>
                </div>
            </div>
            <div class="form-group">
                <label for="inputDescription" class="col-sm-2 col-form-label">Описание:</label>
                <div class="col-sm-10">
                    <textarea class="form-control" ref="description" name="description" id="inputDescription" v-model="result.description"></textarea>
                    <p>&nbsp;
                        <p v-if="errors.description">
                            <small class="error text-danger" v-show="true">Описание не должно быть пустым</small>
                        </p>
                    </p>
                </div>
            </div>
            <div class="form-group row" style="padding: 10px">
                <label for="fileInfo" class="col-sm-2 col-form-label">Файл:</label>
                <div class="text-sm-center" id="fileInfo">
                    <span class="badge badge-info">
                        {{ result.file.filename }} ( path:"{{ result.file.path }}", size:{{ result.file.size }} )
                    </span>
                </div>
            </div>
            <div class="form-group">
                <label for="inputFile">Добавить другой файл</label>
                <input type="file" ref="file" name="file" class="form-control-file btn-sm" id="inputFile">
            </div>
            <button type="button" class="btn btn-sm btn-outline-secondary">Отменить</button>
            <button type="button" class="btn btn-sm btn-primary" v-on:click="submit" :disabled="disabled">Сохранить</button>
        </form>
    </div>
    <div v-else>
        Not Found
    </div>
`
export { EditTemplate }
