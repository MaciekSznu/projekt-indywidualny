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

//funkcja ukrywająca wszystkie elementy z klasa content oraz usuwająca klasę active z wszystkich elementów menu
function displayNoneDisActive (){
  var contentElements = document.querySelectorAll('.content');
  for ( var j = 0; j < contentElements.length; j++){
    contentElements[j].classList.add('display-none');
  }
  var menuElements = document.querySelectorAll('[class*="menu-item"]');
  for ( var i = 0; i < menuElements.length; i++){
    menuElements[i].classList.remove('active');
  }
}
//funkcja odsyłająca na góre strony po kliknięciu w element menu
function scrollTop (){
  window.scroll({
    top: 0,
    left:0,
  });
}

var leftMenu = document.getElementById('leftMenu');
leftMenu.addEventListener('click', function(e) {
  if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] !== 'menu-item-links'  && e.target.parentNode.classList[0] !== 'menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.parentNode.className.slice(10);//przycinam nazwę klasy o ilość znaków odpowiadającą pierwszym dwóm członom
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for ( var i = 0; i < documentElements.length; i++){
    documentElements[i].classList.remove('display-none');
    }
    e.target.parentNode.classList.add('active');
  }
  else if (e.target.tagName == 'LI' && e.target.classList[0] !== 'menu-item-links'  && e.target.classList[0] !== 'menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.className.slice(10);//przycinam nazwę klasy o ilość znaków odpowiadającą pierwszym dwóm członom
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for ( var i = 0; i < documentElements.length; i++){
    documentElements[i].classList.remove('display-none');
    }
    e.target.classList.add('active');
  }
  else if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'menu-item-links') {
    openModal('#linksModal');
    e.target.parentNode.classList.add('active');
  }
  else if (e.target.tagName == 'LI' && e.target.classList[0] == 'menu-item-links') {
    openModal('#linksModal');
    e.target.classList.add('active');
  }
  else if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'menu-item-banners') {
    openModal('#bannersModal');
    e.target.parentNode.classList.add('active');
  }
  else if (e.target.tagName == 'LI' && e.target.classList[0] == 'menu-item-banners') {
    openModal('#bannersModal');
    e.target.classList.add('active');
  }
  scrollTop();
});

var mobileMenu = document.getElementById('mobileMenu');
mobileMenu.addEventListener('click', function(e) {
  if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] !== 'mobile-menu-item-links'  && e.target.parentNode.classList[0] !== 'mobile-menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.parentNode.className.slice(17);//przycinam nazwę klasy o ilość znaków odpowiadającą pierwszym dwóm członom
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for ( var i = 0; i < documentElements.length; i++){
    documentElements[i].classList.remove('display-none');
    }
    e.target.parentNode.classList.add('active');
  }
  else if (e.target.tagName == 'LI' && e.target.classList[0] !== 'mobile-menu-item-links'  && e.target.classList[0] !== 'mobile-menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.className.slice(17);//przycinam nazwę klasy o ilość znaków odpowiadającą pierwszym dwóm członom
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for ( var i = 0; i < documentElements.length; i++){
    documentElements[i].classList.remove('display-none');
    }
    e.target.classList.add('active');
  }
  else if ((e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'mobile-menu-item-links') || (e.target.tagName == 'LI' && e.target.classList[0] == 'mobile-menu-item-links')) {
    openModal('#linksModal');
  }
  else if ((e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'mobile-menu-item-banners') || (e.target.tagName == 'LI' && e.target.classList[0] == 'mobile-menu-item-banners')) {
    openModal('#bannersModal');
  }
  //obsługa active w modalach nie potrzebna ze względy na znikające manu po kliknięciu
  scrollTop();
  toggleMenu();
  toggleHamburger();
});

//obsługa modali
function closeModal() {
  document.getElementById('overlay').classList.add('display-none');
  document.querySelector('.menu-item-links').classList.remove('active');
  document.querySelector('.mobile-menu-item-links').classList.remove('active');
  document.querySelector('.menu-item-banners').classList.remove('active');
  document.querySelector('.mobile-menu-item-banners').classList.remove('active');
}
//zamykanie przyciskami
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  });
});
//zamykanie po kliknięciu na tło
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) { 
    closeModal();
  }
});
//zamykanie po kliknięci esc
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal();
  }
});
//otwieranie modali
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.add('display-none');
  })
  document.querySelector('#overlay').classList.remove('display-none');
  document.querySelector(modal).classList.remove('display-none');
}

//obsługa details->pagination 
//dodać obsługe strzałek
document.querySelector('.pagination-ul').addEventListener('click', function(e) {
  e.preventDefault();
  var target = e.target;
  if (target.parentElement.classList == 'pagination-number') {
    var paginationNumbers = document.querySelectorAll('.pagination-number');
    for ( var j = 0; j < paginationNumbers.length; j++){
    paginationNumbers[j].classList.remove('selected');
    }
    target.parentElement.classList.add('selected');
  }
});

//obsługa buttonów chart
document.querySelector('.tab-button-blue').addEventListener('click', function(e) {
  e.preventDefault();
  e.target.classList.toggle('clicked');
});
document.querySelector('.tab-button-orange').addEventListener('click', function(e) {
  e.preventDefault();
  e.target.classList.toggle('clicked');
});
document.querySelector('.tab-button-green').addEventListener('click', function(e) {
  e.preventDefault();
  e.target.classList.toggle('clicked');
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

//obsługa range
function updateTextInput(val) {
  document.getElementById('textInput').value=(val + " hours");
  var rangeWidth = document.getElementById('range').offsetWidth;
  var margLeft = (val/200)*(rangeWidth-24);
  document.getElementById('textInput').style.marginLeft = margLeft+"px";
}