const getBtn = document.querySelector('button').addEventListener('click', handleBtn);

const getParent = document.querySelector('#main');
getParent.children = `btn${getBtn}`;


function handleBtn() {
  document.body.textContent = 'Error 404';
}

window.addEventListener('load', handleBtn);
// gets the button in the #main body and gets the id then when clicked it tries to get an error up.
// tried, tested and doesnt work properly.
