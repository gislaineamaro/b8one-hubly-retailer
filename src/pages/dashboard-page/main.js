const main = () => {
  initUser()
  initCharts()
  menu()
  initInsights()
}
window.onload = () => {
  const isUserLogged = localStorage.getItem('IS_USER_LOGGED')
  if (isUserLogged != 'true') window.location.href = '../login-page/index.html'
}

main()
