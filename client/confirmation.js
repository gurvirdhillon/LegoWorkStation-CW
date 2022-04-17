const grabConfirmedOrder = document.querySelector('#contain-order');
grabConfirmedOrder.addEventListener('load', loadConfirmedItems);

async function loadConfirmedItems() {
  const response = await fetch(`/api/brick?id=${id}`);
  const bricks = await response.json();
  console.log(bricks);
}
