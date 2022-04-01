const clickBtn = document.querySelectorAll('.priceToggle');
clickBtn.addEventListener('click', toggleOne);

function toggleOne() {
  const getOne = document.querySelectorAll('.priceToggle');
  let StartCount = 0;
  for (let count = 0; count < getOne.length; count++) {
    if (getOne[count].checked === true) {
      StartCount = StartCount + 1;
    }
  } if (StartCount === 2) {
    alert("You can't select two prices at once!");
  }
}
