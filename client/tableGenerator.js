function makeTable(row = 20) {
  for (let i = 0; i < row; i++) {
    const createTable = document.createElement('div');
    createTable.id = `div${i}`;
    createTable.classList.add('tableCart');
    document.body.append(createTable);
  }
}

function placeHelloIn() {
  const grabTheElem = document.querySelector('#div0');
  const createElem = document.createElement('img');
  createElem.src = 'https://www.lego.com/cdn/cs/set/assets/blt497da03153fb9a10/21319.jpg?fit=bounds&format=jpg&quality=80&width=1500&height=1500&dpr=1';
  createElem.alt = 'friends lego set';
  createElem.title = 'friends';
  // createElem.classList.add('');
  grabTheElem.append(createElem);
}


function getAllFunctions() {
  makeTable();
  placeHelloIn();
}

window.addEventListener('load', getAllFunctions);
