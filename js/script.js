'use strict';

// General click function
function click(target, callback) {
  document.querySelector(target).addEventListener('click', function (e) {
    e.preventDefault();
    return callback(e)
  });
}

// Mobile menu
function toggleMenu(visible) {
  document.querySelector('.mobile-menu').classList.toggle('display-none', visible);
}

function toggleHamburger() {
  var viewportWidth = document.documentElement.clientWidth;
  if (viewportWidth < 1200) {
    document.querySelector('.hamburger').classList.toggle('hamburger-clicked');
  }
}
click('.hamburger', function (e) {
  toggleMenu();
  toggleHamburger();
});

// Hide content and "disactive" menu items
function displayNoneDisActive() {
  var contentElements = document.querySelectorAll('.content');
  for (var j = 0; j < contentElements.length; j++) {
    contentElements[j].classList.add('display-none');
  }
  var menuElements = document.querySelectorAll('[class*="menu-item"]');
  for (var i = 0; i < menuElements.length; i++) {
    menuElements[i].classList.remove('active');
  }
}

function scrollTop() {
  window.scroll({
    top: 0,
    left: 0,
  });
}

// Left menu
click('#leftMenu', function (e) {
  if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] !== 'menu-item-links' && e.target.parentNode.classList[0] !== 'menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.parentNode.className.slice(10);
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for (var i = 0; i < documentElements.length; i++) {
      documentElements[i].classList.remove('display-none');
    }
    e.target.parentNode.classList.add('active');
  } else if (e.target.tagName == 'LI' && e.target.classList[0] !== 'menu-item-links' && e.target.classList[0] !== 'menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.className.slice(10);
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for (var i = 0; i < documentElements.length; i++) {
      documentElements[i].classList.remove('display-none');
    }
    e.target.classList.add('active');
  } else if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'menu-item-links') {
    openModal('#linksModal');
    e.target.parentNode.classList.add('active');
  } else if (e.target.tagName == 'LI' && e.target.classList[0] == 'menu-item-links') {
    openModal('#linksModal');
    e.target.classList.add('active');
  } else if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'menu-item-banners') {
    openModal('#bannersModal');
    e.target.parentNode.classList.add('active');
  } else if (e.target.tagName == 'LI' && e.target.classList[0] == 'menu-item-banners') {
    openModal('#bannersModal');
    e.target.classList.add('active');
  }
  scrollTop();
});

// Mobile menu
click('#mobileMenu', function (e) {
  if (e.target.tagName !== 'LI' && e.target.parentNode.classList[0] !== 'mobile-menu-item-links' && e.target.parentNode.classList[0] !== 'mobile-menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.parentNode.className.slice(17);
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for (var i = 0; i < documentElements.length; i++) {
      documentElements[i].classList.remove('display-none');
    }
    e.target.parentNode.classList.add('active');
  } else if (e.target.tagName == 'LI' && e.target.classList[0] !== 'mobile-menu-item-links' && e.target.classList[0] !== 'mobile-menu-item-banners') {
    displayNoneDisActive();
    var parentClassNameSliced = e.target.className.slice(17);
    var elementClassName = '.' + parentClassNameSliced;
    var documentElements = document.querySelectorAll(elementClassName);
    for (var i = 0; i < documentElements.length; i++) {
      documentElements[i].classList.remove('display-none');
    }
    e.target.classList.add('active');
  } else if ((e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'mobile-menu-item-links') || (e.target.tagName == 'LI' && e.target.classList[0] == 'mobile-menu-item-links')) {
    openModal('#linksModal');
  } else if ((e.target.tagName !== 'LI' && e.target.parentNode.classList[0] == 'mobile-menu-item-banners') || (e.target.tagName == 'LI' && e.target.classList[0] == 'mobile-menu-item-banners')) {
    openModal('#bannersModal');
  }
  scrollTop();
  toggleMenu();
  toggleHamburger();
});

// Modals
function closeModal() {
  document.getElementById('overlay').classList.add('display-none');
  document.querySelector('.menu-item-links').classList.remove('active');
  document.querySelector('.mobile-menu-item-links').classList.remove('active');
  document.querySelector('.menu-item-banners').classList.remove('active');
  document.querySelector('.mobile-menu-item-banners').classList.remove('active');
}

document.querySelectorAll('#overlay .js--close-modal').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    closeModal();
  });
});

click('#overlay', function (e) {
  if (e.target.id === 'overlay') {
    closeModal();
  }
  console.log(e.target);
});

const ESC_KEY = 27;
document.addEventListener('keyup', function (e) {
  if (e.keyCode === ESC_KEY) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll('#overlay > *').forEach(function (modal) {
    modal.classList.add('display-none');
  })
  document.querySelector('#overlay').classList.remove('display-none');
  document.querySelector(modal).classList.remove('display-none');
}

// Pagination
click('.pagination-ul', function (e) {
  var target = e.target;
  if (target.parentElement.classList == 'pagination-number') {
    var paginationNumbers = document.querySelectorAll('.pagination-number');
    for (var j = 0; j < paginationNumbers.length; j++) {
      paginationNumbers[j].classList.remove('selected');
    }
    target.parentElement.classList.add('selected');
  }
});

// Chart buttons
click('.tab-button-blue', function (e) {
  e.target.classList.toggle('clicked');
});
click('.tab-button-orange', function (e) {
  e.target.classList.toggle('clicked');
});
click('.tab-button-green', function (e) {
  e.target.classList.toggle('clicked');
});

// CHART //
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'bar',
  options: {
    legend: {
      display: false,
    }
  },
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    datasets: [{
        label: "Signups",
        backgroundColor: '#56819f',
        borderColor: '#56819f',
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: "FTD",
        backgroundColor: '#f58220',
        borderColor: '#f58220',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: "Earned",
        backgroundColor: '#04ae00',
        borderColor: '#04ae00',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        hidden: true,
      }
    ]
  },
});

// Range slider
const MAX_RANGE_VAL = 200;
const SLIDER_THUMB_WIDTH = 24;

function updateTextInput(val) {
  document.getElementById('textInput').value = (val + " hours");
  var rangeWidth = document.getElementById('range').offsetWidth;
  var margLeft = (val / MAX_RANGE_VAL) * (rangeWidth - SLIDER_THUMB_WIDTH);
  document.getElementById('textInput').style.marginLeft = margLeft + "px";
}