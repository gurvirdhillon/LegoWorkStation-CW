// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.
// import sqlite from 'sqlite';
// import uuid from 'uuid';

export async function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  let prodNo = localStorage.getItem(id);
  prodNo = parseInt(prodNo);
  if (prodNo) {
    localStorage.setItem(id, 1 + prodNo);
    document.querySelector('#quantity').textContent = prodNo + 1;
  } else {
    localStorage.setItem(id, 1);
    document.querySelector('#quantity').textContent += 1;
  }
  // code extracted from Sampaio, T. (2022). JavaScript Shopping Cart Tutorial - Part 2/5.
  // Youtube.com. Retrieved from https://www.youtube.com/watch?v=PoTGs38DR9E.
  const response = await fetch(`/api/brick?id=${id}`);
  const brick = await response.json();
  const brickImage = document.createElement('img');
  brickImage.classList = 'BrickBasket';
  brickImage.src = `${brick.img}`;
  brickImage.alt = 'Your Brick is ' + brick.name;
  const brickText = document.createElement('p');
  brickText.textContent = `${brick.name}`;
  const price = document.createElement('p');
  price.textContent = `${brick.p}`;
  price.classList = 'price';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove item';
  removeBtn.classList = 'removeBtn';
  removeBtn.addEventListener('click', () => {
    localStorage.removeItem(id);
    targetBasket.removeChild(brickImage);
    targetBasket.removeChild(brickText);
    targetBasket.removeChild(price);
    targetBasket.removeChild(removeBtn);
  });
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

function onLoadCartNumbers(id) {
  const prodNo = localStorage.getItem(id);
  if (prodNo) {
    document.querySelector('#quantity').textContent = prodNo;
  }
}

window.addEventListener('click', onLoadCartNumbers);

async function init() {
  const db = await sqlite.open('mydb.sqlite', { verbose: true });
  await db.migrate({ migrationsPath: './migrations.sqlite' });
}

const dbConnect = init();

export async function getLegoBricks() {
  const db = await dbConnect();
  return db.all('SELECT * FROM legos ORDER BY id DESC LIMIT 10');
}
