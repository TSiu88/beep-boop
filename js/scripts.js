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

  if(input.includes("5")){
    document.getElementById("image").src="img/cake.jpg";
    document.getElementById("image").title="The Cake is a Lie.";
    document.getElementById("image").alt="cake";
  }
  else{
    document.getElementById("image").src="img/robot.png";
    document.getElementById("image").title="Candy...Candy...Candy...";
    document.getElementById("image").alt="robot";
  }

  for(var i=0; i <=input; i++){

    var digitArray = i.toString().split("");

    if(digitArray.includes("3")){
      sorryText = " I'm sorry, " + name + ".  I'm afraid I can't do that.";
      numberArray[i] = sorryText.fontcolor("#33334d");
    }
    else if(digitArray.includes("2")){
      numberArray[i] = " Boop!".fontcolor("#0000ff");
    }
    else if(digitArray.includes("1")){
      numberArray[i] = " Beep!".fontcolor("#b30000");
    }
    else{
      numberArray[i] = " " +i;
    }
  }
  return numberArray;
}

//Reverse order of output array
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
    var outputText = "";

    if (isANumber){
      var convertedArray = numberConverter(userInput, userName);

      $(".outputArea").slideDown();
      $("#outputString").text("");
      $(".upDown").text("");
      $("#number").text("");
      
      var buttonId = this.id;
      if (buttonId === "reverseButton"){
        var reversedArray = reverseArray(convertedArray);
        outputText = reversedArray.join();
        $("#outputString").append(outputText);
        $(".upDown").text("DOWN from");
      }
      else if(buttonId === "submitButton"){
        outputText = convertedArray.join();
        $("#outputString").append(outputText);
        $(".upDown").text("UP to");
      }
      $("#number").text(userInput);
    }
    else{
      alert("No valid number inputted.  Please enter a number in space provided.");
    }

  });
});