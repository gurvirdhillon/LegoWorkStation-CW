// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.

export async function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  const response = await fetch(`/api/brick?id=${id}`);
  const brick = await response.json();
  const brickImage = document.createElement('img');
  brickImage.classList = 'BrickBasket';
  brickImage.src = `${brick.img}`;
  brickImage.alt = 'Your Brick ' + brick.name;
  const brickText = document.createElement('p');
  brickText.textContent = `${brick.name}`;
  targetBasket.append(brickText);
  targetBasket.append(brickImage);
}

// export the function that will do some storage (handle the click on the button)
// inside createDivs.mjs import that function and add it as an eventListener when creating the buttons

// attaching music to a button so when checkout is clicked music begins

const playMusic = document.querySelector('#checkout');
playMusic.addEventListener('click', play);

function play() {
  const audio = document.querySelector('#audio');
  audio.play();
}

function init() {
}

window.addEventListener('load', init);

/* code extracted from:
 Karahanidi, A., & Elton, D. (2021). Javascript Audio Play on click.
 Retrieved from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
 edited according to own requirements */
