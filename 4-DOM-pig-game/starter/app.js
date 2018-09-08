/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var roundScore = 0
var globalScore = [0,0];
var activePlayer = 0;
var previousDice = 0;

resetTheGame();

document
     .querySelector('.btn-roll')
     .addEventListener('click', rollDiceAndUpdateRoundScores);

document
    .querySelector('.btn-hold')
    .addEventListener('click', holdPoints);

document
    .querySelector('.btn-new')
    .addEventListener('click', resetTheGame); 

function resetTheGame(){
    hideDice();
    resetRoundScore();
    resetAllGlobalScores();   
    showRollAndHoldButtons();
    setPlayersName();
}    

function hideDice(){
    document.querySelector('.dice').style.display = 'none';
}

function showRollAndHoldButtons(){
    document.querySelector('.btn-roll').style.display = 'initial';
    document.querySelector('.btn-hold').style.display = 'initial';
}

function setPlayersName(){
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
}

function getPassivePlayer(){
    return activePlayer === 0 ? 1 : 0;
}     

function switchPlayerIfRequired(dice) {
    if(dice === 1){
        resetRoundScore();
        switchPlayer();
    }
}

function switchPlayerAndResetGlobalScoreIfAnotherSix(dice){
    if(shouldResetGlobalScoreOfActivePlayer(dice)){
        resetGlobalScoreOfActivePlayer();
        resetRoundScore();
        switchPlayer();
    }
}

function shouldResetGlobalScoreOfActivePlayer(dice){
    return dice === 6 && previousDice === 6;
}


function switchPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.querySelector('.player-' + getPassivePlayer() + '-panel').classList.remove('active');
}

function resetRoundScore(){
    roundScore = 0;
    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;
}

function updateRoundScore(dice){
    if(dice !== 1) {
        roundScore += dice;       
    }else{
        roundScore = 0;
    }

    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    document.querySelector('#current-' + getPassivePlayer()).textContent = 0;
}

function updateGlobalScore(){
    globalScore[activePlayer] += roundScore;
    document.getElementById('score-'+ activePlayer).textContent = globalScore[activePlayer];
}

function resetAllGlobalScores(){
    globalScore = [0,0];
    document.getElementById('score-'+ activePlayer).textContent = globalScore[activePlayer];
    document.getElementById('score-'+ getPassivePlayer()).textContent = globalScore[getPassivePlayer()];
};  

function resetGlobalScoreOfActivePlayer(){
    globalScore[activePlayer] = 0;
    document.getElementById('score-'+ activePlayer).textContent = globalScore[activePlayer];
}

function updateDiceImage(dice) {
    var diceElement = document.querySelector('.dice');
    diceElement.style.display = 'initial';
    diceElement.src = 'dice-' + dice + '.png';
}

function finishGame() {
    document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer+1) + ' wins!';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
}

function hasActivePlayerWon() {
    return globalScore[activePlayer] >= 20;
}

function rollDiceAndUpdateRoundScores() {
    var dice = Math.floor(Math.random() * 6) + 1;
    updateDiceImage(dice);
    updateRoundScore(dice);
    switchPlayerIfRequired(dice);
    switchPlayerAndResetGlobalScoreIfAnotherSix(dice);
    previousDice = dice;
}     

function holdPoints(){
    updateGlobalScore();
    resetRoundScore();

    if(hasActivePlayerWon()){
        finishGame();
    } else{
        switchPlayer();  
    }
}

