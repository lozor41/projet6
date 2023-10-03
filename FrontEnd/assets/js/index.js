//TODO récupérer les datas de l'api pour afficher les travaux

const gallery = document.querySelector('.gallery')

fetch('http://localhost:5678/api/works')
    .then(res => res.json())
    .then(data => {
        // console.log(JSON.stringify(data, null, 2))
        // parcourir le tableau des data pour afficher le contenu dans le dom
        data.forEach(project => {
            const figure = document.createElement('figure')
            const image = document.createElement('img')
            image.src = project.imageUrl
            image.alt = project.title

            const figCaption = document.createElement('figcaption')
            figCaption.innerHTML = project.title

            figure.appendChild(image)
            figure.appendChild(figCaption)
            gallery.appendChild(figure)
        })
    })

fetch('http://localhost:5678/api/categories')
    .then(res => res/json())
    .then(data => {
        data.forEach(filtre => {
            const button = document.createElement('button')
            button.innerHTML = filtre.name

            button.appendChild(button)
        })
    })
        