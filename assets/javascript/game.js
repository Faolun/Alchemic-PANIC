


var targetNumber = 0;
var counter = 0;
var wins= 0;
var losses= 0;
var numberOptions = [10, 5, 3, 7, 8];
var gameRunning = false;
var patientInt= 0;

var redSound = new Audio("assets/sounds/red.wav");
var orangeSound = new Audio("assets/sounds/orange.wav");
var greenSound = new Audio("assets/sounds/green.wav");
var blueSound = new Audio("assets/sounds/blue.wav");
var indigoSound = new Audio("assets/sounds/indigo.mp3");
var failSound = new Audio("assets/sounds/fail.wav");
var winSound = new Audio("assets/sounds/win.wav")



function newGame() {
    gameRunning = true;
    counter= 0;
    patientInt++;
    $(".current-number").text(counter);
    $("#patientNumb").text("Patient Number " + patientInt +"!")
    
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
$("#red").on("click", function() {
  if(redSound.paused) {
    redSound.play();
}
else {
  redSound.currentTime = 0;
}
})
$("#orange").on("click", function() {
  if(orangeSound.paused) {
    orangeSound.play();
}
else {
  orangeSound.currentTime = 0;
}
})
$("#green").on("click", function() {
  if(greenSound.paused) {
    greenSound.play();
}
else {
  greenSound.currentTime = 0;
}
})
$("#blue").on("click", function() {
  if(blueSound.paused) {
    blueSound.play();
}
else {
  blueSound.currentTime = 0;
}
})
$("#indigo").on("click", function() {
  if(indigoSound.paused) {
    indigoSound.play();
}
else {
  indigoSound.currentTime = 0;
}
})



$(".potions").on("click", function() {


    if (gameRunning === true) {

    var potionsValue = ($(this).attr("data-potionsValue"));

    
    
    potionsValue = parseInt(potionsValue);
    counter += potionsValue;
    $(".current-number").text(counter);
    
    if (counter === targetNumber) {
        winSound.play();
        wins++;
        gameRunning = false;
        $("#wins").text(wins);
        $("#newGameButton").prop('disabled', false);
      }
  
      else if (counter >= targetNumber) {
        failSound.play();
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