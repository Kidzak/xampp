"use strict";


// exercise 1

let i = 3;
while (i) {
alert( i-- );
}

// The last value that showed up was 1\

// exercise 2

let a = 0;
while (++a < 5) alert( a );

// output value for this loop was 4

let b = 0;
while (b++ < 5) alert( b );

// output value for this loop was 5



// exercise 3

for(c=2;c<=10;c++) { 
    console.log(c); 
}



// exercise 4

let x = 0;
while (x<3) {
    alert ('number${x}!');
    x++;
}

// exercise 5

let number;

do {
    nubmer = prompt("Please enter a nubmer greater than 100:","");

    if (number !== null && number <= 100) {
        alert("Please enter number greater than 100.");  
    }
    while (number !== null && number <= 100);
}

//exercise 6

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    
    for (let y = 2; y <= Math.sqrt(num); y++) {
      if (num % y === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function printPrimesInRange(n) {
    for (let y = 2; y <= n; y++) {
      if (isPrime(y)) {
        console.log(y);
      }
    }
  }
  
 
  let n = 20; 
  console.log(Prime numbers between 2 and ${n}:);
  printPrimesInRange(n);