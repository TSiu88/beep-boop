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

function numberConverter(input){
  var numberArray = [];
  for(var i=0; i <=input; i++){

    var digitArray = i.toString().split("");
    // var foundReplacement = false;
    // for(var j=0; j < digitArray.length; j++){

    //   if(digitArray[j] === "2"){
    //     foundReplacement = true;
    //     numberArray[i] = "Boop!";
    //   }
    //   else if(digitArray[j] === "1" && !digitArray.includes("2")){
    //     foundReplacement = true;
    //     numberArray[i] = "Beep!";
    //   }
    // }
    // if(foundReplacement === false){
    //   numberArray[i] = i;
    // }

    if(digitArray.includes("2")){
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