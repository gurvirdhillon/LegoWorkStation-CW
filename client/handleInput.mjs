const getParent = document.querySelector('#main');
getParent.children = `btn${getBtn}`;


function handleBtn() {
  document.body.textContent = 'error';
}

const getBtn = document.querySelector('button').addEventListener('click', handleBtn);

window.addEventListener('load', handleBtn);
