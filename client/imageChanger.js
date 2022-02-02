let slideI = 1;
seeSlides(slideI);

// Next/previous controls
function addSlides(n) {
  seeSlides(slideI += n);
}

// Thumbnail image controls

function currentSlide(n) {
  seeSlides(slideI = n);
}

function seeSlides(n) {
  let i;
  const slideMkr = document.getElementsByClassName('mySlides');
  const dot = document.getElementsByClassName('dot');
  if (n > slideMkr.length) { slideI = 1; }
  if (n < 1) { slideI = slideMkr.length; }
  for (i = 0; i < slideMkr.length; i++) {
    slideMkr[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }
  slideMkr[slideI - 1].style.display = 'block';
  dot[slideI - 1].className += ' active';
}

function handleAllFunctions() {
  addSlides();
  seeSlides();
  currentSlide();
}

window.addEventListener('load', handleAllFunctions);

// code extracted from How To Create a Slideshow. Retrieved from https://www.w3schools.com/howto/howto_js_slideshow.asp
