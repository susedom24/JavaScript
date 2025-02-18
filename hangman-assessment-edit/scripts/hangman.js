// declare and initialize array
let game = ["AXOLOTL", "FOX", "FROG", "CAT", "OTTER", "TURTLE", "BUNNY", "CAT", "SQUIRREL", "DOG"];
let choice = Math.floor(Math.random() * 10);
let answer = game[choice];
let myLength = answer.length;
let display = [myLength];
let win = myLength;
let letters = answer.split('');
let attemptsLeft = 6;
let output = '';
let userLetter = '';
let found = false;
let guessedLetters = [];

function setup() {
    alert(answer);
    for (let i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("word").innerHTML = output;
    updateHangman();
}

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    output = '';
    userLetter = document.getElementById("guess").value;
    document.getElementById("guess").value = ''; 


    if (guessedLetters.includes(userLetter.toUpperCase())) {
        alert("You already guessed that one.");
        return; 
    }

    guessedLetters.push(userLetter.toUpperCase());

    found = false;

    for (let c = 0; c < answer.length; c++) {
            //alert(letters[c]);
        if (userLetter.toUpperCase() == letters[c]) {
            display[c] = userLetter.toUpperCase();
            win--;
            found = true;
        }
        output = output + display[c] + ' ';
    }
    if (found == false){
        attemptsLeft --;
        updateHangman();
    } 

    document.getElementById("word").innerHTML = output;
    output = '';

    document.getElementById("guessedLetters").innerHTML = 'Guessed Letters: ' + guessedLetters.join(", ");

    if (win < 1) {
        document.getElementById("guesses").innerHTML = 'YOU WIN!!!';
    } else if (attemptsLeft < 1) {
        document.getElementById("guesses").innerHTML = 'YOU LOSE!!!';
    } else {
        document.getElementById("guesses").innerHTML = 'You have ' + attemptsLeft + ' guesses left';
    }
});

function updateHangman() {
    const hangman = document.getElementById("hangman");

    switch (attemptsLeft) {
        case 5: 
            hangman.src = "images/02.png"
            break;

        case 4:
            hangman.src = "images/03.png"
            break;
        
        case 3: 
            hangman.src = "images/04.png"
            break;
        
        case 2:
            hangman.src = "images/05.png"
            break;
        
        case 1:
            hangman.src = "images/06.png"
            break;

        case 0:
            hangman.src = "images/07.png"
            break;
    }
}