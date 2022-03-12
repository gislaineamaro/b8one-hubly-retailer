import chartsjs from './modules/charts.js'
import menu from './modules/menu.js'
import initInsights from './modules/insights.js'
import initUser from './modules/user.js'

const main = () => {
  initUser()
  chartsjs()
  menu()
  initInsights()
}
window.onload = () => {
  const isUserLogged = localStorage.getItem('IS_USER_LOGGED')
  if (isUserLogged != 'true') window.location.href = '../login-page/index.html'
}

main()
