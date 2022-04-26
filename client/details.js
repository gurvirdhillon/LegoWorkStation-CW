async function init(ProductID) {
  const response1 = await fetch(`/api/bricks/:${ProductID}`);
  let brickId = window.location.search;
  console.log(brickId);
  // console.log(id);
  brickId = brickId.slice(1);
  brickId = brickId.split('=');
  ProductID = brickId[1];
  // const response1 = await fetch(`/api/brick?id=${ProductID}`);
  const brickDetails = await response1.json();
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
// init();

window.addEventListener('load', init);
