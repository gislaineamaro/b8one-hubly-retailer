const menu = () => {
  const tooltipAsks = document.querySelector('.tooltip__asks')
  const tooltipUser = document.querySelector('.tooltip__user')

  window.addEventListener('click', event => {
    tooltipAsks.classList.add('tooltip--hide')
    tooltipUser.classList.add('tooltip--hide')
  })

  const askMenu = document.querySelector('.nav__icon--ask')
  askMenu.addEventListener('click', e => {
    e.stopPropagation()

    tooltipUser.classList.add('tooltip--hide')
    tooltipAsks.classList.toggle('tooltip--hide')
  })

  const avatarMenu = document.querySelector('.nav__user--header')
  avatarMenu.addEventListener('click', e => {
    e.stopPropagation()

    tooltipAsks.classList.add('tooltip--hide')
    tooltipUser.classList.toggle('tooltip--hide')
  })

  const submenuItem = document.querySelectorAll(
    '.sidebar__option--content_item'
  )
  submenuItem.forEach(item => {
    item.onclick = () => {
      const parent = item.parentNode
      parent.lastElementChild.classList.toggle('close')
    }
  })
}

export default menu
