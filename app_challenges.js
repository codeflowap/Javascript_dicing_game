/* NEW RULES

1- The player loses its ENTIRE score if he rolls two 6 in a row and it is the next player turn. 



var scores, roundscores, activePlayer, dice, gamePlaying;

// initialize the game
init();


//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//document.getElementById("current-" + activePlayer).textContent = dice;
// document.getElementById("current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';


document.querySelector('.btn-roll').addEventListener('click', function () {
    
    //using state variable to finish the game
    if (gamePlaying) {
        
    // 1. Random number
    dice = Math.floor(Math.random() * 6) + 1;
    console.log('dice');
    // 2. Display the results
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';
    
    
    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        
        // Add score
        roundScore += dice;
        document.getElementById("current-" + activePlayer).textContent = roundScore;

    }
        else {
            nextPlayer();
        }
        }
})
        
    
    


/* HOLD button ***************************************************************

****************************************************************************/

document.querySelector('.btn-hold').addEventListener('click', function () {
    
    //using state variable to finish the game
    if (gamePlaying) {

    // Add current score to global score
    scores[activePlayer] += roundScore;
    console.log('score = ' + scores[activePlayer]);
        
    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    
     // Check if player win the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
        document.querySelector('.dice').style.display = 'none';
        
        // For w/o using state variables to finish the game
        // document.querySelector('.btn-roll').style.display = 'none';
        // document.querySelector('.btn-hold').style.display = 'none';
        
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        gamePlaying = false;
    }
    
    else {
    // Next Player
     nextPlayer();
    }   
    }
  
    
/* ********************************************************/
    
})

function nextPlayer() {
            // Next player
            // ternary opertor
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            // toggle between the wrappers by making them active 
            /*
            if (activePlayer === 0) {
                document.querySelector('.player-1-panel').classList.remove('active');
                document.querySelector('.player-0-panel').classList.add('active');
            }
            
            else {
                document.querySelector('.player-0-panel').classList.remove('active');
                document.querySelector('.player-1-panel').classList.add('active');
            }
            */
            
            // Updating UI
            document.querySelector('#current-0').textContent = '0';
            document.querySelector('#current-1').textContent = '0';

    
            // toggle between the wrappers by making them active easier method
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            
            // hide the dice
            document.querySelector('.dice').style.display = 'none';
            roundScore = 0;
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Plater 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
        
    // For w/o using state variables to finish the game
    // document.querySelector('.btn-roll').style.display = 'block';
    // document.querySelector('.btn-hold').style.display = 'block';

}



















