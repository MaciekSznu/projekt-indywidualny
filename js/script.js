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
}//paczki funkcji dla menu
function desktopMenuPackage() {
  hideContent();
  hideActive();
  scrollTop();
}
function mobileMenuPackage() {
  hideContent();
  hideActive();
  scrollTop();
  toggleMenu();
  toggleHamburger();
}

//general//
function toggleMenuGenaral(){
  var generalElements = document.querySelectorAll('.general');
  for ( var i = 0; i < generalElements.length; i++){
    generalElements[i].classList.remove('display-none');
  }
  document.querySelector('.menu-item-general').classList.add('active');
  document.querySelector('.mobile-menu-item-general').classList.add('active');
}
//desktop
document.querySelector('.menu-item-general').addEventListener('click', function(e) {
  e.preventDefault();
  desktopMenuPackage();
  toggleMenuGenaral();
});
//mobile
document.querySelector('.mobile-menu-item-general').addEventListener('click', function(e) {
  e.preventDefault();
  mobileMenuPackage();
  toggleMenuGenaral();
});

//details//
function toggleMenuDetails(){
  document.querySelector('.details').classList.remove('display-none');
  document.querySelector('.menu-item-details').classList.add('active');
  document.querySelector('.mobile-menu-item-details').classList.add('active');
  }
//desktop
document.querySelector('.menu-item-details').addEventListener('click', function(e) {
  e.preventDefault();
  desktopMenuPackage();
  toggleMenuDetails();
});
//mobile
document.querySelector('.mobile-menu-item-details').addEventListener('click', function(e) {
  e.preventDefault();
  mobileMenuPackage();
  toggleMenuDetails();
});

//payout//
function toggleMenuPayout(){
  document.querySelector('.payout').classList.remove('display-none');
  document.querySelector('.menu-item-payout').classList.add('active');
  document.querySelector('.mobile-menu-item-payout').classList.add('active');
}
//desktop
document.querySelector('.menu-item-payout').addEventListener('click', function(e) {
  e.preventDefault();
  desktopMenuPackage();
  toggleMenuPayout();
});
//mobile
document.querySelector('.mobile-menu-item-payout').addEventListener('click', function(e) {
  e.preventDefault();
  mobileMenuPackage();
  toggleMenuPayout();
});

//personal-data//
function toggleMenuPersonalData(){
  document.querySelector('.personal-data').classList.remove('display-none');
  document.querySelector('.menu-item-personal-data').classList.add('active');
  document.querySelector('.mobile-menu-item-personal-data').classList.add('active');
}
//desktop
document.querySelector('.menu-item-personal-data').addEventListener('click', function(e) {
  e.preventDefault();
  desktopMenuPackage();
  toggleMenuPersonalData();
});
//mobile
document.querySelector('.mobile-menu-item-personal-data').addEventListener('click', function(e) {
  e.preventDefault();
  mobileMenuPackage();
  toggleMenuPersonalData();
});

//postback//
function toggleMenuPostback(){
  document.querySelector('.postback').classList.remove('display-none');
  document.querySelector('.menu-item-postback').classList.add('active');
  document.querySelector('.mobile-menu-item-postback').classList.add('active');
}
//desktop
document.querySelector('.menu-item-postback').addEventListener('click', function(e) {
  e.preventDefault();
  desktopMenuPackage();
  toggleMenuPostback();
});
//mobile
document.querySelector('.mobile-menu-item-postback').addEventListener('click', function(e) {
  e.preventDefault();
  mobileMenuPackage();
  toggleMenuPostback();
});

//obsługa modali
function closeModal() {
  document.getElementById('overlay').classList.add('display-none');
  hideActive();
}
//zamykanie przyciskami
document.querySelectorAll('#overlay .js--close-modal').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    closeModal();
  })
})
//zamykanie po kliknięciu na tło
document.querySelector('#overlay').addEventListener('click', function(e) {
  if(e.target === this) {
    closeModal();
  }
})
//zamykanie po kliknięci esc
document.addEventListener('keyup', function(e) {
  if(e.keyCode === 27) {
    closeModal()
  }
})
//otwieranie modali
function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function(modal) {
    modal.classList.add('display-none');
  })
  document.querySelector('#overlay').classList.remove('display-none');
  document.querySelector(modal).classList.remove('display-none');
}
//obsługa otiwerania modali w menu
//links2 
function activeMenuLinks(){
  document.querySelector('.menu-item-links').classList.add('active');
  document.querySelector('.mobile-menu-item-links').classList.add('active');
}
//desktop
document.querySelector('.menu-item-links').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#linksModal');
  hideActive();
  activeMenuLinks();
});
//mobile
document.querySelector('.mobile-menu-item-links').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#linksModal');
  hideActive();
  activeMenuLinks();
});
//banners
function activeMenuBanners(){
  document.querySelector('.menu-item-banners').classList.add('active');
  document.querySelector('.mobile-menu-item-banners').classList.add('active');
}
//desktop
document.querySelector('.menu-item-banners').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#bannersModal');
  hideActive();
  activeMenuBanners();
});
//mobile
document.querySelector('.mobile-menu-item-banners').addEventListener('click', function(e) {
  e.preventDefault();
  openModal('#bannersModal');
  hideActive();
  activeMenuBanners();
});


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

//obsługa range
function updateTextInput(val) {
  document.getElementById('textInput').value=(val + " hours");
  var rangeWidth = document.getElementById('range').offsetWidth;
  var margLeft = (val/200)*(rangeWidth-24);
  document.getElementById('textInput').style.marginLeft = margLeft+"px";
}