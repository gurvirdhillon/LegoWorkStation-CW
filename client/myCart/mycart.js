function checkMyItemsOut() {
  document.body.textContent = 'Checked out';
}
checkMyItemsOut();

document.querySelector('#submitMe').addEventListener('click', checkMyItemsOut);
