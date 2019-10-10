const MainTemplate = `<div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h3 class="navbar-brand">MyApp</h3>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarsExampleDefault" style="">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="documents">Мои документы</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="about">About</a>
                </li>
            </ul>
        </div>
</nav>
    <div class="jumbotron">
        <div class="container">
        </div>
    </div>

    <div class="container">

        <div class="row">
            <div class="col-md-8">
                <h2>Heading</h2>
                <p></p>
                <router-view></router-view>
            </div>
        </div>
        <hr>

    </div>
</div>`
export { MainTemplate }
