// burger
const menu = document.querySelector('.mobile');
const menuBtn = document.querySelector('.burger');

const disableScroll = document.querySelector('body');

if (menu && menuBtn) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    disableScroll.classList.toggle('body-scroll');
  })

  menu.querySelectorAll('.mobile__menu-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
      menuBtn.classList.remove('active');
      disableScroll.classList.remove('body-scroll');
    })
  })
}








