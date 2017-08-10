var wins = 0;
var remainingGuesses = 15;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongGuesses = [];

var partialWord = "------".split("");
console.log(partialWord);


var lives ;

// Get Elements
var showLives = document.getElementById("myLives");

// User presses key to start.
function startgame () {
    remainingGuesses: 15;
    
    
}

// // blanks
// correctGuesses.innerHTML = partialWord();
// var correctGuesses = document.getElementById(" ");


// Generate Random Word 
function randomWord(){   
    var wordBank =  ["pistol","puzzle","jumble","jumper","zombie","typing", "enzyme", "quiche","jigsaw", "squeak"];
    var random = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    return random;
};


var word = randomWord();
console.log(word);




// start
document.onkeyup = function(event){
    var userGuesses = event.key;
    var userGuess = userGuesses.toLowerCase();
    console.log(userGuess);
  

    // if user does not type a letter
    if(alphabet.indexOf(userGuess) == -1){
        console.log("you're an idiot...");
    }
    
    if(word.indexOf(userGuess) === -1){

        wrongGuesses.push(userGuess);
        document.getElementById("box").innerHTML = wrongGuesses;
        
        document.getElementById("guessesRemaining").innerHTML =remainingGuesses;
        remainingGuesses --;

       if(remainingGuesses == -1){
           document.getElementById("guessesRemaining").innerHTML =("Game over");
       }

    }

    else
    {
        
        // if the user guess if part of the word...
        for(var i=0; i < word.length; i++){
            if(word[i] == userGuess ){
            partialWord[i] = word[i];
            }
        }

        word.innerHTML=partialWord.join(" ");
        console.log(partialWord.join (" "));
        document.getElementById("currentGuesses").innerHTML =partialWord;
    }
   
    if(partialWord.indexOf('-') == -1){
        console.log("you win!");
        wins++;
        alert("You Win!");

    }
    



    
    
};
    