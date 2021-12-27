'use strict';
/*console.log(document.querySelector('.message').textContent); 

document.querySelector('.score').textContent= 10;

// document.querySelector('.guess').value;

*/

let totalTries = 20;


let secret = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

const displayMsg = function (message) {
    document.querySelector('.message').textContent = message;
}



// Again Button Functionality(Reset)

    document.querySelector('.again').addEventListener('click', function () {
    totalTries = 20;
    secret = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = totalTries;
    displayMsg('Start guessing...');
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


});

// Check Button Functionality
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
        displayMsg('👀 No Number!');
    }
    //win
    else if (guess === secret) {
        displayMsg('🎉 Correct Number!');
        document.querySelector('.number').textContent = secret;

        if (totalTries > highScore) {
            highScore = totalTries;
            document.querySelector('.highscore').textContent = highScore;

        }


        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

    }
    //guess is wrong
    else if (guess !== secret) {
        if (totalTries > 1) {
            displayMsg(guess > secret ? '🚀 Too High!' : '🌂 Too low!');
            totalTries--;
            document.querySelector('.score').textContent = totalTries;
        }


        else {
            displayMsg('😢 You lost the game');
            document.querySelector('.score').textContent = 0;

        }
    }
});