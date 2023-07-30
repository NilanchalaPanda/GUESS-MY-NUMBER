'use strict';

let number = Math.round((Math.random() * 20) + 1);
console.log(number);
let score = 20;
let highscore = 0;

//FUNCTION to display message : 
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {
    let guess = Number(document.querySelector('.guess').value);
    // let guess = (document.querySelector('.guess').value);

    //No input : 
    if (!guess) {
        // document.querySelector('.message').textContent = "🚫 NO NUMBER";
        displayMessage("🚫 NO NUMBER");
    }

    //When Player WINS:
    else if (guess === number) {
        // document.querySelector('.message').textContent = "🎉 Correct Answer";
        displayMessage("🎉 Correct Answer");
        document.querySelector('.number').textContent = number;

        if (highscore < score) {
            document.querySelector('.highscore').textContent = score;
        }

        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = '30rem';
    }

    //REFACTORING OUR CODE:
    //When guess is DIFFERENT : 
    else if (guess !== number) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > number ? "📈 Too high" : "📉 Too low";
            displayMessage(guess > number ? "📈 Too high" : "📉 Too low");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = "⚡ Try again";
            displayMessage("⚡ Try again");
            document.querySelector('.score').textContent = 0;
        }
    }

    //Guess is to high:
    // else if (guess > number) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "📈 Too high";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "⚡ Try again";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

    //Guess is too LOW:
    // else {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "📉 Too low";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = "⚡ Try again";
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});


// Restroing the GAME when AGAIN btn is clicked:

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    number = Math.round((Math.random() * 20) + 1);

    // document.querySelector('.message').textContent = "Start guessing..."
    displayMessage("Start guessing...");

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = ' ';

    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
});


// To manipulate styles in js:
/* 
1) "style" keyword is used.
2) All things are written inside string.
3) Camel casing is used for attribute names.
*/