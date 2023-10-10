//TODO récupérer les datas de l'api pour afficher les travaux

const gallery = document.querySelector('.gallery')
const but = document.querySelector('.but')

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

            // data.filter(obj => obj.categoryId = 1) = Objets
            // data.filter(obj => obj.categoryId = 2) = Appartements
            // data.filter(obj => obj.categoryId = 3) = Hotels & restaurants
            // console.log(categoryId)

        })
    })

    function filtreButton(categoryId) {
    }

// création des filtres de manière dynamique
fetch('http://localhost:5678/api/categories')
    .then(res => res.json())
    .then(data => {
        console.log(JSON.stringify(data, null, 2))
        const buttonTout = document.createElement("button")

        buttonTout.textContent = "tout"
        but.appendChild(buttonTout)
        data.forEach(filtre => {

            const button = document.createElement("button")

            button.textContent = filtre.name

            but.appendChild(button)

            console.log(button)

        })

    })



