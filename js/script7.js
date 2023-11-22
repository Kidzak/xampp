"use strict";

// exercise 1

var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

var sum = num1 + num2;

alert("The sum of " + num1 + " and " + num2 + " is: " + sum);

// exercise 2

// this script will round correctly

let number = 6.35;
let roundedNumber = Math.round(number * 10) /10;
console.log(roundedNumber)

// exercise 3

function readNumber() {
    while (true) {
      var input = prompt("Enter a number:");
  
      if (input === null || input === "") {
        return null;
      }

      var number = parseFloat(input);

      if (!isNaN(number)) {
        return number;
      }
  
      alert("Invalid input. Please enter a valid number.");
    }
  }
  
  var result = readNumber();
  
  if (result === null) {
    alert("User canceled or entered an empty line.");
  } else {
    alert("You entered: " + result);
  }


// exercise 4

//the loop will never end because i will never become exactly equal to 10. Instead, the value of 
// i will continually increase, but due to a precision problem with floating-point arithmetic, 
//it will never reach the exact value of 10.;

  // exercise 5

   function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  
  let minValue = 5;
  let maxValue = 10;
  
  let randomNumber = random(minValue, maxValue);
  console.log(`Random number between ${minValue} and ${maxValue}:, randomNumber`);

  // exercise 6 

  function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
  
  // Example usage:
  var randomInt = randomInteger(1, 10);
  console.log(randomInt);
  