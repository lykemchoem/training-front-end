// define method

hanlderMaxNumber = () => {
  var numberA = document.getElementById('number-one').value;
  var numberB = document.getElementById('number-two').value;

  if (parseInt(numberA) > parseInt(numberB)) {
    document.getElementById('input-max-number').value = numberA;
  } else {
    document.getElementById('input-max-number').value = numberB;
  }
}
