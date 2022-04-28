const grabSet = document.querySelector('#set');
grabSet.addEventListener('click', handleSets);

const targetMain = document.querySelector('#main');

// // console.log(bricks.find(filterDivs));

async function handleSets() {
  let bricks = await fetch('/api/bricks');
  bricks = await bricks.json();
  targetMain.classList.add('activateSet');
  for (const brick of bricks) {
    console.log(bricks);
    if (brick.type === 'set') {
      targetMain.textContent = JSON.stringify(bricks.find(bricks => bricks.type === 'set'));
      const createImageElem = document.createElement('img');
      createImageElem.src = `${bricks.img}`;
      createImageElem.alt = `set for sale with the id of ${bricks.id}`;
      targetMain.appendChild(createImageElem);
      const name = document.createElement('p');
      name.textContent = `${bricks.name}`;
      targetMain.appendChild(name);
    }
  }
}

// filter by brick
const grabBrick = document.querySelector('#OverallBrk');
grabBrick.addEventListener('click', handleByBrick);

async function handleByBrick() {
  let bricks = await fetch('/api/bricks');
  bricks = await bricks.json();
  targetMain.classList.add('activateBrick');
  targetMain.textContent = bricks.find(bricks => bricks.type === 'brick');
  const createImageElem = document.createElement('img');
  createImageElem.src = `${bricks.img}`;
  createImageElem.alt = `brick for sale with the id of ${bricks.id}`;
  targetMain.appendChild(createImageElem);
  const name = document.createElement('p');
  name.textContent = `${bricks.name}`;
  targetMain.appendChild(name);
  console.log(name);
}

// filter by colour

const handleElem = document.querySelector('#colourFilter');
handleElem.addEventListener('click', handleColour);

async function handleColour() {
  let bricks = await fetch('/api/bricks');
  bricks = await bricks.json();
  const grabColour = document.querySelector('#colourFilter');
  targetMain.classList.add('activateColour');
  // targetMain.textContent = grabColour.value;
  if (grabColour.value === 'All colours') {
    targetMain.textContent = '';
    for (const brick of bricks) {
      if (brick.colour === 'All') {
        const createImage = document.createElement('img');
        JSON.stringify(bricks);
        createImage.src = `${bricks.find(bricks => bricks.colour === 'All').img}`;
        createImage.alt = `red brick with the id of ${bricks.id}`;
        createImage.classList.add('brickable');
        targetMain.appendChild(createImage);
        const writeName = document.createElement('p');
        writeName.textContent = bricks.find(bricks => bricks.colour === 'All').name;
        targetMain.appendChild(writeName);
      }
    }
  } else if (grabColour.value === 'red') {
    targetMain.textContent = '';
    for (const brick of bricks) {
      if (brick.colour === 'red') {
        const createImage = document.createElement('img');
        createImage.src = `${bricks.find(bricks => bricks.colour === 'red').img}`;
        createImage.alt = `red brick with the id of ${bricks.id}`;
        createImage.classList.add('brickable');
        targetMain.appendChild(createImage);
        const writeName = document.createElement('p');
        writeName.textContent = bricks.find(bricks => bricks.colour === 'red').name;
        targetMain.appendChild(writeName);
      }
    }
  } else if (grabColour.value === 'blue') {
    for (const brick of bricks) {
      if (brick.colour === 'red') {
        console.log(brick);
        targetMain.textContent = '';
        const createImage = document.createElement('img');
        createImage.src = bricks.find(bricks => bricks.colour === 'blue').img;
        createImage.alt = `blue brick with the id of ${bricks.id}`;
        createImage.classList.add('brickable');
        targetMain.appendChild(createImage);
        const writeName = document.createElement('p');
        writeName.textContent = bricks.find(bricks => bricks.colour === 'blue').name;
        targetMain.appendChild(writeName);
      }
    }
  } else if (grabColour.value === 'yellow') {
    targetMain.textContent = '';
    const yellowBrickImg = document.createElement('img');
    yellowBrickImg.src = bricks.find(bricks => bricks.colour === 'yellow').img;
    yellowBrickImg.alt = `yellow brick with the id of ${bricks.id}`;
    yellowBrickImg.classList.add('brickable');
    targetMain.appendChild(yellowBrickImg);
    const writeName = document.createElement('p');
    writeName.textContent = bricks.find(bricks => bricks.colour === 'yellow').name;
    targetMain.appendChild(writeName);
  } else if (grabColour.value === 'green') {
    targetMain.textContent = '';
    const greenBrickImg = document.createElement('img');
    greenBrickImg.src = bricks.find(bricks => bricks.colour === 'green').img;
    greenBrickImg.alt = `green brick with the id of ${bricks.id}`;
    greenBrickImg.classList.add('brickable');
    targetMain.appendChild(greenBrickImg);
    const writeName = document.createElement('p');
    writeName.textContent = bricks.find(bricks => bricks.colour === 'green').name;
    targetMain.appendChild(writeName);
  } else if (grabColour.value === 'orange') {
    targetMain.textContent = '';
    targetMain.textContent = bricks.find(bricks => bricks.colour === 'orange');
  } else if (grabColour.value === 'pink') {
    targetMain.textContent = '';
    targetMain.textContent = bricks.find(bricks => bricks.colour === 'pink');
  } else if (grabColour.value === 'All Colour') {
    targetMain.textContent = targetMain;
  } if (grabColour === 'clicked') {
    return '';
  }
}
