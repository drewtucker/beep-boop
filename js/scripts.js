//***Front End Logic***//

$(document).ready(function(){
  $("#userNumber").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());



//***Back End Logic***//
var inputArray = [];
for (var i = 0; i <= userInput; i += 1){
  inputArray.push(i);
  inputArray.forEach(function(i){
    if(inputArray[i] === 0){
      inputArray[i] = "Beep!";
    }
    else if (inputArray[i] === 1){
      inputArray[i] = "Boop!";
    }
    $("#result").text(inputArray);
  });
}
// }
// $("#result").text(inputArray);
// console.log(inputArray);
//
// //Logic for if no number is inputted, or letters are inputted instead of numbers//
// if (isNaN(userInput)) {
//   alert("Please enter a number!");
// }
//Logic for numbers containing '1'//
// else if (userInput === 1){
//   $("#result").text("Boop!");
// }
//Logic for numbers containing '0'//
// else if (userInput === 0){
//   $("#result").text("Beep!");
// }
//Logic for numbers divisible by 3//
// else if ((userInput % 3) === 0) {
//   $("#result").text("I'm sorry Dave, i'm afraid I can't do that.");
// }

















});
});
