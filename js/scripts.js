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
function numberConverter(input, name){
  var numberArray = [];

  if(name === ""){
    name = "Dave";
  }

  for(var i=0; i <=input; i++){

    var digitArray = i.toString().split("");

    if(digitArray.includes("3")){
      numberArray[i] = " I'm sorry, " + name + ".  I'm afraid I can't do that.";
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

function reverseArray(array){
  return array.reverse();
}

//USER INTERFACE LOGIC HERE
$(document).ready(function(){
  $(".btn").on("click", function(){
    event.preventDefault();

    var userName = $("#name").val();
    var userInput = $("#inputNumber").val();
    var isANumber = numberCheck(userInput);
    

    if (isANumber){
      var convertedArray = numberConverter(userInput, userName);
    }
    else{
      alert("No number inputted.  Please enter a number in space provided.");
    }

    $(".outputArea").show();
    
    var buttonId = this.id;
    if (buttonId === "reverseButton"){
      var reversedArray = reverseArray(convertedArray);
      $("#outputString").text("");
      $("#outputString").text(reversedArray);
    }
    else if(buttonId === "submitButton"){
      $("#outputString").text("");
      $("#outputString").text(convertedArray);
    }

  });
});