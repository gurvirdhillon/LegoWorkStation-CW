function soundEffect() {
  const audio = document.querySelector('#audio');
  audio.play();
}

window.addEventListener('load', soundEffect);

const container = document.querySelector('#contain-order');
container.addEventListener('load', displayReciept);

async function displayReciept() {
  const grabContent = await fetch('/api/brick/showItems');
  const response = await grabContent.json();
  const makeImg = document.createElement('img');
  makeImg.src = `${response.img}`;
  makeImg.alt = 'The Brick you have purchased is ' + response.name;
  const makeText = document.createElement('p');
  makeText.textContent = `${response.name}`;
  const makePrice = document.createElement('p');
  makePrice.textContent = `${response.p}`;
  container.append(makeImg, makeText, makePrice);
}

/*
this was used in order to write the confirmation page and to cueue the event listener for an onload event

* (2017). Retrieved from https://www.youtube.com/watch?v=fldHW2JUofY&t=2s
* Web Audio API - Web APIs | MDN. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

Coin Payment by moogleoftheages. Freesound. (2021). Retrieved 29 April 2022, from https://freesound.org/people/moogleoftheages/sounds/561359/.

Karahanidi, A., & Elton, D. (2014). Javascript Audio Play on click.
Retrieved from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
editted to my own needs

*/
