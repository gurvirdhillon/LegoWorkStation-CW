// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.

export async function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  const response = await fetch(`/api/brick?id=${id}`);
  const brick = await response.json();
  const brickImage = document.createElement('img');
  brickImage.classList = 'BrickBasket';
  brickImage.src = `${brick.img}`;
  brickImage.alt = 'Your Brick is ' + brick.name;
  localStorage.getItem(`${brickImage}`);
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
    localStorage.removeItem(`${brick.name}`);
    localStorage.removeItem(`${brick.p}`);
    localStorage.removeItem(`${brick.img}`);

    targetBasket.removeChild(brickImage);
    targetBasket.removeChild(brickText);
    targetBasket.removeChild(price);
    targetBasket.removeChild(removeBtn);
  });
  targetBasket.append(brickText);
  targetBasket.append(brickImage);
  targetBasket.append(price);
  targetBasket.append(removeBtn);
  for (const elem of bricks) {
    const parentBrick = document.createElement('div');
    parentBrick.textContent = 'hello';
    parentBrick.classList.add('parentItem');
    parentBrick.id = `${elem.id}`;
    targetBasket.appendChild(parentBrick);
    brickImage(parentBrick, elem);
    brickText(parentBrick, elem);
    price(parentBrick, elem);
  }
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
  countBtnClick();
  addPrices();
}

function countBtnClick() {
  document.querySelector('.btnElem').addEventListener('click', () => {
    const count = document.querySelector('#quantity');
    count.textContent = parseInt(count.textContent) + 1;
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
