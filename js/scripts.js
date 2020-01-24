//BUSINESS LOGIC HERE

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
    
    if (isANumber){
      
    }
    else{
      alert("No number inputted.  Please enter a number in space provided.");
    }

  });
});