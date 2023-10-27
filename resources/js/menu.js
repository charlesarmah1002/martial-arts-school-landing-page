const menuBtn = document.querySelector('.menu-toggle')
const menu = document.querySelector('.mobile-menu')

menuBtn.addEventListener('click', ()=> {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active')
})