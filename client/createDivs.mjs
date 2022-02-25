function makeDiv(data) {
  const main = document.querySelector('#main');
  for (const row of data) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('legoHolder');
    createDiv.id = `${row.id}`;
    main.appendChild(createDiv);
    imagePlacer(createDiv, row);
    getAddButton(createDiv, row);
    giveName(createDiv, row);
    getPriceAndDescription(createDiv, row);
    getQuantity(createDiv, row);
    makeViewDetails(createDiv, row);
  }
}

function imagePlacer(where, what) {
  const getImage = document.createElement('img');
  getImage.src = what.img;
  getImage.alt = 'lego-brick';
  getImage.classList.add('brickable');
  where.append(getImage);
}

// this makes the + button
function getAddButton(where) {
  const getBtn = document.createElement('button');
  getBtn.textContent = 'Add to basket';
  getBtn.classList.add('btnElem');
  where.append(getBtn);
}

function getPriceAndDescription(where, what) {
  const getPrice = document.createElement('p');
  getPrice.textContent = what.p;
  where.append(getPrice);
}

function getQuantity(where, what) {
  const createQuantity = document.createElement('p');
  createQuantity.textContent = `Number of items in stock: ${what.quantity}`;
  createQuantity.classList.add('quant');
  where.append(createQuantity);
}

function giveName(where, what) {
  const createName = document.createElement('h3');
  createName.textContent = `${what.name}`;
  where.append(createName);
}

async function loadFunctions() {
  const response = await fetch('/api/bricks');
  const db = await response.json();
  // console.log(data);
  // const db = JSON.parse(data);
  makeDiv(db);
}

function makeViewDetails(where) {
  const createBtn = document.createElement('button');
  createBtn.textContent = 'View details';
  createBtn.classList.add('viewMe');
  where.append(createBtn);
  createBtn.addEventListener('click', detailsHandler);
}

function detailsHandler(event) {
  const id = event.target.parentElement.id;
  window.location = `details.html?brick=${id}`;
}

const targetLocation = document.querySelector('#basketToggle');
const targetBasket = document.querySelector('#btn1');
targetBasket.addEventListener('click', addToBasket);

function addToBasket(event) {
  // something similar to details handler.
  const DivMade = document.createElement('div');
  DivMade.textContent = 'hello';
  targetLocation.body.append(DivMade);
}

const btn1 = document.querySelector('#btn1');
const basketHolder = document.querySelector('#basketToggle');

btn1.addEventListener('click', (e) =>{
  const openBasket = basketHolder.textContent.cloneNode(true);
  document.body.append(openBasket);
});


window.addEventListener('load', loadFunctions);

// const db2 = [
//   { id: 'brk16', name: 'blue 2 by 2 brick', colour: 'blue', x: 2, y: 2, img: 'https://static.turbosquid.com/Preview/2019/05/23__08_00_58/Lego_Brick_2x2_Dark_Azur_thumbnail_Square_0000.jpgADD1F740-B5A1-4226-9FEE-6E6F7DCA2FE6Large.jpg', p: '£', quantity: '40' },
//   { id: 'brk17', name: 'cabinet brick', colour: 'blue', x: 2, y: 2, img: 'https://www.lego.com/cdn/cs/set/assets/blt1b165be7adfb300f/5005403_alt2.jpg', p: '£0.50', quantity: '40' },
//   { id: 'brk18', name: '', colour: '', x: 2, y: 2, img: '', p: '£', quantity: '' },
// ];
