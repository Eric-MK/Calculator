const resultScreen = document.querySelector('.result_screen');
const elements = document.querySelectorAll('.element');
let expression = '';

elements.forEach((element) => {
  element.addEventListener('click', () => {
    const num = element.getAttribute('data-num');

    if (num === 'AC') {
      resultScreen.value = '';
      expression = '';
    } else if (num === '=') {
      const solution = eval(expression);
      resultScreen.value = solution;
      expression = solution;
    } else {
      expression += num;
      resultScreen.value = expression;
    }
  });
});
