const targetBasket = document.querySelector('.showItems');

const cart = [];

export async function addProductToCart(e) {
  const response = await fetch('/api/bricks');
  const bricks = await response.json();
  console.log(bricks);
  const targetId = e.target.parentElement.id;
  for (const brick of bricks) {
    if (brick.id == targetId) {
      brick.count += 1;
      cart.push(brick);
      window.localStorage.setItem('basket', JSON.stringify(cart));
      createBricksForStoring();
      grabQuantity();
    }
  }
}

function createBricksForStoring() {
  const localStorageBricks = JSON.parse(window.localStorage.getItem('basket'));
  for (const brick of localStorageBricks) {
    console.log(brick.id);
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
}

window.addEventListener('load', createBricksForStoring);

function grabQuantity() {
  let updateQty = 0;
  const updateHandler = document.querySelector('#quantity');
  const LegoStore = JSON.parse(window.localStorage.getItem('basket'));
  if (updateHandler == null) {
    updateHandler.textContent = 0;
  } else {
    for (const lego of LegoStore) {
      updateQty += Number(lego.count);
      updateHandler.textContent = updateQty;
    }
  }
}

window.addEventListener('load', grabQuantity);

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
