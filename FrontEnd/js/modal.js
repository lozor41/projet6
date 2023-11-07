const modal = document.getElementById('modal1')
const modal1 = document.querySelector('.modal1')
const modal2 = document.querySelector('.modal2')
const modalBtnBack = document.getElementById('modal-btn-back')
const category = document.querySelector('.category')
const titleImg = document.querySelector('.input-title')
const addImg = document.querySelector('.inputPhoto')

// let modal = null
const openModal = function (e) {
    modal.style.display = 'flex'
    // e.preventDefault()
    // const target = document.querySelector(e.target.getAttribute('href'))
    // target.style.display = null
    // target.removeAttribute('aria-hidden')
    // target.setAttribute('aria-modal', 'true')
    // modal = target
    // modal.addEventListener('click', closeModal)
    // modal.querySelector('.jsClose').addEventListener('click', closeModal)
    // modal.querySelector('.modalStop').addEventListener('click', stopPropagation)
    displayModal1()
}

const closeModal = function (e) {
    // if (modal === null) return
    // e.preventDefault()
    // modal.style.display = "none"
    // modal.setAttribute('aria-hidden', 'true')
    // modal.removeAttribute('aria-modal')
    // modal.removeEventListener('click', closeModal)
    // modal.querySelector('.jsClose').removeEventListener('click', closeModal)
    // modal.querySelector('.modalStop').removeEventListener('click', stopPropagation)
    // modal = null
    modal.style.display = 'none'
}

const displayModal2 = () => {
    modal1.style.display = 'none'
    modal2.style.display = 'block'
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

// const previewImage = (event) => {
//     if () {
//     const imageSrc = URL.createObjectURL()
//     const imagePreview = document.querySelector('.preview')
//     imagePreview.src = imageSrc
//     imagePreview.style.display = "block"
//     }
// }

const formData = new FormData()
    formData.append("image", addImg)
    formData.append("title", titleImg)
    formData.append("category", category)

const answer = 
        await fetch('http://localhost:5678/api/works/', {
        method: 'POST',
        headers: {'Authorization': `Bearer ${token}`},
        body: formData
    });

    