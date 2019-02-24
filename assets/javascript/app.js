// Link images to variables
var frodo = $("#frodo");
var samwise = $("#samwise");
var meriadoc = $("#meriadoc");
var peregrin = $("#peregrin");

// establish button variables
var frodoValue = 0;
var samwiseValue = 0;
var meriadocValue = 0;
var peregrinValue = 0;

//link other stuff
var targetScoreText = $("#targetScoreText");
var currentScoreText = $("#currentScoreText");
var winsText = $("#winsText");
var lossesText = $("#lossesText");


// other variables
var currentTarget = 0;
var currentScore = 0;
var wins = 0;
var losses = 0;

//set initial game conditions
function newGame() {
    //Mixup button values
    frodoValue = Math.floor((Math.random() * 12) + 1);
    samwiseValue = Math.floor((Math.random() * 12) + 1);
    meriadocValue = Math.floor((Math.random() * 12) + 1);
    peregrinValue = Math.floor((Math.random() * 12) + 1);

    //set targetScore to new value
    currentTarget = Math.floor((Math.random() * 101) + 19);

    //reset current score
    currentScore = 0;
    updateScreen();
}

//update screen
function updateScreen() {
    targetScoreText.text(currentTarget);
    currentScoreText.text(currentScore);
    winsText.text(wins);
    lossesText.text(losses);
}

//check win/loss
function checkGame() {
    if (currentScore === currentTarget) {
        wins++;
        newGame();
    }
    else if (currentScore < currentTarget) {
        return;
    }
    else {
        losses++;
        newGame();
    }
}

//Set new game before we enter event checking
newGame();
// $("#frodo").on("click",function() {
//     console.log(this);
// })
frodo.on("click", function () {
    currentScore += frodoValue;
    updateScreen();
    checkGame();
});
samwise.on("click", function () {
    currentScore += samwiseValue;
    updateScreen();
    checkGame();
});
meriadoc.on("click", function () {
    currentScore += meriadocValue;
    updateScreen();
    checkGame();
});
peregrin.on("click", function () {
    currentScore += peregrinValue;
    updateScreen();
    checkGame();
});