import { addProductToCart } from './localStorage.mjs';
// import { makeElems } from './localStorage.mjs';

function makeDiv(data) {
  const main = document.querySelector('#main');
  for (const row of data) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('legoHolder');
    createDiv.id = `${row.ProductId}`;
    main.appendChild(createDiv);
    imagePlacer(createDiv, row);
    giveName(createDiv, row);
    getPriceAndDescription(createDiv, row);
    getAddButton(createDiv, row);
    getQuantity(createDiv, row);
    makeViewDetails(createDiv, row);
  }
}

function imagePlacer(where, what) {
  const getImage = document.createElement('img');
  getImage.src = `${what.ProductImage}`;
  getImage.alt = 'lego-brick';
  getImage.classList.add('brickable');
  where.append(getImage);
}

// this makes the + button
export function getAddButton(where) {
  const getBtn = document.createElement('button');
  getBtn.textContent = 'Add to basket';
  getBtn.className = 'btnElem';
  where.append(getBtn);
  getBtn.addEventListener('click', () => {
    console.log(getBtn.parentElement.id);
    // const brickId = parseInt(getBtn.parentElement.id);
    const brickId = getBtn.parentElement.id;
    addProductToCart(brickId);
    // console.log(getBtn.parentElement.id)
  });
}

// function addBasketQty() {
//   let basketQty = JSON.parse(localStorage.getItem('basketQty'));
//   localStorage.setItem('basketQty', basketQty += 1);
// }

function getPriceAndDescription(where, what) {
  const getPrice = document.createElement('p');
  getPrice.textContent = `£${what.ProductPrice}`;
  where.append(getPrice);
}

function getQuantity(where, what) {
  const createQuantity = document.createElement('p');
  createQuantity.textContent = `Number of items in stock: ${what.Quantity}`;
  createQuantity.classList.add('quant');
  where.append(createQuantity);
}

function giveName(where, what) {
  const createName = document.createElement('h3');
  createName.textContent = `${what.ProductName}`;
  where.append(createName);
}

export async function loadFunctions() {
  const response = await fetch('/api/bricks');
  const db = await response.json();
  makeDiv(db);
}

function makeViewDetails(where) {
  // const brick = document.querySelector('.brickable');
  const createBtn = document.createElement('button');
  createBtn.textContent = 'View details';
  createBtn.classList.add('viewMe');
  where.append(createBtn);
  createBtn.addEventListener('click', detailsHandler);
}

function detailsHandler(event) {
  const ProductID = event.target.parentElement.id;
  window.location = `details.html?brick=${ProductID}`;
}

window.addEventListener('load', loadFunctions);
