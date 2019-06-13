'use strict';

//funkcja ukrywająca/wyświetlająca menu
function toggleMenu(visible) {
    document.querySelector('.mobile-menu').classList.toggle('display-none', visible)
  }

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});

//funkcja obsługująca linki z menu

//funkcja ukrywająca wszystkie elementy
function hideContent(){
  var contentElements = document.querySelectorAll('.content');
  for ( var j = 0; j < contentElements.length; j++){
    contentElements[j].classList.add('display-none')
  }
}
//general
function toggleMenuGenaral(){
  var generalElements = document.querySelectorAll('.general');
  for ( var i = 0; i < generalElements.length; i++){
    generalElements[i].classList.remove('display-none')
  }
}
//rozdzielić na osobne dla mibile
document.querySelector('.menu-item-general, .mobile-menu-item-general').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuGenaral()
});
//details
function toggleMenuDetails(){
  document.querySelector('.details').classList.remove('display-none')
  }
document.querySelector('.menu-item-details, .mobile-menu-item-details').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuDetails()
});

//payout
function toggleMenuPayout(){
  document.querySelector('.payout').classList.remove('display-none')
  }
document.querySelector('.menu-item-payout, .mobile-menu-item-payout').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPayout()
});


