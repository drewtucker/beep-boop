//***Front End Logic***//

$(document).ready(function(){
  $("#userNumber").submit(function(event){
    event.preventDefault();
    var userInput = $("input#userInput").val();

//***Back End Logic***//
var inputArray = [];

for (var i = 0; i <= userInput; i += 1){
  console.log(i);
  inputArray.push(i);

    if ( (inputArray.includes(0)) || (inputArray.includes(20)) || (inputArray.includes(40)) || (inputArray.includes(50)) || (inputArray.includes(60)) || (inputArray.includes(70)) || (inputArray.includes(80)) || (inputArray.includes(90))){
      inputArray[i] = "Beep! ";
    }
    else if (inputArray.includes(1) || ((inputArray[i] > 9) && (inputArray[i] < 20)) || inputArray.includes(21) || inputArray.includes(31) || inputArray.includes(41) || inputArray.includes(51) || inputArray.includes(61) || inputArray.includes(71) || inputArray.includes(81) || inputArray.includes(91)  ){
      inputArray[i] = "Boop! ";
    }
    else if ((i % 3) === 0) {
      inputArray[i] = "I'm sorry Dave, I'm afraid I can't do that. "
    }

    $("#result").text(inputArray);

}
});
});
