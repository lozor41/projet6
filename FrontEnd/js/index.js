// récupérer les datas de l'api pour afficher les travaux

const gallery = document.querySelector('.gallery')
const categories = document.querySelector('.categories')
const loginA = document.querySelector('#loginA li')
const modif = document.querySelector('.modif')
const headLog = document.querySelector('.headLog')
const jsModal = document.querySelector('.jsModal')
const buttonModal = document.querySelector('.buttonModal')
const galleryModal = document.querySelector('.galleryModal')
const lineModal = document.querySelector('.lineModal')

const createGallery = data => {
    // on nettoie tout le container gallery
    gallery.innerHTML = ''
    galleryModal.innerHTML = ''

    // parcourir le tableau des data pour afficher le contenu dans le dom
    data.forEach(project => {
        const figure = document.createElement('figure')
        const image = document.createElement('img')
        const imgMod = document.createElement('img')
        imgMod.src = project.imageUrl
        image.src = project.imageUrl
        image.alt = project.title

        const figCaption = document.createElement('figcaption')
        figCaption.innerHTML = project.title

        figure.appendChild(image)
        figure.appendChild(figCaption)
        gallery.appendChild(figure)
        galleryModal.appendChild(imgMod)

        const trash = document.createElement('i')
        trash.classList.add('fa-solid', 'fa-trash-can')
        trash.addEventListener('click', () => {
            deleteWork(project.id)
                .then(() => getWorks())
                .then(data => createGallery(data))
        })
        galleryModal.appendChild(trash)


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
    const head = document.createElement("nav")
    const butModal = document.createElement("button")
    head.textContent = "Mode édition"
    butModal.textContent = "Ajouter une photo"
    headLog.style.display = null
    jsModal.style.display = null

    headLog.appendChild(head)
    buttonModal.appendChild(butModal)


    loginA.innerHTML = 'logout'
    categories.style.display = 'none'
}

buttonModal.addEventListener('click', async () => {
    console.log('click')
    displayModal2()
})

loginA.addEventListener('click', () => localStorage.clear())


