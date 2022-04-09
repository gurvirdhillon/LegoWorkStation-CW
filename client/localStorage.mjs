// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.
// import { sqlite } from 'sqlite';
// import { uuid } from 'uuid';
import { bricks } from './filterEvents.js';
console.log(bricks);

const tempBasket = {};
console.log(tempBasket);

export async function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  let basketQty = JSON.parse(localStorage.getItem('basketQty'));
  localStorage.setItem('basketQty', basketQty += 1);
  // for (let i = 0; i < bricks.length; i++) {
  //   if (bricks[i].id === bricks.id) {
  //     console.log(bricks[i]);
  //     localStorage.setItem(id);
  //   }
  // }
  const updateQuantity = document.querySelector('#quantity');
  updateQuantity.textContent = basketQty;
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
    localStorage.getItem('basketQty', id);
    // localStorage.removeItem(basketQty - 1);
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

async function init() {
  // const db = await sqlite.open('mydb.sqlite', { verbose: true });
  // await db.migrate({ migrationsPath: './migrations.sqlite' });
}

const dbConnect = init();

export async function getLegoBricks() {
  const db = await dbConnect();
  return db.all('SELECT * FROM legos ORDER BY id DESC LIMIT 10');
}
