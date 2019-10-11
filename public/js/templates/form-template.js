const FormTemplate = `
<div>
    <h4>Добавить новый документ</h4>
    <br>
    <form id="addForm" ref="form">
        <input type="hidden" name="_token" :value="csrf">
        <div class="form-group row">
            <label for="inputTitle" class="col-sm-2 col-form-label">Название</label>
            <div class="col-sm-10">
              <input type="text" name="title" class="form-control" id="inputTitle">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputDescr" class="col-sm-2 col-form-label">Описание</label>
            <div class="col-sm-10">
              <textarea class="form-control" name="description" id="inputDescr"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label for="inputFile">Файл</label>
            <input type="file" ref="file" name="file" class="form-control-file" id="inputFile">
        </div>
        <router-link v-bind:to="{ name: 'doc_list' }"><button type="button" class="btn btn-sm btn-outline-secondary">Отменить</button></router-link>
        <button type="button" class="btn btn-sm btn-primary" v-on:click="submit" :disabled="disabled">Сохранить</button>
    </form>
</div>
`
export { FormTemplate }
