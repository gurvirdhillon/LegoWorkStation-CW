const targetBasket = document.querySelector('.showItems');
console.log(targetBasket);

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
    }
  }

  const localStorageBricks = JSON.parse(window.localStorage.getItem('basket'));
  for (const brick of localStorageBricks) {
    console.log(brick.id);
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
  // if previous basket item has a value
  // set temp basket to a prev basket item, push new brick
  // if previous basket item is empty or doesnt exist it will push the first product into the temporary array.
  // json stringify in between both temporary arrays.

  // let prevBasketItem = localStorage.getItem('basket');
  // prevBasketItem = JSON.parse(prevBasketItem);
  // // if (prevBasketItem === prevBasketItem.value) {
  //   let tempBasket = [];
  //   tempBasket = prevBasketItem;
  //   tempBasket.push(brick);
  //   JSON.stringify(tempBasket);
  //   localStorage.setItem('basket', JSON.stringify(tempBasket));
  // }

  // console.log(typeof brick);
  // const brickImage = document.createElement('img');
  // brickImage.id = `brickImg${id}`;
  // brickImage.classList = 'BrickBasket';
  // brickImage.src = `${brick.img}`;
  // brickImage.alt = 'Your Brick is ' + brick.name;
  // const brickText = document.createElement('p');
  // brickText.id = `brickText${id}`;
  // brickText.classList = 'BrickPara';
  // brickText.textContent = `${brick.name}`;
  // const price = document.createElement('p');
  // price.id = `price${id}`;
  // price.textContent = `${brick.p}`;
  // price.classList = 'price';
  // const removeBtn = document.createElement('button');
  // removeBtn.textContent = 'Remove item';
  // removeBtn.classList = 'removeBtn';
  // removeBtn.addEventListener('click', () => {
  //   localStorage.getItem('basketQty', id);
  //   localStorage.removeItem(id);
  //   localStorage.removeItem(basketQty);
  //   targetBasket.removeChild(brickImage);
  //   targetBasket.removeChild(brickText);
  //   targetBasket.removeChild(price);
  //   targetBasket.removeChild(removeBtn);
  // });
  // targetBasket.append(brickText, brickImage, price, removeBtn);
}

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
