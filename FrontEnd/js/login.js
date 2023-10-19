const formLogin = document.querySelector('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

formLogin.addEventListener('submit', async e => {
    // pour éviter de recharger la page lorsqu'on valide le formulaire
    e.preventDefault()

    await postLogin({ email: email.value, password: password.value })
        .then(data => {
            if (data.token) {
                localStorage.token = data.token
                window.location.href = "./index.html"
            } else {
                alert("Erreur dans l’identifiant ou le mot de passe")
            }
        })

})


