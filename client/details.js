async function init() {
  let brickId = window.location.search;
  brickId = brickId.slice(1);
  brickId = brickId.split('=');
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
  // handleSubmit();
}
// const subBtn = document.querySelector('#subBtn');
// subBtn.addEventListener('click', handleSubmit);

// function handleSubmit() {
//   if (subBtn === 'submit') {
//     window.location.href = '/confirmation.html';
//   }
// }


window.addEventListener('load', init);
