const handleSetClick = document.querySelector('#set');
handleSetClick.addEventListener('click', handleSet);
handleBrick.addEventListener('click', createBackButton);

function handleSet() {
  const main = document.querySelector('#main');
  const targetElem1 = document.querySelector('#brk10');
  const targetElem2 = document.querySelector('#brk11');
  const targetElem3 = document.querySelector('#brk12');
  const targetElem4 = document.querySelector('#brk13');
  const targetElem5 = document.querySelector('#brk14');
  const targetElem6 = document.querySelector('#brk15');
  main.textContent = targetElem1;
  main.textContent = targetElem2;
  main.textContent = targetElem3;
  main.textContent = targetElem4;
  main.textContent = targetElem5;
  main.textContent = targetElem6;
  main.append(targetElem1);
  main.append(targetElem2);
  main.append(targetElem3);
  main.append(targetElem4);
  main.append(targetElem5);
  main.append(targetElem6);
}

const OrderByBrick = document.querySelector('#OverallBrk');
OrderByBrick.addEventListener('click', handleBrick);
OrderByBrick.addEventListener('click', createBackButton);

function handleBrick() {
  const main = document.querySelector('#main');
  const targetElem1 = document.querySelector('#brk1');
  const targetElem2 = document.querySelector('#brk2');
  const targetElem3 = document.querySelector('#brk3');
  const targetElem4 = document.querySelector('#brk4');
  const targetElem5 = document.querySelector('#brk5');
  const targetElem6 = document.querySelector('#brk6');
  const targetElem7 = document.querySelector('#brk7');
  const targetElem8 = document.querySelector('#brk8');
  const targetElem9 = document.querySelector('#brk9');
  main.textContent = targetElem1;
  main.textContent = targetElem2;
  main.textContent = targetElem3;
  main.textContent = targetElem4;
  main.textContent = targetElem5;
  main.textContent = targetElem6;
  main.textContent = targetElem7;
  main.textContent = targetElem8;
  main.textContent = targetElem9;
  main.append(targetElem1);
  main.append(targetElem2);
  main.append(targetElem3);
  main.append(targetElem4);
  main.append(targetElem5);
  main.append(targetElem6);
  main.append(targetElem7);
  main.append(targetElem8);
  main.append(targetElem9);
}

function createBackButton() {
  const main = document.querySelector('#main');
  const createBack = document.createElement('a');
  createBack.setAttribute('href', '../index.html');
  createBack.textContent = '<';
  createBack.append(main);
}
// back button doesnt work yet
