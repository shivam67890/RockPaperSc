document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload();
});

const players = document.getElementById(`player`);
const comps = document.getElementById(`comp`);
const results = document.getElementById(`result`);

const choice=["rock","paper","scissor"];
function playChoice(option) {
    players.textContent = `Player: ${option}`;
    playGame(option);
}

function playGame(playerChoice) {
    let rad =choice[ Math.floor(Math.random() * 3 )];
    let result;

    if (playerChoice === rad) {
        result = 'Tie';
    } else if  (
        (playerChoice === 'rock' && rad === 'scissor') || 
        (playerChoice === 'paper' && rad === 'rock') || 
        (playerChoice === 'scissor' && rad === 'paper')
    ) {
        result = 'Player won';
    } else {
        result = 'Computer won';
    }

    comps.textContent = `Computer: ${rad}`;
    results.textContent = `Result: ${result}`;
}

document.getElementById(`rock`).onclick = () => playChoice('rock');
document.getElementById(`paper`).onclick = () => playChoice('paper');
document.getElementById(`scissor`).onclick = () => playChoice('scissors');