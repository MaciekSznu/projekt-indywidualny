'use strict';

//funkcja ukrywająca/wyświetlająca menu mobile oraz zmieniająca hamburgera w X
function toggleMenu(visible) {
    document.querySelector('.mobile-menu').classList.toggle('display-none', visible);
  }
function toggleHamburger(){
  //pobieram rozmiar ekranu użtkownika od tego uzależniam czy funkcja ruszy czy nie
  var viewportWidth = document.documentElement.clientWidth;
    if (viewportWidth < 1200) {
  document.querySelector('.hamburger').classList.toggle('hamburger-clicked');
  }
}
document.querySelector('.hamburger').addEventListener('click', function(e) {
    e.preventDefault();
    toggleMenu();
    toggleHamburger();
});

//funkcje obsługujące linki z menu//
//funkcja odsyłająca na góre strony po kliknięciu w element menu
function scrollTop (){
  window.scroll({
    top: 0,
    left:0,
  });
}
//funkcja ukrywająca wszystkie elementy z klasa content
function hideContent(){
  var contentElements = document.querySelectorAll('.content');
  for ( var j = 0; j < contentElements.length; j++){
    contentElements[j].classList.add('display-none');
  }
}
//funkcja usuwająca klasę active z wszystkich elementów menu
function hideActive(){
  var contentElements = document.querySelectorAll('[class*="menu-item"]');
  for ( var j = 0; j < contentElements.length; j++){
    contentElements[j].classList.remove('active');
  }
}
//general//
function toggleMenuGenaral(){
  var generalElements = document.querySelectorAll('.general');
  for ( var i = 0; i < generalElements.length; i++){
    generalElements[i].classList.remove('display-none');
  }
}
function activeMenuGenral(){
  document.querySelector('.menu-item-general').classList.add('active');
  document.querySelector('.mobile-menu-item-general').classList.add('active');
}

//desktop
document.querySelector('.menu-item-general').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuGenaral();
  hideActive();
  activeMenuGenral();
  scrollTop();
});
//mobile
document.querySelector('.mobile-menu-item-general').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuGenaral();
  hideActive();
  activeMenuGenral();
  scrollTop();
});

//details//
function toggleMenuDetails(){
  document.querySelector('.details').classList.remove('display-none');
  }
function activeMenuDetails(){
  document.querySelector('.menu-item-details').classList.add('active');
  document.querySelector('.mobile-menu-item-details').classList.add('active');
}
//desktop
document.querySelector('.menu-item-details').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuDetails();
  hideActive();
  activeMenuDetails();
  scrollTop();
});
//mobile
document.querySelector('.mobile-menu-item-details').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuDetails();
  hideActive();
  activeMenuDetails();
  scrollTop();
});

//payout//
function toggleMenuPayout(){
  document.querySelector('.payout').classList.remove('display-none');
}
function activeMenuPayout(){
  document.querySelector('.menu-item-payout').classList.add('active');
  document.querySelector('.mobile-menu-item-payout').classList.add('active');
}
//desktop
document.querySelector('.menu-item-payout').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPayout();
  hideActive();
  activeMenuPayout();
  scrollTop();
});
//mobile
document.querySelector('.mobile-menu-item-payout').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPayout();
  hideActive();
  activeMenuPayout();
  scrollTop();
});

//personal-data//
function toggleMenuPersonalData(){
  document.querySelector('.personal-data').classList.remove('display-none');
}
function activeMenuPersonalData(){
  document.querySelector('.menu-item-personal-data').classList.add('active');
  document.querySelector('.mobile-menu-item-personal-data').classList.add('active');
}
//desktop
document.querySelector('.menu-item-personal-data').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPersonalData();
  hideActive();
  activeMenuPersonalData();
  scrollTop();
});
//mobile
document.querySelector('.mobile-menu-item-personal-data').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPersonalData();
  hideActive();
  activeMenuPersonalData();
  scrollTop();
});
//postback//
function toggleMenuPostback(){
  document.querySelector('.postback').classList.remove('display-none');
}
function activeMenuPostback(){
  document.querySelector('.menu-item-postback').classList.add('active');
  document.querySelector('.mobile-menu-item-postback').classList.add('active');
}
//desktop
document.querySelector('.menu-item-postback').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPostback();
  hideActive();
  activeMenuPostback();
  scrollTop();
});
//mobile
document.querySelector('.mobile-menu-item-postback').addEventListener('click', function(e) {
  e.preventDefault();
  hideContent();
  toggleMenuPostback();
  hideActive();
  activeMenuPostback();
  scrollTop();
});

//obsługa details->pagination
function hideSelected(){
  var contentElements = document.querySelectorAll('[class*="pagination-number"]');
  for ( var j = 0; j < contentElements.length; j++){
    contentElements[j].classList.remove('selected');
  }
}
function activeSelected(){
  document.querySelector('.pagination-number').classList.add('selected');
}

///do skończenia!!!!

//obsługa buttonów chart
function toggleButtonBlue(){
  document.querySelector('.tab-button-blue').classList.toggle('clicked');
}
document.querySelector('.tab-button-blue').addEventListener('click', function(e) {
  e.preventDefault();
  toggleButtonBlue();
});
function toggleButtonOrange(){
  document.querySelector('.tab-button-orange').classList.toggle('clicked');
}
document.querySelector('.tab-button-orange').addEventListener('click', function(e) {
  e.preventDefault();
  toggleButtonOrange();
});
function toggleButtonGreen(){
  document.querySelector('.tab-button-green').classList.toggle('clicked');
}
document.querySelector('.tab-button-green').addEventListener('click', function(e) {
  e.preventDefault();
  toggleButtonGreen();
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

