const EditTemplate = `
    <div v-if="result.id">
        <h4>Изменение документа #{{ result.id }}</h4>
        <br>
        <form>
            <div class="form-group row">
                <label for="inputEmail" class="col-sm-2 col-form-label">Название</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="inputEmail" v-bind:value="result.title">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Описание</label>
                <div class="col-sm-10">
                  <textarea class="form-control" id="inputPassword">{{ result.description }}</textarea>
                </div>
            </div>
        </form>
    </div>
    <div v-else>
        Not Found
    </div>
`
export { EditTemplate }
