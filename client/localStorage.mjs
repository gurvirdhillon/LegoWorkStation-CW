const targetBasket = document.querySelector('.showItems');
export async function addProductToCart(id) {
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
  const updateQuantity = document.querySelector('#quantity');
  updateQuantity.textContent = basketQty;
  const response = await fetch(`/api/brick?id=${id}`);
  const brick = await response.json();
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
    localStorage.removeItem(basketQty);
    targetBasket.removeChild(brickImage);
    targetBasket.removeChild(brickText);
    targetBasket.removeChild(price);
    targetBasket.removeChild(removeBtn);
    updateQuantity.textContent = basketQty;
  });
  localStorage.getItem(targetBasket);
  targetBasket.append(brickText, brickImage, price, removeBtn);
}

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
// window.location.reload the page once a value changes
const checkout = document.querySelector('#checkout');
checkout.addEventListener('click', handleCheckOut);

function handleCheckOut() {
  if (localStorage.getItem('basketQty') === '0') {
    const noItems = document.querySelector('.showItems');
    noItems.textContent = 'Your basket is empty!';
  } else {
    window.location.href = './information.html';
  } if (localStorage.getItem('basketQty') === '0') {
    const noItems = document.querySelector('.showItems');
    noItems.textContent = 'Your basket is empty!';
  }
}
