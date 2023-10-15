//TODO récupérer les datas de l'api pour afficher les travaux

const gallery = document.querySelector('.gallery')
const categories = document.querySelector('.categories')

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


// (async function (){
//     const {login} = await import("../../Backend/controllers/users.controller")
//     login()
// })()



window.addEventListener("log", () => {
    function sendData() {
        const loger = new XMLHttpRequest()

        const formdata = new FormData(form)

        loger.addEventListener("log", (event) => {
            alert(event.target.responseText)
        })

        loger.addEventListener("error", (event) => {
            alert("erreur survenue.")
        })

        loger.open("POST", "../index.html")

        loger.send(formdata)

    }

    const form = document.getElementById("login")

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        sendData()
    })
})

init()
