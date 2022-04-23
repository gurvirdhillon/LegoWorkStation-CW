const targetBasket = document.querySelector('.showItems');

export async function addProductToCart(ProductId) {
  let prodNo = localStorage.getItem(ProductId);
  prodNo = parseInt(prodNo);
  let basketQty = JSON.parse(localStorage.getItem('basketQty'));
  localStorage.setItem('basketQty', basketQty += 1);
  if (prodNo) {
    // if the item is already in the cart, increment the quantity
    localStorage.setItem(ProductId, 1 + prodNo);
    document.querySelector('#quantity').textContent = prodNo + 1;
  } else {
    localStorage.setItem(ProductId, 1);
    document.querySelector('#quantity').textContent = 1;
  }
  const updateQuantity = document.querySelector('#quantity');
  updateQuantity.textContent = basketQty;
  const response = await fetch(`/api/brick?ProductId=${ProductId}`);
  const brick = await response.json();
  const brickImage = document.createElement('img');
  brickImage.id = `brickImg${ProductId}`;
  brickImage.classList = 'BrickBasket';
  brickImage.src = `${brick.ProductImage}`;
  brickImage.alt = 'Your Brick is ' + brick.ProductName;
  const brickText = document.createElement('p');
  brickText.id = `brickText${ProductId}`;
  brickText.classList = 'BrickPara';
  brickText.textContent = `${brick.ProductName}`;
  const price = document.createElement('p');
  price.id = `price${ProductId}`;
  price.textContent = `${brick.ProductPrice}`;
  price.classList = 'price';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove item';
  removeBtn.classList = 'removeBtn';
  removeBtn.addEventListener('click', () => {
    localStorage.getItem('basketQty', ProductId);
    localStorage.removeItem(ProductId);
    localStorage.removeItem(basketQty);
    targetBasket.removeChild(brickImage);
    targetBasket.removeChild(brickText);
    targetBasket.removeChild(price);
    targetBasket.removeChild(removeBtn);
  });
  targetBasket.append(brickText, brickImage, price, removeBtn);
}

function subtractBrkQty(ProductId) {
  const brk = localStorage.getItem('basketQty');
  if (brk === ProductId) {
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

const brickPara = document.querySelector('.BrickPara');

function rememberText() {
  // this function will remember the text of the items in the basket when the page is refreshed
  localStorage.setItem('prodText', brickPara);
  const brkProd = localStorage.getItem('prodText');
  if (brkProd) {
    targetBasket.textContent = brkProd.value;
  }
}
rememberText();

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
