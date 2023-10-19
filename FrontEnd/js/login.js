
// fetch(postLog,{
//     method: "POST",
//     body:{"email": "password"},
//     headers: { "Content-Type": "application/json" }
// })

const formLogin = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

formLogin.addEventListener('submit', async e => {
    // pour éviter de recharger la page lorsqu'on valide le formulaire
    e.preventDefault()

    await postLogin({ email: email.value, password: password.value }).then(data => console.log(data))

    if (postLogin) {
        window.location.href="./index.html"
    }
    else {
        alert("User-Id or password not found!")
    }

    const Token = await res.json()
    const upToken = JSON.stringify(Token)

    window.localStorage.setItem("Token", upToken)
    
    console.log(upToken)

})


