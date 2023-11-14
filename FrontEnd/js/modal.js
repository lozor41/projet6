const modal = document.getElementById('modal1')
const modal1 = document.querySelector('.modal1')
const modal2 = document.querySelector('.modal2')
const modalBtnBack = document.getElementById('modal-btn-back')
const category = document.getElementById('category')
const title = document.getElementById('input-title')
const addImg = document.getElementById('inputPhoto')
const fileUpload = document.getElementById('photo')
const preview = document.getElementById('preview')
const formAddWork = document.getElementById('form')
const fileError = document.getElementById('file-error')


const openModal = function (e) {
    modal.style.display = 'flex'
    displayModal1()
}

const closeModal = function (e) {
    modal.style.display = 'none'
}

const displayModal2 = () => {
    modal1.style.display = 'none'
    modal2.style.display = 'block'
    addImg.style.display = 'flex'
    preview.style.display = 'none'
    fileError.style.display = 'none'
}

const displayModal1 = () => {
    modal1.style.display = 'flex'
    modal2.style.display = 'none'
}

const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll('.modif').forEach(a => {
    a.addEventListener('click', openModal)
})
document.querySelectorAll('.jsClose').forEach(a => {
    a.addEventListener('click', closeModal)
})

modalBtnBack.addEventListener('click', () => displayModal1())


fileUpload.addEventListener('change', () => {
    const file = fileUpload.files[0]

    if (file) {
        console.log(file)
        preview.src = URL.createObjectURL(file)
        addImg.style.display = 'none'
        preview.style.display = 'flex'

        if (file.size > 4000000) {
            fileError.style.display = 'flex'
        }
        if ( ext !='jpg' && ext != 'png' ) {   
            fileError.style.display = 'flex'
        }
    }
})

formAddWork.addEventListener('submit', e => {
    // avoit to reload the page
    e.preventDefault()

    const formData = new FormData()
    formData.append("image", fileUpload.files[0])
    formData.append("title", title.value)
    formData.append("category", parseInt(category.value))

    console.log('formData:', formData)

    postWork(formData)
        .then(() => getWorks())
        .then(data => {
            createGallery(data)
            closeModal()
        })
})




