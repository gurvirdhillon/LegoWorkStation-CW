const handleBtn = document.querySelector('');
handleBtn.addEventListener('load', templateAppear);
// shows the template which will contain where the basket and all the information.
function templateAppear() {

}

// handles the + input.
const getAllButtons = document.querySelectorAll('.viewMe');
getAllButtons.forEach(
  document.body.textContent = 'details/details.html',
  // trying to get each button to go to details page with the div.
);

// colour
const grabFilter = document.querySelector('#colourFilter');
grabFilter.addEventListener('click', filterColour);

function filterColour() {
  switch (grabFilter === 'red') {
    case
    // case everything with the 'colour' = red in the create div object.
  }
  switch (grabFilter === 'All') {
    // case all the bricks no matter what colour
    case
  }
  switch (grabFilter === 'green') {
    case
  }
  switch (grabFilter === 'black') {
    // case returns all blacks from db
    case
  }
  switch(grabFilter === 'yellow'){
    // case returns all yellows from db
  }
}

// handles clicking the second and third page.
const grabBlockGenerator1 = document.querySelector('#BlkGen2', '#BlkGen3');
grabBlockGenerator1.addEventListener('click', replaceLego);

function replaceLego() {
  const removeDiv = document.querySelector('#main');
  removeDiv.remove();
}

function loadAllFunctions() {
  templateAppear();
  replaceLego();
}

window.addEventListener('load', loadAllFunctions);
