const DoconeTemplate = `
    <div class="card">
        <div class="card-header">
            Документ #{{ result.id }}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ result.title }}</h5>
            <p class="card-text">{{ result.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
`
export { DoconeTemplate }
