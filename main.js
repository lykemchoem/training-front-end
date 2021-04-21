
// lab 02 exercise 01
handleNames = () => {
  // using let and const
  let fullName = document.getElementById('full-name').value.trim();

  if (fullName == '' ) {
    alert('Please enter the full name');
    return
  }

  let firstName = '';
  let lastName = '';
  let middleName = '';
  let upperCaseFullName = '';
  let arrFullName = fullName.split(' ');

  firstName = arrFullName[0];
  lastName  = arrFullName[arrFullName.length - 1];
  middleName = arrFullName.slice(1, arrFullName.length - 1);

  arrFullName.forEach(value => {
    upperCaseFullName += `${value.charAt(0).toUpperCase()}${value.slice(1)} ` ;
  });

  document.getElementById('first-name').value = firstName;
  document.getElementById('last-name').value = lastName;
  document.getElementById('middle-name').value = middleName.join(' ');
  document.getElementById('uppercase-full-name').value = upperCaseFullName;
}



// lab 02 exercise 02
handleNumbers = () => {

  let listNumbers = document.getElementById('list-numbers').value.trim();
  if (listNumbers == '' ) {
    alert('Please enter the number');
    return
  }

  let maxNumber = '';
  let totalPositiveNumbers = 0;
  let firstOddNumber = 0;

  let arrNumbers = listNumbers.split(' ');

  // convert new array
  newArrayNumbers = [];
  for (x of arrNumbers) {
    newArrayNumbers.push(parseInt(x));
  }

  //  max number
  maxNumber = Math.max(...newArrayNumbers); // spread

  // total positive numbers
  for (x of newArrayNumbers) {
    if (x > 0) {
      totalPositiveNumbers += x;
    }
  }

  // first odd number
  for (x of newArrayNumbers) {
    if (x % 2 == 0) {
      firstOddNumber = x;
      break;
    }
  }

  // max odd number
  let arrOddNumbers = [];
  for (x of newArrayNumbers) {
    if (x % 2 == 0) {
      arrOddNumbers.push(x);
    }
  }

  document.getElementById('max-number').value = maxNumber;
  document.getElementById('total-positive-numbers').value = totalPositiveNumbers;
  document.getElementById('first-odd-number').value = firstOddNumber;
  document.getElementById('max-odd-number').value = Math.max(...arrOddNumbers);
}
