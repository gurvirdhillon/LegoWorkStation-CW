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
  const brick = document.querySelector('.brickable');
  const createBtn = document.createElement('button');
  createBtn.textContent = 'View details';
  createBtn.classList.add('viewMe');
  where.append(createBtn);
  createBtn.addEventListener('click', detailsHandler);
  brick.addEventListener('click', detailsHandler);
}

function detailsHandler(event) {
  const id = event.target.parentElement.id;
  window.location = `details.html?brick=${id}`;
}

window.addEventListener('load', loadFunctions);
