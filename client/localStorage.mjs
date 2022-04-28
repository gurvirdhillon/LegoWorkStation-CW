const targetBasket = document.querySelector('.showItems');

let cart = [];
const checkCart = JSON.parse(window.localStorage.getItem('basket'));
if (checkCart != null) {
  cart = checkCart;
}

export async function addProductToCart(e) {
  const response = await fetch('/api/bricks');
  const bricks = await response.json();
  // console.log(bricks);
  const targetId = e.target.parentElement.id;
  for (const brick of bricks) {
    if (brick.ProductId === targetId) {
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
  // for (const brick of localStorageBricks) {
  //   console.log(localStorageBricks);
  //   console.log(brick.id);
  if (localStorageBricks == null) return;
  targetBasket.textContent = '';
  for (const brick of localStorageBricks) {
    const createTag = document.createElement('p');
    createTag.textContent = brick.ProductName;
    targetBasket.append(createTag);
    const price = document.createElement('p');
    price.textContent = brick.ProductPrice;
    targetBasket.append(price);
    const brickImage = document.createElement('img');
    brickImage.src = brick.ProductImage;
    brickImage.alt = 'Your brick is' + brick.ProductName;
    brickImage.classList = 'BrickBasket';
    targetBasket.append(brickImage);
  }
}

window.addEventListener('load', createBricksForStoring);

function grabQuantity() {
  // const updateQty = 0;
  const updateHandler = document.querySelector('#quantity');
  const LegoStore = JSON.parse(window.localStorage.getItem('basket'));
  if (updateHandler == null) {
    updateHandler.textContent = 0;
  } else if (LegoStore != null) {
    updateHandler.textContent = LegoStore.length;
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
  localStorage.setItem('basket', 0);
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
  if (showItems.textContent === '') {
    alert('Your basket is empty');
  } else {
    window.location.href = '/confirmation.html';
  }
}

function itemsPurchased() {
  const itemsPurchased = JSON.parse(localStorage.getItem('productsInBasket'));
  localStorage.setItem('productsBrought', JSON.stringify(itemsPurchased));
  for (const items of itemsPurchased) {
    console.log(items.id, items.count);
  }
}

async function updateStock() {
  const broughtItems = JSON.parse(localStorage.getItem('basket'));
  localStorage.setItem('productsInBasket', JSON.stringify(broughtItems));
  // console.log(localStorage.getItem('basket'));
  console.log(broughtItems);
  for (const cart of broughtItems) {
    const payload = {
      productId: cart.ProductId,
      quantity: cart.count,
    };
    console.log('Payload', payload);

    const response = await fetch('/api/bricks/purchasedItems', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const brickResponse = await response.json();
      console.log('successfully sent to', createBricksForStoring);
    } else {
      console.log('failed to send to cart', createBricksForStoring);
    }
  }
}

updateStock();
