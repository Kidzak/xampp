"use strict";

// exercise 1

if ("0"){
    alert('Hello!');
}

// Yes, this alert will be shown


// exercise 2

let userInput = prompt("What is the 'official' name of JavaScript?", "");

if (userInput === "ECMAScript") {
    alert("Right!");
} else {
    alert("You don't know? ECMAScript!");
}


// exercise 3

let x = prompt("Insert the number:", "");
let number = parseFloat(userInput);

if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

// exersice 6


// let result = (a + b < 4) ? 'Below' : 'Over';

// exersice 7
let message = (login === 'Employee');
  ? 'Hello'
  : (login === 'Director')
    ? 'Greetings'
    : (login === '')
      ? 'No login'
      : '';

// exercise 8

if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}

// exercise 9 

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        
        break;



 