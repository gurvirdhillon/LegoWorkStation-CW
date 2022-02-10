const legoName = document.querySelector('#legoNme');
const SubmitMe = document.querySelector('#Submit');

function save() {
  localStorage.setItem('savedLegoName', legoName);
}

function submit() {
  legoName.value = '';
  save();
}

legoName.value = localStorage.getItem('savedLegoName');
legoName.addEventListener('input', save);

SubmitMe.addEventListener('click', submit);

function callFunc() {
  save();
  submit();
}

window.addEventListener('load', callFunc);
