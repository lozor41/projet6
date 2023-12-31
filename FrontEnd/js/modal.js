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
const titleError = document.getElementById('title-error')
const selectError = document.getElementById('select-error')
const selectCategory = document.getElementById('category')
const btnValidate = document.getElementById('validate')

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
    disableButton()
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

const disableButton = () => {
    btnValidate.style.backgroundColor = "#A7A7A7"
    btnValidate.setAttribute('disabled', 'disabled')
    btnValidate.style.cursor = 'not-allowed'
}

const enableButton = () => {
    btnValidate.style.backgroundColor = '#1D6154'
    btnValidate.removeAttribute('disabled')
    btnValidate.style.cursor = 'pointer'
}

const fileIsValid = () => {
    const file = fileUpload.files[0]
    const fileTypeAccepted = ['image/jpeg', 'image/png']
    if (file && file.size < 4000000 && fileTypeAccepted.includes(file.type)) {
        console.log(file)
        preview.src = URL.createObjectURL(file)
        addImg.style.display = 'none'
        preview.style.display = 'flex'
        fileError.style.display = 'none'
        return true
    }
    fileError.style.display = 'flex'
    disableButton()
    return false
}

const titleIsValid = () => {
    if (title.value.length < 2) {
        titleError.style.display = 'flex'
        disableButton()
        return false
    }
    titleError.style.display = 'none'
    return true
}

const selectIsValid = () => {
    if (parseInt(selectCategory.value) <= 0) {
        selectError.style.display = 'flex'
        disableButton()
        return false
    }
    selectError.style.display = 'none'
    return true
}

const checkInputsFormAddWork = () => {
    const result = fileIsValid() && titleIsValid() && selectIsValid()
    if (result) {
        enableButton()
    }

    return result
}


fileUpload.addEventListener('change', () => checkInputsFormAddWork())

title.addEventListener('input', () => checkInputsFormAddWork())

selectCategory.addEventListener('change', () => checkInputsFormAddWork())

formAddWork.addEventListener('submit', e => {
    // avoit to reload the page
    e.preventDefault()

    if (checkInputsFormAddWork()) {
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
    }
})




