function makeTable(row = 20) {
  for (let i = 0; i < row; i++) {
    const createTable = document.createElement('div');
    createTable.id = `div${i}`;
    createTable.classList.add('tableCart');
    document.body.append(createTable);
  }
}

const getDiv0 = document.querySelector('#div0');
const createHead = document.createElement('p');
createHead.textContent = 'hello';
createHead.append(getDiv0);


// function placeContent() {
//   const grabDiv0 = document.querySelector('div0');
//   const putInText = document.createElement('p');
//   putInText.textContent = 'Hello';
//   grabDiv0.appendChild(putInText);
// }

function getAllFunctions() {
  makeTable();
//   placeContent();
}

window.addEventListener('load', getAllFunctions);
