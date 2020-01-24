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

//Replace digits with strings if fits requirements
function numberConverter(input){
  var numberArray = [];
  for(var i=0; i <=input; i++){

    var digitArray = i.toString().split("");

    if(digitArray.includes("3")){
      numberArray[i] = " I'm sorry, Dave.  I'm afraid I can't do that."
    }
    else if(digitArray.includes("2")){
      numberArray[i] = " Boop!";
    }
    else if(digitArray.includes("1")){
      numberArray[i] = " Beep!";
    }
    else{
      numberArray[i] = " " +i;
    }
  }
  return numberArray;
}

//USER INTERFACE LOGIC HERE
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var userInput = $("#inputNumber").val();
    var isANumber = numberCheck(userInput);
    

    if (isANumber){
      var convertedArray = numberConverter(userInput);
    }
    else{
      alert("No number inputted.  Please enter a number in space provided.");
    }

    $(".outputArea").show();
    $("#outputString").text(convertedArray);

  });
});