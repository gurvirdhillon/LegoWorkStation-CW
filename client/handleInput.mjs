function handleBtn() {
  document.body.textContent = 'error';
}

document.querySelector('.viewMe').addEventListener('click', handleBtn);

window.addEventListener('load', handleBtn);
