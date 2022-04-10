// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.
// import { sqlite } from 'sqlite';
// import { uuid } from 'uuid';
// import { bricks } from './filterEvents.js';
// console.log(bricks);

const tempBasket = {};
console.log(tempBasket);

export async function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  let prodNo = localStorage.getItem(id);
  prodNo = parseInt(prodNo);
  let basketQty = JSON.parse(localStorage.getItem('basketQty'));
  localStorage.setItem('basketQty', basketQty += 1);
  if (prodNo) {
    // if the item is already in the cart, increment the quantity
    localStorage.setItem(id, 1 + prodNo);
    document.querySelector('#quantity').textContent = prodNo + 1;
  } else {
    localStorage.setItem(id, 1);
    document.querySelector('#quantity').textContent = 1;
  }

  // code extracted from Sampaio, T. (2022). JavaScript Shopping Cart Tutorial - Part 2/5.
  // Youtube.com. Retrieved from https://www.youtube.com/watch?v=PoTGs38DR9E.

  const updateQuantity = document.querySelector('#quantity');
  updateQuantity.textContent = basketQty;

  const response = await fetch(`/api/brick?id=${id}`);
  const brick = await response.json();
  const makeParent = document.createElement('div');
  makeParent.append(brick.name);
  makeParent.append(brick.price);
  makeParent.append(brick.removeBtn);
  const brickImage = document.createElement('img');
  brickImage.id = `brickImg${id}`;
  brickImage.classList = 'BrickBasket';
  brickImage.src = `${brick.img}`;
  brickImage.alt = 'Your Brick is ' + brick.name;
  const brickText = document.createElement('p');
  brickText.id = `brickText${id}`;
  brickText.classList = 'BrickPara';
  brickText.textContent = `${brick.name}`;
  const price = document.createElement('p');
  price.id = `price${id}`;
  price.textContent = `${brick.p}`;
  price.classList = 'price';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove item';
  removeBtn.classList = 'removeBtn';
  removeBtn.addEventListener('click', () => {
    localStorage.getItem('basketQty', id);
    localStorage.removeItem(id);
    localStorage.removeItem('basketQty');
    targetBasket.removeChild(brickImage);
    targetBasket.removeChild(brickText);
    targetBasket.removeChild(price);
    targetBasket.removeChild(removeBtn);
    updateQuantity.textContent = basketQty;
  });
  localStorage.getItem(targetBasket);
  targetBasket.append(brickText);
  targetBasket.append(brickImage);
  targetBasket.append(price);
  targetBasket.append(removeBtn);
}

const clearBasket = document.querySelector('.clearMe');
clearBasket.addEventListener('click', clearItems);

function clearItems() {
  const targetRemoveArea = document.querySelector('.showItems');
  targetRemoveArea.textContent = '';
  localStorage.clear();
  const targetQuantity = document.querySelector('#quantity');
  targetQuantity.textContent = 0;
}

// this function remembers the quantities placed within the basket
function rememberQty() {
  let prodValues = localStorage.getItem('basketQty');
  prodValues = parseInt(prodValues);
  if (prodValues) {
    document.querySelector('#quantity').textContent = prodValues;
  } else {
    document.querySelector('#quantity').textContent = 0;
  }
}

rememberQty();

async function init() {
  // const db = await sqlite.open('mydb.sqlite', { verbose: true });
  // await db.migrate({ migrationsPath: './migrations.sqlite' });
}

const dbConnect = init();

export async function getLegoBricks() {
  const db = await dbConnect();
  return db.all('SELECT * FROM legos ORDER BY id DESC LIMIT 10');
}
