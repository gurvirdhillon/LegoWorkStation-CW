const targetFilter = document.querySelector('#filter');

function makeTheFilterForPage() {
    const ExplainFilter = document.createElement('p');
    ExplainFilter.textContent = 'Filter lego';
    const makeFilter = document.createElement('select');
    makeFilter.name = 'Filter:'
    makeFilter.id = 'filterMe';
    const addOptions = document.createElement('option');
    addOptions.value = 'Did it work?'
    targetFilter.appendChild(ExplainFilter);
    targetFilter.appendChild(makeFilter);
    targetFilter.appendChild(addOptions);
}


function makeDiv(data) {
    for (const row of data) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('legoHolder');
        createDiv.id = `${row.id}`;
        main.appendChild(createDiv);
        imagePlacer(createDiv, row);
        getAddButton(createDiv, row);
        getPriceAndDescription(createDiv, row);
    }
}

function imagePlacer(where, what) {
    const getImage = document.createElement('img');
    getImage.src = what.img;
    getImage.alt = 'lego-brick';
    getImage.classList.add('brickable');
    where.append(getImage);
}

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


function loadFunctions() {
    makeTheFilterForPage();
    makeDiv(db);
    getAddButton(db);
    getPriceAndDescription(db);
    imagePlacer();
}

window.addEventListener('load', loadFunctions);

const db = [
    {id: 'brk1', name: 'red2by4', colour: 'red', x: 2, y: 4, img: 'https://m.media-amazon.com/images/I/61+2OyzvFQL._AC_SL1095_.jpg', p: '£0.30', btn: '+'},
    {id: 'brk2', name: 'blue2by4', colour: 'blue', x: 2, y: 4, img: 'https://fydn.imgix.net/m%2FPJ-3305-32_P1.jpg?auto=format%2Ccompress&q=75', p: '£0.40', btn: '+'},
    {id: 'brk3', name: 'yellow2by4', colour: 'yellow', x: 2, y: 4, img: 'https://www.redcandy.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/lego-storage-brick-8-yellow-1.1575472405.jpg', p: '£0.20', btn: '+'},
    {id: 'brk4', name: 'yellow2by4', colour: 'yellow', x: 2, y: 4, img: 'https://static.turbosquid.com/Preview/2019/05/23__08_00_58/Lego_Brick_2x4_Earth_Green_thumbnail_Square_0000.jpg4A94DF21-68B6-4062-976F-22BD4D4B249ALarge.jpg', p: '£0.20', btn: '+'},
    {id: 'brk5', name: 'yellow2by4', colour: 'yellow', x: 2, y: 4, img: 'https://fydn.imgix.net/m%2FPJ-3305-23_P1.jpg?auto=format%2Ccompress&q=75', p: '£0.20', btn: '+'},
    {id: 'brk6', name: '', colour: 'green', x: 4, y: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvhMQzkvA1m8MesmNCbYhXbTsgWjsTTEgPQ&usqp=CAU', p: '£0.10', btn: '+'},
];

