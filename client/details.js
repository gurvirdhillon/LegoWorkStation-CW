async function init() {
  let brickId = window.location.search;
  console.log(brickId);
  brickId = brickId.slice(1);
  brickId = brickId.split('=');
  brickId = brickId[1];
  const response = await fetch(`/api/brick?ProductId=${brickId}`);
  const brickDetails = await response.json();
  // console.log(brickDetails);
  const title = document.querySelector('#productTitle');
  title.textContent = brickDetails.ProductName;
  const imagePlace = document.querySelector('#imageId');
  imagePlace.src = `${brickDetails.ProductImage}`;
  imagePlace.classList.add('brickImage');
  const colour = document.querySelector('#colourSpan');
  colour.textContent = `colour: ${brickDetails.Colour}`;
  const price = document.querySelector('#price');
  price.textContent = `${brickDetails.ProductPrice}`;
}

window.addEventListener('load', init);
