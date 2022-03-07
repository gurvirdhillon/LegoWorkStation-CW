// event listener that is triggered when a button is clicked.
// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.


export function addProductToCart(id) {
  const targetBasket = document.querySelector('.showItems');
  targetBasket.textContent = id;
}


function init() {
}

window.addEventListener('load', init);


// export the function that will do some storage (handle the click on the button)
// inside createDivs.mjs import that function and add it as an eventListener when creating the buttons
