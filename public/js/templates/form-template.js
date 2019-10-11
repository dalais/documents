const FormTemplate = `
<div>
    <h4>Добавить новый документ</h4>
    <br>
    <form>
        <input type="hidden" name="_token" :value="csrf">
        <div class="form-group row">
            <label for="inputEmail" class="col-sm-2 col-form-label">Название</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputEmail">
            </div>
        </div>
        <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Описание</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="inputPassword"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label for="inputFile">Файл</label>
            <input type="file" class="form-control-file" id="inputFile">
        </div>
    </form>
</div>
`
export { FormTemplate }
