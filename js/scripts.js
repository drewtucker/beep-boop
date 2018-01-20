//***Front End Logic***//

$(document).ready(function(){
  $("#userNumber").submit(function(event){
    event.preventDefault();
    var userInput = $("input#userInput").val();

//***Back End Logic***//
var inputArray = [];
for (var i = 0; i <= userInput; i += 1){
  inputArray.push(i);
  inputArray.forEach(function(number){
    if (inputArray.includes(0)){
      inputArray[i] = "Beep! ";
    }
    else if (inputArray.includes(1)){
      inputArray[i] = "Boop! ";
    }
    else if ((number % 3) === 0) {
      inputArray[i] = "I'm sorry Dave, I'm afraid I can't do that. "
    }
    else {
      return inputArray[i];
    }
    $("#result").text(inputArray);
});
}
});
});
