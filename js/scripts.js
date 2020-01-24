//BUSINESS LOGIC HERE

//Check if numerical or not
function numberCheck(input){
  var regex = /^[0-9]+$/;
  if (input.match(regex)){
    return true;
  }
  else{
    return false;
  }
}

//USER INTERFACE LOGIC HERE
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var userInput = $("#inputNumber").val();
    var isANumber = numberCheck(userInput);
    var numberArray = [];

    if (isANumber){
      
      for(var i=0; i <=userInput; i++){

        var digitArray = i.toString().split("");
        var foundReplacement = false;
        for(var j=0; j < digitArray.length && foundReplacement === false; j++){
          
          if(digitArray[j] === "1"){
            foundReplacement = true;
            numberArray.push("Beep!");
          }
        }
        if(foundReplacement === false){
          numberArray.push(i);
        }
      }

    }
    else{
      alert("No number inputted.  Please enter a number in space provided.");
    }

    $(".outputArea").show();
    $("#outputString").text(numberArray);

  });
});