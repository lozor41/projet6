const WORKS_URL = 'http://localhost:5678/api/works'
const CATEGORIES_URL = 'http://localhost:5678/api/categories'
const LOGIN_URL = 'http://localhost:5678/api/users/login'

const get = async url => fetch(url).then(res => res.json()).then(data => data).catch(error => error)

const getWorks = async categoryId => await get(WORKS_URL).then(data => {
    console.log(data)
    const dataFiltered = categoryId ? data.filter(item => item.categoryId === categoryId) : data
    return dataFiltered
})

const getCategories = async () => await get(CATEGORIES_URL) 

// Login

const post = async url => fetch(url).then(res => res.json()).then(data => data).catch(error => error)

const postLog = async connect => await post(LOGIN_URL).then(data => {
    console.log(data)
    const logData = connect ? data.loger(email === password) : data
    return logData
})

