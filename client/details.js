async function init() {
  let brickId = window.location.search;
  console.log(brickId, '1');
  brickId = brickId.slice(1);
  console.log('slice', brickId);
  brickId = brickId.split('=');
  console.log('split', brickId);
  brickId = brickId[1];
  const response = await fetch(`/api/brick?id=${brickId}`);
  const brickDetails = await response.json();
  // console.log(brickDetails);
  const title = document.querySelector('#productTitle');
  title.textContent = brickDetails.name;
  const imagePlace = document.querySelector('#imageId');
  imagePlace.src = `${brickDetails.img}`;
  imagePlace.classList.add('brickImage');
  const colour = document.querySelector('#colourSpan');
  colour.textContent = `colour: ${brickDetails.colour}`;
  const price = document.querySelector('#price');
  price.textContent = `${brickDetails.p}`;
}

window.addEventListener('load', init);
