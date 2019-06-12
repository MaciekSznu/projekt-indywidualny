'use strict';

//funkcja ukrywająca/wyświetlająca menu
function toggleMenu(visible) {
    document.querySelector('.mobile-menu').classList.toggle('display-none', visible)
  }

document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu()
});