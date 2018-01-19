//***Front End Logic***//

$(document).ready(function(){
  $("#userNumber").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());



//***Back End Logic***//
var inputArray = [];
for (var index = 0; index < userInput; index += 1){
  var push = inputArray.push(index);
}
console.log(inputArray);

//Logic for if no number is inputted, or letters are inputted instead of numbers//
if (isNaN(userInput)) {
  alert("Please enter a number!");
}
//Logic for numbers containing '1'//
else if (userInput === 1){
  $("#result").text("Boop!");
}
//Logic for numbers containing '0'//
else if (userInput === 0){
  $("#result").text("Beep!");
}
//Logic for numbers divisible by 3//
else if ((userInput % 3) === 0) {
  $("#result").text("I'm sorry Dave, i'm afraid I can't do that.");
}

















});
});
