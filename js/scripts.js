//***Front End Logic***//

$(document).ready(function(){
  $("#userNumber").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());



//***Back End Logic***//

//Logic for if no number is inputted, or letters are inputted instead of numbers//
if (isNaN(userInput)) {
  alert("Please enter a number!");
}
//Logic for numbers containing '0'//
else if (userInput === 0){
  $("#result").text("Beep!");

};

















});
});
