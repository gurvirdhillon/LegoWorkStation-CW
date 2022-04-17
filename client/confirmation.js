function soundEffect() {
  const audio = document.querySelector('#audio');
  audio.play();
}

window.addEventListener('load', soundEffect);

const container = document.querySelector('#contain-order');
container.addEventListener('load', displayReciept);

async function displayReciept() {
  const grabContent = await fetch('/api/brick/showItems');
  const response = await grabContent.json();
  const makeImg = document.createElement('img');
  makeImg.src = `${response.img}`;
  makeImg.alt = 'The Brick you have purchased is ' + response.name;
  const makeText = document.createElement('p');
  makeText.textContent = `${response.name}`;
  const makePrice = document.createElement('p');
  makePrice.textContent = `${response.p}`;
  container.append(makeImg, makeText, makePrice);
}
