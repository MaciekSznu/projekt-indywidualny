'use strict';

//funkcja ukrywająca/wyświetlająca menu mobile oraz zmieniająca hamburgera w X
function toggleMenu(visible) {
    document.querySelector('.mobile-menu').classList.toggle('display-none', visible)
  }
function toggleHamburger(){
  var viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth < 1200) {
  document.querySelector('.hamburger').classList.toggle('hamburger-clicked', )
  }
}
document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    toggleHamburger()
});

//funkcje obsługujące linki z menu//
//funkcja ukrywająca wszystkie elementy z klasa content
function hideContent(){
  var contentElements = document.querySelectorAll('.content');
  for ( var j = 0; j < contentElements.length; j++){
    contentElements[j].classList.add('display-none')
  }
}
//general//
function toggleMenuGenaral(){
  var generalElements = document.querySelectorAll('.general');
  for ( var i = 0; i < generalElements.length; i++){
    generalElements[i].classList.remove('display-none')
  }
}
//desktop
document.querySelector('.menu-item-general').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuGenaral()
});
//mobile
document.querySelector('.mobile-menu-item-general').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuGenaral()
});

//details//
function toggleMenuDetails(){
  document.querySelector('.details').classList.remove('display-none')
  }
//desktop
document.querySelector('.menu-item-details').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuDetails()
});
//mobile
document.querySelector('.mobile-menu-item-details').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuDetails()
});

//payout//
function toggleMenuPayout(){
  document.querySelector('.payout').classList.remove('display-none')
  }
//desktop
document.querySelector('.menu-item-payout').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPayout()
});
//mobile
document.querySelector('.mobile-menu-item-payout').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPayout()
});

//OBSŁUGA CHART//
var ctx = document.getElementById('myChart').getContext('2d');

var chart = new Chart(ctx, {
  // typ wykresu bar (kolumnowy)
  type: 'bar',
  //ukrywam oznaczenia serii danych
  options: {
    legend: {
        display: false,
    }
  },
  data: {
      // etykiety osi X
      labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
      // serie danych
      datasets: [{
          // nazwa serii danych
          label: "Signups",
          // kolor serii danych
          backgroundColor: '#56819f',
          borderColor: '#56819f',
          // dane
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
      },
      {
          label: "FTD",
          backgroundColor: '#f58220',
          borderColor: '#f58220',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
      },
      {
          label: "Earned",
          backgroundColor: '#04ae00',
          borderColor: '#04ae00',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // ukrywamy ostatnią serię (tak mamy w projekcie)
          hidden: true,
      }]
  },
});

