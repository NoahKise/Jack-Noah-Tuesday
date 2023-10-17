// function ozToGram(inputOz) 
//   return inputOz * 28.3495;
// }
// function lbsToGram(inputLbs) {
//   return inputLbs * 453.592;
// }

// let inputOz = parseInt(prompt ("Enter weight in oz:"));

// let inputLbs = parseInt(prompt ("Enter weight in lbs:"));


const inputAmount = parseInt(window.prompt("Enter value:"));
const inputUnit = window.prompt("Enter starting unit type:");
const outputUnit = window.prompt("Enter desired unit:");

switch (inputUnit) {
  case ('oz'): window.alert((inputAmount * 28.3495) + outputUnit); break;
  case ('lbs'): window.alert((inputAmount * 453.592) + outputUnit); break;
}