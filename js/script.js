"use strict";
// exercise 1
alert( null || 2 || undefined ); // 2
alert( alert(1) || 2 || alert(3) ); // 1 
alert( 1 && null && 2 );  // 2 
alert( alert(1) && alert(2) ); // null 
alert( null || 2 && 3 || 4 ); // 3



// exercise 2

let age = 25;

if (age >= 14 && age <= 90) {
    console.log("Age is beetween 14 and 90.");
    alert("age is in the range")
} else {
    console.log("Age is outside the range.");
    alert("age is outside range")
};

//exercise 3 


if (!(age >= 14 && age <= 90)) {
    console.log("Age is outside the range.");
    alert("age is outside range")

} else {
    console.log("Age is between 14 and 90.");
    alert("age is in the range")
};

//or

if (age < 14 || age > 90) {
    console.log("Age is outside the range.");
    alert("age is outside range")
    
} else {
    console.log("Age is in the range of 14 to 90.");
    alert("age is in the range")
    
};

// exercise 4

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

// Alerts 1 and 3 will be executed, alert number two wouldn't be executed

// exercise 5

let login = prompt("Login:");

if (login === "Mikolaj") {
    let password = prompt("Password:");

    if (password === "Paruwako0") {
        console.log("Hola");
    } else if (password === "" || password === null) {
        console.log("Decline");
    } else {
        console.log("Bad password");
    }

} else if (login === "" || login === null) {
    console.log("Decline");
} else {
    console.log("I don't know you");
}