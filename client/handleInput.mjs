function handleSearch() {
  const input = document.querySelector('#SEngine').value;
  input = input.toLowerCase();
  const divs = document.querySelector('legoHolder');

  for (let i = 0; i < divs; i++) {
    if (!divs[i].textContent.toLowerCase().includes(input)) {
      divs[i].style.display = 'none';
    } else {
      divs[i].style.display = 'list-item';
    }
  }
}

window.addEventListener('load', handleSearch);
