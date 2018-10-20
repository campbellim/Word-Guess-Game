// assign variables for game (array?)
var gameWordArray = ["Bayonetta", "Zelda", "Skyrim", "Pokemon"]
// randomize what it uses
var gameWord = gameWordArray[Math.floor(Math.random() * gameWordArray.length)];
//global variable
var g;
var count = 0;
//empty array to store guess
var answer = []; 
function startUp()
{
for (var i = 0; i < gameWord.length; i++) {   
        answer[i] = "_";
    }
//start putting in the guesses 
    //adding underscores to the length
   
    //make it a string 
    g = answer.join(" ");
    document.getElementById("answer").innerHTML = g;
}

//put letters typed in the box
function isLetter() {

    var letter = document.getElementById("letter").value;

    if (letter.length > 0) {
        for (var j = 0; j < gameWord.length; j++)
            if (gameWord[i] === letter)
             { answerArray[i] = letter };
    }
}
    
    //how many guesses
    count++;
    document.getElementById("").innerHTML = "Number of guesses" + count;
    document.getElementById("").innerHTML = answerArray.join(" ")

