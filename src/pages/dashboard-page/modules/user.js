let currentUser = {
  username: '',
  organization: '',
  photo: ''
}

const init = () => {
  getCurrentUser()

  const logoutItem = document.querySelector('.tooltip__user--logout')
  logoutItem.onclick = () => logout()
}

const getCurrentUser = () => {
  fetch('https://test-final.b8one.academy/user')
    .then(response => response.json())
    .then(user => {
      currentUser = user
      updateUserInfo()
    })
    .catch(error =>
      console.log('Aconteceu um erro ao tentar buscar o usuário atual')
    )
}

const updateUserInfo = () => {
  const tooltipUser = document.querySelector('.tooltip__user--name')
  tooltipUser.innerText = `${currentUser.username}!`

  const organization = document.querySelector('.user__name')
  organization.innerText = currentUser.organization

  const userAvatar = document.querySelector('.nav__user--avatar')
  userAvatar.src = currentUser.photo

  const userName = document.querySelector('.nav__user--name')
  userName.innerText = currentUser.username
}

const logout = () => {
  localStorage.removeItem('IS_USER_LOGGED')
  window.location.href = '../login-page/index.html'
}

export default init
