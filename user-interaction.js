"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var name = ""


while (name === ""){
	name = window.prompt("What is your name?")
}


// TODO: Show an alert message that welcomes the user based on their input.
alert(`Welcome to my website, ${name}`);

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizza = window.prompt("Do you like pizza?")

if (pizza.toLowerCase()  === "yes"){
	alert("Doesnt everyone?");
} else {
	alert("I'll eat your piece for you.")
}