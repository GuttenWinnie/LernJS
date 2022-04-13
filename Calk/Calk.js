const calc = document.querySelector('.button');
const result = document.querySelector('#screen');

calc.addEventListener('click', function(event) {

  let value = event.target.innerText;

  switch(value) {

    case '=':   
      
      result.innerText = eval(result.innerText).toFixed(2);
      break;    

    default:
      result.innerText += value;
  }
});
