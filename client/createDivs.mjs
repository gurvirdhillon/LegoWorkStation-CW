const main = document.querySelector('#main');
function makeDiv(count = 50) {
    for (let i = 0; i < count; i++) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('legoHolder');
        createDiv.id = `lego${i}`;
        main.appendChild(createDiv);
        // for each function that puts an image with an incremental id and a class.
    }
}

function imagePlacer() {
    const getImage = document.createElement('img');
    getImage.src = 'https://m.media-amazon.com/images/I/61+2OyzvFQL._AC_SL1095_.jpg';
    getImage.alt = 'lego-brick';
    getImage.classList.add('brickable');
    document.body.append(getImage);
}



function loadFunctions() {
    makeDiv();
    imagePlacer();
}

window.addEventListener('load', loadFunctions);
