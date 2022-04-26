
// async function fetchProducts() {
//   const response = await fetch('/api/bricks');
//   if (response.ok) {
//     const data = await response.json();
//     console.log(data);
//   } else {
//     console.log('not working');
//   }
// }

async function init(ProductID) {
  let brickId = window.location.search;
  console.log(brickId);
  // console.log(id);
  brickId = brickId.slice(1);
  brickId = brickId.split('=');
  ProductID = brickId[1];
  // const response1 = await fetch(`/api/brick?id=${ProductID}`);
  const response1 = await fetch(`/api/brick/:${ProductID}`);
  const brickDetails = await response1.json();
  // console.log(brickDetails);
  const title = document.querySelector('#productTitle');
  title.textContent = `${brickDetails.ProductName}`;
  const imagePlace = document.querySelector('#imageId');
  imagePlace.src = `${brickDetails.ProductImage}`;
  imagePlace.classList.add('brickImage');
  const colour = document.querySelector('#colourSpan');
  colour.textContent = `colour: ${brickDetails.Colour}`;
  const price = document.querySelector('#price');
  price.textContent = `${brickDetails.ProductPrice}`;
}
init();

// window.addEventListener('load', init);
