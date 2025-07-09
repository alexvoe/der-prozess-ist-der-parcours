

const button = document.querySelector('.button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
  button.classList.toggle('-menu-open');
  menu.classList.toggle('-open');
})


window.addEventListener('scroll', function() {
  const logo = document.getElementById('logo');
  if (window.scrollY > 50) {
      logo.style.width = '20%';
      logo.style.padding = '10px';
  } else {
      logo.style.width = '95%';
      logo.style.padding = '20px';
  }
});



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


