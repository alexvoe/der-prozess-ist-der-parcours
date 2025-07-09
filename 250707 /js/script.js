//karte


function loadPage(page) {
  document.getElementById('content-frame').src = page;
}


//felder slide show
document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '#image-slider' ).mount();
} );


//intro

function hideOverlay() {
  const overlay = document.getElementById('intro-overlay');
  overlay.classList.add('hidden');
  setTimeout(() => overlay.remove(), 1000); // entfernt das Element nach Übergang
}


//hover bilder
function loadPage(url) {
  document.getElementById('content-frame').src = url;
  
}


//slider
const gallery = document.getElementById("gallery");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    gallery.style.transform = `translateX(-${scrollY}px)`;
  });



  //menu

  const button = document.querySelector('.menu-button');
  const items = document.querySelector('.menu-items');

  button.addEventListener('click', () => {
    items.classList.toggle('hidden');
  });




  //scratch

  document.addEventListener('mousemove', function(e) {
    const mybody = document.querySelector('body');
    const round = document.createElement('span');
    round.style.left = -125 + e.offsetX + 'px';
    round.style.top = -125 + e.offsetY + 'px';
    mybody.appendChild(round);
});


//lightbox
const trigger = document.getElementById('showImage');
const overlay = document.getElementById('fullscreenOverlay');
const closeBtn = document.getElementById('closeOverlay');

trigger.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('active');
});