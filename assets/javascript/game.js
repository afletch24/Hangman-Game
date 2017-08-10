var wins = 0;
var remainingGuesses = 15;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrongGuesses = [];

var partialWord = "------".split("");
var lives ;


// Generate Random Word 
function randomWord(){   
    var wordBank =  ["pistol","puzzle","jumble","jumper","zombie","typing", "enzyme", "quiche","jigsaw", "squeak"];
    var random = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    return random;
};

var word = randomWord();
console.log(word);







document.onkeyup = function(event){
    var userGuesses = event.key;
    var userGuess = userGuesses.toLowerCase();
    console.log(userGuess);

    // if user does not type use a letter
    if(alphabet.indexOf(userGuess) == -1){
        console.log("you're an idiot...");
    }
     
    for(var i=0; i < word.length; i++){
        if(word[i] == userGuess ){
            partialWord[i] = word[i];
        }
    }

    console.log(partialWord.join(" "));
        if(partialWord.indexOf('-') == -1){
            console.log("YOU WIN!");
        }
    
       
    };

    

