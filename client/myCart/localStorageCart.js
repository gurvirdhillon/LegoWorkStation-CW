const add1 = document.querySelector('#add1');

const submitBtn = document.querySelector('#submitMe');

function save() {
  localStorage.setItem('savedAdd1', add1);
}

function submitInput() {
  add1.value = '';
  save();
}

add1.value = localStorage.getItem('savedAdd1');
add1.addEventListener('input', save);

submitBtn.addEventListener('click', submitInput);

function allFunctionsCalledHere() {
  save();
  submitInput();
}

window.addEventListener('load', allFunctionsCalledHere);
