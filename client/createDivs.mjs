function makeDiv(data) {
  const main = document.querySelector('#main');
  for (const row of data) {
    const createDiv = document.createElement('div');
    createDiv.classList.add('legoHolder');
    createDiv.id = `${row.id}`;
    main.appendChild(createDiv);
    imagePlacer(createDiv, row);
    getAddButton(createDiv, row);
    giveName(createDiv, row);
    getPriceAndDescription(createDiv, row);
    getQuantity(createDiv, row);
    makeViewDetails(createDiv, row);
  }
}

function imagePlacer(where, what) {
  const getImage = document.createElement('img');
  getImage.src = what.img;
  getImage.alt = 'lego-brick';
  getImage.classList.add('brickable');
  where.append(getImage);
}

// this makes the + button
function getAddButton(where, what) {
  const getBtn = document.createElement('button');
  getBtn.textContent = what.btn;
  getBtn.classList.add('btnElem');
  where.append(getBtn);
}

function getPriceAndDescription(where, what, p) {
  const getPrice = document.createElement('p');
  getPrice.textContent = what.p;
  where.append(getPrice);
}

function getQuantity(where, what) {
  const createQuantity = document.createElement('p');
  createQuantity.textContent = `Number of items in stock: ${what.quantity}`;
  createQuantity.classList.add('quant');
  where.append(createQuantity);
}

function giveName(where, what) {
  const createName = document.createElement('h3');
  createName.textContent = `${what.name}`;
  where.append(createName);
}

function loadFunctions() {
  makeDiv(db);
  getAddButton(db);
  giveName(db);
  getPriceAndDescription(db);
  giveName(db);
  imagePlacer();
  getQuantity(db);
  makeViewDetails(db);
}

function makeViewDetails(where, what) {
  const createBtn = document.createElement('button');
  createBtn.textContent = `${what.btn2}`;
  createBtn.id = `btn${what.btn2}`;
  createBtn.classList.add('viewMe');
  where.append(createBtn);
}


window.addEventListener('load', loadFunctions);

const db = [
  { id: 'brk1', name: 'red 2 by 4', colour: 'red', x: 2, y: 4, img: 'https://m.media-amazon.com/images/I/61+2OyzvFQL._AC_SL1095_.jpg', p: '£0.30', btn: '+', quantity: '40', btn2: 'View Details' },
  { id: 'brk2', name: 'blue 2 by 4', colour: 'blue', x: 2, y: 4, img: 'https://fydn.imgix.net/m%2FPJ-3305-32_P1.jpg?auto=format%2Ccompress&q=75', p: '£0.40', btn: '+', quantity: '20' },
  { id: 'brk3', name: 'yellow 2 by 4', colour: 'yellow', x: 2, y: 4, img: 'https://www.redcandy.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/lego-storage-brick-8-yellow-1.1575472405.jpg', p: '£0.20', btn: '+', quantity: '300', btn2: 'View Details' },
  { id: 'brk4', name: 'green 2 by 4', colour: 'green', x: 2, y: 4, img: 'https://static.turbosquid.com/Preview/2019/05/23__08_00_58/Lego_Brick_2x4_Earth_Green_thumbnail_Square_0000.jpg4A94DF21-68B6-4062-976F-22BD4D4B249ALarge.jpg', p: '£0.20', btn: '+', quantity: '22', btn2: 'View Details' },
  { id: 'brk5', name: 'black 2 by 4', colour: 'black', x: 2, y: 4, img: 'https://fydn.imgix.net/m%2FPJ-3305-23_P1.jpg?auto=format%2Ccompress&q=75', p: '£0.20', btn: '+', quantity: '91', btn2: 'View Details' },
  { id: 'brk6', name: 'green 2 by 4', colour: 'green', x: 4, y: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvhMQzkvA1m8MesmNCbYhXbTsgWjsTTEgPQ&usqp=CAU', p: '£0.10', btn: '+', quantity: '51', btn2: 'View Details' },
  { id: 'brk7', name: 'red 2 by 1', colour: 'red', x: 2, y: 2, img: 'https://img.brickowl.com/files/image_cache/larger/lego-dark-red-brick-1-x-2-3004-32-442413-56.jpg', p: '£0.05', btn: '+', quantity: '29', btn2: 'View Details' },
  { id: 'brk8', name: 'mixed Crate', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt70237dec0eef084a/10696.jpg?fit=bounds&format=jpg&quality=80&width=1056&height=1056&dpr=1', p: '£40', btn: '+', quantity: '10', btn2: 'View Details' },
  { id: 'brk9', name: 'Bonsai!', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blta0f82238c7a41b0b/10281_alt4.png', p: '£15', btn: '+', quantity: '4', btn2: 'View Details' },
  { id: 'brk10', name: 'Lego master set', colour: 'All', x: 1, y: 1, img: 'https://www.lego.com/cdn/cs/set/assets/blt62f99776b13a8e94/10297.png', p: '£20', btn: '+', quantity: '10', btn2: 'View Details' },
];
