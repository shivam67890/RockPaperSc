const series = ['rock', 'paper', 'scissor'];
const name = window.prompt(`Enter your name`);
const players = document.getElementById('player');
const comps = document.getElementById('comp');
const results = document.getElementById('result');
const score = document.getElementById('scores');
let scre = 0;
const highscore = document.getElementById('highscores');
let max = 0;
const winSound = document.getElementById('winsound');
const buttons = {
    rock: document.getElementById('rock'),
    paper: document.getElementById('paper'),
    scissor: document.getElementById('scissor')
};

function removeWinnerEffect() {
    Object.values(buttons).forEach(button => {
        button.classList.remove('winner');
    });
}

function newgame(ele) {
    let rnd = series[Math.floor(Math.random() * 3)];
    players.textContent = `Player: ${ele}`;
    comps.textContent = `Computer: ${rnd}`;
    let result;

    removeWinnerEffect(); // Remove winner effect from all buttons

    if (rnd === ele) {
        result = `Game TIE`;
    } else if (
        (ele === 'rock' && rnd === 'scissor') ||
        (ele === 'paper' && rnd === 'rock') ||
        (ele === 'scissor' && rnd === 'paper')
    ) {
        result = `You won🥳🥳🥳`;
        scre++;
        winSound.play(); // Play winning sound
        buttons[ele].classList.add('winner'); // Add winner effect to the winning button
    } else {
        result = `You Lost😭😭😭`;
        scre--;
        buttons[rnd].classList.add('winner'); // Add winner effect to the computer's winning choice
    }

    if (scre > max) {
        max = scre;
    }

    results.textContent = `~${result}`;
    score.textContent = `Current Score~  ${scre}`;
    highscore.textContent = `Highscore~  ${max}`;
}

buttons.rock.onclick = () => newgame('rock');
buttons.paper.onclick = () => newgame('paper');
buttons.scissor.onclick = () => newgame('scissor');

// Initialize scores
score.textContent = `Current Score~  ${scre}`;
highscore.textContent = `Highscore~  ${max}`;