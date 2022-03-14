// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.

// const basket = [{ id: 'quantity' }];
// console.log(basket);

const bricks = [
  { id: 'brk1', name: 'Red 2 by 4', colour: 'red', x: 2, y: 4, img: 'img/red2by4.jpg', p: '£0.30', quantity: '40' },
  { id: 'brk2', name: 'Blue 2 by 4', colour: 'blue', x: 2, y: 4, img: 'img/blue2by4.jpg', p: '£0.40', quantity: '20' },
  { id: 'brk3', name: 'Yellow 2 by 4', colour: 'yellow', x: 2, y: 4, img: 'img/yellow2by4.jpg', p: '£0.20', quantity: '300' },
  { id: 'brk4', name: 'Green 2 by 4', colour: 'green', x: 2, y: 4, img: 'img/green2by4.jpg', p: '£0.20', quantity: '22' },
  { id: 'brk5', name: 'Black 2 by 4', colour: 'black', x: 2, y: 4, img: 'img/black2by4.jpg', p: '£0.20', quantity: '91' },
  { id: 'brk6', name: 'Green 2 by 4', colour: 'green', x: 4, y: 4, img: 'img/green2by4c.jpg', p: '£0.10', quantity: '51' },
  { id: 'brk7', name: 'Red 2 by 1', colour: 'red', x: 2, y: 2, img: 'img/red2by1.jpg', p: '£0.05', quantity: '29' },
  { id: 'brk8', name: 'Mixed Crate', colour: 'All', x: 1, y: 1, img: 'img/legoCrate.jpeg', p: '£40', quantity: '10' },
  { id: 'brk9', name: 'Bonsai!', colour: 'All', x: 1, y: 1, img: 'img/bonsai.png', p: '£15', quantity: '4' },
  { id: 'brk10', name: 'Lego master set', colour: 'All', x: 1, y: 1, img: 'img/house.png', p: '£20', quantity: '10' },
  { id: 'brk11', name: 'The education bundle', colour: 'All', x: 1, y: 1, img: 'img/educationBundle.jpg', p: '£30', quantity: '40' },
  { id: 'brk12', name: 'The ol\' saloon', colour: 'All', x: 1, y: 1, img: 'img/saloon.png', p: '£45', quantity: '5' },
  { id: 'brk13', name: 'The plane!', colour: 'All', x: 1, y: 1, img: 'img/rocketPlane.jpg', p: '£15', quantity: '35' },
  { id: 'brk14', name: 'The ultimate minecraft set', colour: 'All', x: 1, y: 1, img: 'img/treehouse.jpeg', p: '£25', quantity: '5' },
  { id: 'brk15', name: 'The victors colloseum', colour: 'All', x: 1, y: 1, img: 'img/colloseum.jpg', p: '£400', quantity: '2' },
];

export async function addProductToCart() {
  const targetBasket = document.querySelector('.showItems');
  const response = await fetch(bricks);
  const brick = await response.json();
  const BrickName = document.createElement('p');
  BrickName.textContent = `${brick.name}`;
  targetBasket.append(BrickName);
  const price = document.createElement('p');
  price.textContent = `${brick.price}`;
  targetBasket.append(price);
  const picture = document.createElement('img');
  picture.textContent = `${brick.picture}`;
  targetBasket.append(picture);
}

// export async function addProductToCart(id) {
//   const targetBasket = document.querySelector('.showItems');
//   targetBasket.textContent = id;
//   const response = await fetch(`/api/brick=${id}`);
//   const brick = await response.json();
//   const content = JSON.stringify(brick);
//   targetBasket.textContent = content;
// }

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
