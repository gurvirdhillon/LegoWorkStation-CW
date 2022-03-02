import {getBrick} from '../server/db-memory.mjs';

const grabContent = document.querySelector('.btnElem');
grabContent.addEventListener('click', triggerStorageEvent);

// event listener that is triggered when a button is clicked.
// for loop that checks all the ID's of the legoDivs
// then stringifys all the children within that ID and keeps it in storage.

function triggerStorageEvent() {
  localStorage.setItem('getBrick', `${getBrick.id}`);
}

console.log(localStorage);

function init() {
  triggerStorageEvent();
}

window.addEventListener('load', init);
