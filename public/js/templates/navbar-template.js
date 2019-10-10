const NavbarTemplate = `
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <h3 class="navbar-brand">MyApp</h3>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarsExampleDefault" style="">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/"><a class="nav-link">Главная</a></router-link>
                </li>
                <li class="nav-item active">
                    <router-link v-bind:to="{ name: 'doc_list' }"><a class="nav-link">Мои документы</a></router-link>
                </li>
                <li class="nav-item active">
                    <router-link v-bind:to="{ name: 'about' }"><a class="nav-link">About</a></router-link>
                </li>
            </ul>
        </div>
</nav>
`
export { NavbarTemplate }
