const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.main__list');
const header = document.getElementsByTagName('header')[0];

navToggle.addEventListener('click',()=>{
  header.classList.toggle('header__expanded')
  navList.classList.toggle('main__list__visible')
  navToggle.classList.toggle('nav-toggle__open')
})
