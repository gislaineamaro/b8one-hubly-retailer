let isPasswordVisible = false

const invalidValueInput = response => {
  const inputEmail = document.querySelector('.form__input--email')
  const inputPassword = document.querySelector('.form__input--password')
  const alert = document.querySelector('.form__error--text')
  if (response.message) {
    inputEmail.classList.add('isError')
    inputPassword.classList.add('isError')
    alert.style.display = 'flex'
  }
}
const showPassword = () => {
  const eyeHide = document.querySelector('.form__icon--eye')
  const inputPassword = document.querySelector('.form__input--password')

  eyeHide.onclick = e => {
    if (isPasswordVisible) {
      eyeHide.src = '../../assets/eyeHide.png'
      isPasswordVisible = false
      inputPassword.setAttribute('type', 'password')
    } else {
      eyeHide.src = '../../assets/eyeShow.png'
      isPasswordVisible = true
      inputPassword.setAttribute('type', 'text')
    }
  }
}
const login = (email, password) => {
  const data = {
    email,
    password
  }
  const config = {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  }

  fetch('https://test-final.b8one.academy/login', config)
    .then(response => response.json())
    .then(response => {
      const isLoginValid = response
      if (isLoginValid == true && !response.message) {
        localStorage.setItem('IS_USER_LOGGED', 'true')
        window.location.href = '../dashboard-page/index.html'
      } else {
        invalidValueInput(response)
      }
    })
    .catch(error => {
      alert('Usuário invalido!')
    })
}

window.onload = () => {
  const form = document.querySelector('.form__box')
  const isUserLogged = localStorage.getItem('IS_USER_LOGGED')
  if (isUserLogged == 'true')
    window.location.href = '../dashboard-page/index.html'

  form.onsubmit = e => {
    e.preventDefault()
    const email = document.querySelector('.form__input--email')
    const password = document.querySelector('.form__input--password')

    login(email.value, password.value)
  }

  showPassword()
}
