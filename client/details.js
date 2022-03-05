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
}
window.addEventListener('load', init);

// const targetNavGuide = document.querySelector('.navigationGuide');

// function makeNavigationMenu(NavMe = 3) {
//   for (let i = 0; i < NavMe; i++) {
//     const navigationButton = document.createElement('nav');
//     navigationButton.textContent = `hello${i}`;
//     targetNavGuide.append(navigationButton);
//   }
// }

// window.addEventListener('load', makeNavigationMenu);
