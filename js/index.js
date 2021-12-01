document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu')
  burgerMenu.addEventListener('click', () => {
    const target = document.getElementById(burgerMenu.dataset.target)
    const burgerMenuIcon = burgerMenu.lastElementChild
    const navEnd = document.getElementsByClassName('nav-end')[0]
    target.classList.toggle('is-active')
    burgerMenuIcon.classList.toggle('icofont-navigation-menu')
    burgerMenuIcon.classList.toggle('icofont-ui-close')
    navEnd.classList.toggle('is-active')
  })
})
