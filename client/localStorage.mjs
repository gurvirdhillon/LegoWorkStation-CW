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
  targetBasket.innerHTML = '';
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
// }

window.addEventListener('load', createBricksForStoring);

function grabQuantity() {
  const updateQty = 0;
  const updateHandler = document.querySelector('#quantity');
  const LegoStore = JSON.parse(window.localStorage.getItem('basket'));
  if (updateHandler == null) {
    updateHandler.textContent = 0;
  } else if (LegoStore != null) {
    updateHandler.textContent = LegoStore.length;
    // for (const lego of LegoStore) {
    //   updateQty += Number(lego.count);
    //   updateHandler.textContent = updateQty;
    // }
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
grabCheckout.addEventListener('click', handleCheckout);

function handleCheckout() {
  if (localStorage.getItem('basket') === 0 || targetBasket.textContent === 0) {
    alert('Your basket is empty, please add something!');
  } else {
    window.location.href = '/confirmation.html';
  }
}
