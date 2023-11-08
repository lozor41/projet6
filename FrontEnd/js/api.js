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

const post = async (url, data) => fetch(url, {
    method: 'post',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
}).then(res => res.json()).then(data => data).catch(error => error)

const postLogin = async data => await post(LOGIN_URL, data).then(data => data)

const deleteWork = id => fetch(`${WORKS_URL}/${id}`, {
    method: 'delete',
    headers: { 'Authorization': `Bearer ${localStorage.token}` }
});

const postWork = data => fetch(WORKS_URL, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${localStorage.token}` },
    body: data
}).then(res => res.json())


