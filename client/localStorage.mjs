// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.

window.jacekAdd = addProductToCart;


export async function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  const addProd = document.querySelectorAll('.btnElem');
  for (let i = 0; i < addProd.length; i++) {
    addProd[i].addEventListener('click', () => {
      let prodNo = localStorage.getItem('addProductToCart');
      prodNo = parseInt(prodNo);
      if (prodNo) {
        localStorage.setItem(`Lego${id}`, id + 1);
        document.querySelector('#quantity').textContent = prodNo + 1;
      } else {
        localStorage.setItem('addProductToCart', 1);
        document.querySelector('#quantity').textContent = prodNo + 1;
      }
      console.log(typeof prodNo);
      // code extracted from Sampaio, T. (2022). JavaScript Shopping Cart Tutorial - Part 2/5.
      // Youtube.com. Retrieved from https://www.youtube.com/watch?v=PoTGs38DR9E.
    });
  }
  const response = await fetch(`/api/brick?id=${id}`);
  const brick = await response.json();
  const brickImage = document.createElement('img');
  brickImage.classList = 'BrickBasket';
  brickImage.src = `${brick.img}`;
  brickImage.alt = 'Your Brick is ' + brick.name;
  // localStorage.setItem(`${brickImage}`);
  const brickText = document.createElement('p');
  brickText.textContent = `${brick.name}`;
  // localStorage.setItem(`${brickText}`);
  const price = document.createElement('p');
  price.textContent = `${brick.p}`;
  price.classList = 'price';
  // localStorage.setItem(`${price}`);
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove item';
  removeBtn.classList = 'removeBtn';
  removeBtn.addEventListener('click', () => {
    localStorage.removeItem(`${brick.id}`);

    targetBasket.removeChild(brickImage);
    targetBasket.removeChild(brickText);
    targetBasket.removeChild(price);
    targetBasket.removeChild(removeBtn);
  });
  targetBasket.append(brickText);
  targetBasket.append(brickImage);
  targetBasket.append(price);
  targetBasket.append(removeBtn);

  const showItems = document.querySelector('.showItems');
  if (showItems.children === 0) {
    const informUser = showItems.textContent = 'Your basket is empty';
    informUser.style.color = 'red';
    informUser.append(showItems);
  } else {
    return targetBasket;
  }
  // localStorage.setItem(id, JSON.stringify(brick));
  // console.log({ localStorage });
  addPrices();
  shoppingBasket(id);
}


// create a function that, given an array of IDs, clean's the shopping basket part of the page and fills it with the products specified in the array
// when I click the button "add to basket", you add the ID to the array, and call the above function
// the array wants to be a global variable somewhere

function shoppingBasket(id) {
  const clearItem = document.querySelectorAll('.showItems');
  clearItem.textContent = '';
  const clickBasket = document.querySelector('.btnElem', id);
  clickBasket.addEventListener('click', () => {
    localStorage.setItem(id);
  });
}

function addPrices() {
  const price = document.querySelector('.price');
  const totalDisplay = document.querySelector('#totalOut');
  price.textContent = totalDisplay;
  price.append(totalDisplay);
}

// export the function that will do some storage (handle the click on the button)
// inside createDivs.mjs import that function and add it as an eventListener when creating the buttons

// attaching music to a button so when checkout is clicked music begins

const playMusic = document.querySelector('#checkout');
playMusic.addEventListener('click', play);

function play() {
  const audio = document.querySelector('#audio');
  audio.play();
}

function init() {
}

window.addEventListener('load', init);

/* code extracted from:
 Karahanidi, A., & Elton, D. (2021). Javascript Audio Play on click.
 Retrieved from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
 edited according to own requirements */
