function divCreator(divMkr = 200) {
    for (let i = 0; i < divMkr; i++) {
        const divMkr = document.createElement('div');
        divMkr.classList.add('legoDiv');
        divMkr.textContent = 'hello';
        document.body.append(divMkr);   
    }
}


window.addEventListener('load', divCreator);
