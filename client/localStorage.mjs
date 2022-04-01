// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.

export async function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  const addProd = document.querySelectorAll('.btnElem');
  console.log(addProd);
  let prodNo = localStorage.getItem(id);
  prodNo = parseInt(prodNo);
  console.log({ id, prodNo });
  if (prodNo) {
    localStorage.setItem(id, 1 + prodNo);
    document.querySelector('#quantity').textContent = prodNo + 1;
  } else {
    localStorage.setItem(`${id}`, 1);
    document.querySelector('#quantity').textContent = prodNo + 1;
  }
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
  removeBtn.classList = `removeBtn=${id}`;
  removeBtn.addEventListener('click', () => {
    localStorage.removeItem(id);
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
}

function clearItems() {

}

window.addEventListener('load', clearItems);

// create a function that, given an array of IDs, clean's the shopping basket part of the page and fills it with the products specified in the array
// when I click the button "add to basket", you add the ID to the array, and call the above function
// the array wants to be a global variable somewhere


// export the function that will do some storage (handle the click on the button)
// inside createDivs.mjs import that function and add it as an eventListener when creating the buttons

// attaching music to a button so when checkout is clicked music begins

// const playMusic = document.querySelector('#checkout');
// playMusic.addEventListener('click', play);

// function play() {
//   const audio = document.querySelector('#audio');
//   audio.play();
// }

/* code extracted from:
Karahanidi, A., & Elton, D. (2021). Javascript Audio Play on click.
Retrieved from https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
edited according to own requirements
*/
