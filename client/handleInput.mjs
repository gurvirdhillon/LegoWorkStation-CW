// const getBtn = document.querySelector('button').addEventListener('click', handleBtn);

// const getParent = document.querySelector('#main');
// getParent.children = `btn${getBtn}`;


// function handleBtn() {
//   document.body.textContent = 'Error 404';
// }

// window.addEventListener('load', handleBtn);
// gets the button in the #main body and gets the id then when clicked it tries to get an error up.
// tried, tested and doesnt work properly.


// gets only one input return from the price tag
function onlyOne(checkbox) {
  const checkboxes = document.getElementsByName('check');
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
onlyOne();
// code extracted from https://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group

const viewMe = document.querySelector('.viewMe');

console.log(viewMe);
