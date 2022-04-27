const targetBasket = document.querySelector('.showItems');
const grabQuantity = document.querySelector('#quantity');

const cart = [];

export async function addProductToCart(e) {
  const response = await fetch('/api/bricks');
  const bricks = await response.json();
  console.log(bricks);
  const targetId = e.target.parentElement.id;
  for (const brick of bricks) {
    if (brick.id == targetId) {
      cart.push(brick);
      window.localStorage.setItem('basket', JSON.stringify(cart));
      createBricksForStoring();
    }
  }
}

function createBricksForStoring() {
  const localStorageBricks = JSON.parse(window.localStorage.getItem('basket'));
  for (const brick of localStorageBricks) {
    console.log(brick.id);
  }
  if (localStorageBricks == null) return;
  for (const brick of localStorageBricks) {
    const createTag = document.createElement('p');
    createTag.textContent = brick.name;
    targetBasket.append(createTag);
    const price = document.createElement('p');
    price.textContent = brick.p;
    targetBasket.append(price);
    const brickImage = document.createElement('img');
    brickImage.src = brick.img;
    brickImage.alt = 'Your brick is' + brick.name;
    brickImage.classList = 'BrickBasket';
    targetBasket.append(brickImage);
  }
}

window.addEventListener('load', createBricksForStoring);

function subtractBrkQty(id) {
  const brk = localStorage.getItem('basketQty');
  if (brk === id) {
    localStorage.removeItem('basketQty' - 1);
    console.log(brk);
  }
}
subtractBrkQty();

const grabClear = document.querySelector('.clearMe');
grabClear.addEventListener('click', clearBasket);

function clearBasket() {
  const updateQty = document.querySelector('#quantity');
  updateQty.textContent = '0';
  targetBasket.textContent = '';
  localStorage.clear();
  localStorage.setItem('basketQty', 0);
}

function rememberQty() {
  // this function will remember the quantity of items in the basket when the page is refreshed
  let prodValues = localStorage.getItem('basketQty');
  prodValues = parseInt(prodValues);
  if (prodValues) {
    document.querySelector('#quantity').textContent = prodValues;
  }
}
rememberQty();

// const brickPara = document.querySelector('.BrickPara');

// function rememberText() {
//   // this function will remember the text of the items in the basket when the page is refreshed
//   localStorage.setItem('prodText', brickPara);
//   const brkProd = localStorage.getItem('prodText');
//   if (brkProd) {
//     targetBasket.textContent = brkProd.value;
//   }
// }
// rememberText();

// const obj = [name, price, img];

const grabCheckout = document.querySelector('#checkout');
grabCheckout.addEventListener('click', checkoutHandler);

function checkoutHandler() {
  const showItems = document.querySelector('.showItems');
  if (localStorage.getItem('basketQty') === '0' || showItems.textContent === '') {
    alert('Your basket is empty');
  } else {
    window.location.href = '/confirmation.html';
  }
}

function storeItems() {
  // this function will store items on your basket when refreshing the page
}
