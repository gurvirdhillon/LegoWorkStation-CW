const checkMe = document.querySelector('.checkBox');
checkMe.addEventListener('click', onlyOneBox);

function onlyOneBox(checkbox) {
  const checkBoxes = document.querySelector('.checkBox');
  checkBoxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
