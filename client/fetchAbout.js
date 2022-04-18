async function fetchContent() {
  const targetArea = document.querySelector('#fetchContent');
  const response = await fetch('aboutus.json');
  if (response.ok) {
    const data = await response.json();
    const fetchContent = document.createElement('div');
    targetArea.textContent = data;
    document.body.append(fetchContent);
  }
}

window.addEventListener('load', fetchContent);

const grabTitle = document.querySelector('#legoTitle');
grabTitle.addEventListener('click', mainRef);

function mainRef() {
  window.location.href = 'index.html';
}
