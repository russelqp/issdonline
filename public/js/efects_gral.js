//Ocultar / Mostrar Menu
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.icon-menu');
const tache_button = document.querySelector('.icon-tache');

burgerButton.addEventListener('click', hideShow);
tache_button.addEventListener('click', hideShow);
 
 function hideShow(e){
   e.preventDefault();
  if (menu.classList.contains('is-active')){
    menu.classList.remove('is-active');
    burgerButton.style.transform = "scale(1)";
    tache_button.style.transform = "scale(0)";
  }else{
    menu.classList.add('is-active');
    burgerButton.style.transform = "scale(0)";
    tache_button.style.transform = "scale(1)";
  }
 }