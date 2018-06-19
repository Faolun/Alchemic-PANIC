


var targetNumber = 0;
var counter = 0;
var wins= 0;
var losses= 0;
var numberOptions = [10, 5, 3, 7, 8];
var gameRunning = false;



function newGame() {
    gameRunning = true;
    counter= 0;
    $(".current-number").text(counter);
    
    $("#newGameButton").prop('disabled', true);
    //create new targetNumber

    targetNumber = Math.floor(Math.random() * 66 + 35);
    $("#number-to-guess").text(targetNumber);
    
        //random sort the array and select by order?? FISHER-YATES
    numberOptions = shuffle(numberOptions);

    
    //assign a value to the images based on the array
    $("#red").attr("data-potionsValue", numberOptions[0])
    $("#orange").attr("data-potionsValue", numberOptions[1])
    $("#green").attr("data-potionsValue", numberOptions[2])
    $("#blue").attr("data-potionsValue", numberOptions[3])
    $("#indigo").attr("data-potionsValue", numberOptions[4])

}

$(".potions").on("click", function() {

    if (gameRunning === true) {

    var potionsValue = ($(this).attr("data-potionsValue"));
    
    potionsValue = parseInt(potionsValue);
    counter += potionsValue;
    $(".current-number").text(counter);
    
    if (counter === targetNumber) {
        wins++;
        gameRunning = false;
        $("#wins").text(wins);
        $("#newGameButton").prop('disabled', false);
      }
  
      else if (counter >= targetNumber) {
        losses++;
        gameRunning = false;
        $("#losses").text(losses);
        $("#newGameButton").prop('disabled', false);
      }
  
    }
});


function shuffle(array) { //fisher Yates
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


$("#newGameButton").on("click", newGame);