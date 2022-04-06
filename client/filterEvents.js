const bricks = [
  { id: 'brk1', name: 'Red 2 by 4', colour: 'red', x: 2, y: 4, img: 'img/red2by4.jpg', p: '£0.30', quantity: '40', type: 'brick' },
  { id: 'brk2', name: 'Blue 2 by 4', colour: 'blue', x: 2, y: 4, img: 'img/blue2by4.jpg', p: '£0.40', quantity: '20', type: 'brick' },
  { id: 'brk3', name: 'Yellow 2 by 4', colour: 'yellow', x: 2, y: 4, img: 'img/yellow2by4.jpg', p: '£0.20', quantity: '300', type: 'brick' },
  { id: 'brk4', name: 'Green 2 by 4', colour: 'green', x: 2, y: 4, img: 'img/green2by4.jpg', p: '£0.20', quantity: '22', type: 'brick' },
  { id: 'brk5', name: 'Black 2 by 4', colour: 'black', x: 2, y: 4, img: 'img/black2by4.jpg', p: '£0.20', quantity: '91', type: 'brick' },
  { id: 'brk6', name: 'Green 2 by 4', colour: 'green', x: 4, y: 4, img: 'img/green2by4c.jpg', p: '£0.10', quantity: '51', type: 'brick' },
  { id: 'brk7', name: 'Red 2 by 1', colour: 'red', x: 2, y: 2, img: 'img/red2by1.jpg', p: '£0.05', quantity: '29', type: 'brick' },
  { id: 'brk8', name: 'Mixed Crate', colour: 'All', x: 1, y: 1, img: 'img/legoCrate.jpeg', p: '£40', quantity: '10', type: 'set' },
  { id: 'brk9', name: 'Bonsai!', colour: 'All', x: 1, y: 1, img: 'img/bonsai.png', p: '£15', quantity: '4', type: 'set' },
  { id: 'brk10', name: 'Lego master set', colour: 'All', x: 1, y: 1, img: 'img/house.png', p: '£20', quantity: '10', type: 'set' },
  { id: 'brk11', name: 'The education bundle', colour: 'All', x: 1, y: 1, img: 'img/educationBundle.jpg', p: '£30', quantity: '40', type: 'set' },
  { id: 'brk12', name: 'The ol\' saloon', colour: 'All', x: 1, y: 1, img: 'img/saloon.png', p: '£45', quantity: '5', type: 'set' },
  { id: 'brk13', name: 'The plane!', colour: 'All', x: 1, y: 1, img: 'img/rocketPlane.jpg', p: '£15', quantity: '35', type: 'set' },
  { id: 'brk14', name: 'The ultimate minecraft set', colour: 'All', x: 1, y: 1, img: 'img/treehouse.jpeg', p: '£25', quantity: '5', type: 'brick' },
  { id: 'brk15', name: 'The victors colloseum', colour: 'All', x: 1, y: 1, img: 'img/colloseum.jpg', p: '£400', quantity: '2', type: 'brick' },
];

const grabSet = document.querySelector('#set');
grabSet.addEventListener('click', handleSets);

const targetMain = document.querySelector('#main');

function filterDivs() {
  return bricks.find(bricks => bricks.type === 'set');
}

console.log(bricks.find(filterDivs));

function handleSets() {
  targetMain.classList.add('activateSet');
  // targetMain.textContent = filterDivs(bricks);
}

// filter by brick
const grabBrick = document.querySelector('#OverallBrk');
grabBrick.addEventListener('click', handleByBrick);

function handleByBrick() {
  targetMain.classList.add('activateBrick');
  targetMain.textContent = bricks.find(bricks => bricks.type === 'brick');
  const createImageElem = document.createElement('img');
  createImageElem.src = `${bricks.img}`;
  createImageElem.alt = `brick for sale with the id of ${bricks.id}`;
  targetMain.appendChild(createImageElem);
  const name = document.createElement('p');
  name.textContent = `${bricks.name}`;
  targetMain.appendChild(name);
  console.log(name);
}


// filter by colour

const handleElem = document.querySelector('#colourFilter');
handleElem.addEventListener('click', handleColour);

function handleColour() {
  const grabColour = document.querySelector('#colourFilter');
  targetMain.classList.add('activateColour');
  // targetMain.textContent = grabColour.value;
  if (grabColour.value === 'red') {
    targetMain.textContent = '';
    const createImage = document.createElement('img');
    createImage.src = bricks.find(bricks => bricks.colour === 'red').img;
    createImage.alt = `red brick with the id of ${bricks.id}`;
    createImage.classList.add('brickable');
    targetMain.appendChild(createImage);
    const writeName = document.createElement('p');
    writeName.textContent = bricks.find(bricks => bricks.colour === 'red').name;
    targetMain.appendChild(writeName);
  } else if (grabColour.value === 'blue') {
    targetMain.textContent = '';
    const createImage = document.createElement('img');
    createImage.src = bricks.find(bricks => bricks.colour === 'blue').img;
    createImage.alt = `blue brick with the id of ${bricks.id}`;
    createImage.classList.add('brickable');
    targetMain.appendChild(createImage);
    const writeName = document.createElement('p');
    writeName.textContent = bricks.find(bricks => bricks.colour === 'blue').name;
    targetMain.appendChild(writeName);
  } else if (grabColour.value === 'yellow') {
    targetMain.textContent = '';
    const yellowBrickImg = document.createElement('img');
    yellowBrickImg.src = bricks.find(bricks => bricks.colour === 'yellow').img;
    yellowBrickImg.alt = `yellow brick with the id of ${bricks.id}`;
    yellowBrickImg.classList.add('brickable');
    targetMain.appendChild(yellowBrickImg);
    const writeName = document.createElement('p');
    writeName.textContent = bricks.find(bricks => bricks.colour === 'yellow').name;
    targetMain.appendChild(writeName);
  } else if (grabColour.value === 'green') {
    targetMain.textContent = '';
    const greenBrickImg = document.createElement('img');
    greenBrickImg.src = bricks.find(bricks => bricks.colour === 'green').img;
    greenBrickImg.alt = `green brick with the id of ${bricks.id}`;
    greenBrickImg.classList.add('brickable');
    targetMain.appendChild(greenBrickImg);
    const writeName = document.createElement('p');
    writeName.textContent = bricks.find(bricks => bricks.colour === 'green').name;
    targetMain.appendChild(writeName);
  } else if (grabColour.value === 'All colours') {
    targetMain.textContent = '';
    targetMain.textContent = bricks.find(bricks => bricks.colour === 'All Colours');
  } else if (grabColour.value === 'orange') {
    targetMain.textContent = '';
    targetMain.textContent = bricks.find(bricks => bricks.colour === 'orange');
  } else if (grabColour.value === 'pink') {
    targetMain.textContent = '';
    targetMain.textContent = bricks.find(bricks => bricks.colour === 'pink');
  } else if (grabColour.value === 'All Colour') {
    targetMain.textContent = targetMain;
  } if (grabColour === 'clicked') {
    return '';
  }
}
