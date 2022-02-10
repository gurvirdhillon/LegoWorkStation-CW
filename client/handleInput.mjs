// gets only one input return from the price tag
function onlyOne(checkbox) {
  const checkboxes = document.getElementsByName('check');
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
onlyOne();
// code extracted from https://stackoverflow.com/questions/9709209/html-select-only-one-checkbox-in-a-group

const viewMe = document.querySelector('.viewMe');

console.log(viewMe);
