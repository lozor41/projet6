//TODO récupérer les datas de l'api pour afficher les travaux

const gallery = document.querySelector('.gallery')
const categories = document.querySelector('.categories')
const loginA = document.querySelector('#loginA li')
const modif = document.querySelector('.modif')
const headLog = document.querySelector('.headLog')

const createGallery = data => {
    // on nettoie tout le container gallery
    gallery.innerHTML = ''

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
}

const createCategories = data => {
    console.log(JSON.stringify(data, null, 2))
    const buttonTout = document.createElement("button")

    buttonTout.textContent = "Tout"
    categories.appendChild(buttonTout)

    buttonTout.addEventListener('click', async () => {
        await getWorks().then(data => createGallery(data))
    })

    data.forEach(filtre => {

        const button = document.createElement("button")

        button.textContent = filtre.name

        categories.appendChild(button)

        console.log(button)

        button.addEventListener('click', async () => {
            await getWorks(filtre.id).then(data => createGallery(data))
        })

    })
}


const init = async () => {
    await getWorks().then(data => createGallery(data))
    // création des filtres de manière dynamique
    await getCategories().then(data => createCategories(data))
}

init()

if (localStorage.token) {
    const head = document.createElement("p")
    head.textContent = "Mode édition"
    const txtEdit = document.createElement("button")
    txtEdit.textContent = "Modifier"

    modif.appendChild(txtEdit)
    headLog.appendChild(head)

    
    loginA.innerHTML = 'logout'
    categories.style.display = 'none'
  
}

loginA.addEventListener('click', () => localStorage.clear())

