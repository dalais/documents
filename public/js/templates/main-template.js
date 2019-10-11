const MainTemplate = `
<div>
    <Navbar></Navbar>
    <div class="jumbotron">
        <div class="container">
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
