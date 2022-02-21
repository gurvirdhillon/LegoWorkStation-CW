async function init() {
  let brickId = window.location.search;
  brickId = brickId.slice(1);
  brickId = brickId.split('=');
  brickId = brickId[1];
  const response = await fetch(`/api/brick?id=${brickId}`);
  const brickDetails = await response.json();
  console.log(brickDetails);
}
window.addEventListener('load', init);
