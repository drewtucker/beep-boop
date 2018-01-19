//***Front End Logic***//

$(document).ready(function(){
  $("#userNumber").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());



//***Back End Logic***//
if (isNaN(userInput)){
  alert("Please enter a number.");
}
var inputArray = [];
var unUsedNumbers = ["2", "4", "5", "7", "8",]
for (var i = 0; i <= userInput; i += 1){
  inputArray.push(i);
  inputArray.forEach(function(i){
    console.log(inputArray.toString());
    if(inputArray.toString().includes("0")){
      inputArray[i] = "Beep! ";
    }
    else if (inputArray.toString().includes(unUsedNumbers[i])) {
      inputArray[i] = inputArray[i];
    }
    else if (inputArray.toString().includes("1")){
      inputArray[i] = "Boop! ";
    }
    else if ((inputArray[i] % 3) === 0) {
      inputArray[i] = "I'm sorry Dave, I'm afraid I can't do that. "
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
