const MainTemplate = `
<div>
    <Navbar></Navbar>
    <div class="jumbotron">
        <div class="container">
            <div class="row text-sm-center">
                <div class="col-md-8">
                    <h5 class="card-title text-danger">Загрузка файла не работает</h5>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <router-view></router-view>
            </div>
        </div>
        <hr>

    </div>
</div>`
export { MainTemplate }
