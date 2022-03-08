// event listener that is triggered when a button is clicked.
// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.


export function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  targetBasket.textContent = id;
}


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


// export the function that will do some storage (handle the click on the button)
// inside createDivs.mjs import that function and add it as an eventListener when creating the buttons
