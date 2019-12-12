/**
 * @alias Global
 * @desc The params on all functions are optional and do not follow a typical coding method like (OOP, imperative, functional). This program is small enough where I had all the states in the global scope and the params were called accordingly. Apologizes.
 * @param {object} player_score object that references DOM where player score is kept
 * @param {object} computer_score object that references DOM where player score is kept
 * @param {String} player_move append label/move from videoAI.js [getPlayerMove]
 * @param {String} computer_move append label/move from game.js [randomMove]
 * @param {Map} scoreboard keeps track of the score in map/JSON
 */

var player_score;
var computer_score;
var player_move;
var computer_move;
var scoreboard = { "player" : 0, "computer" : 0};

/** resets the scoreboard */
function reset(){
    scoreboard = { "player" : 0, "computer" : 0};
}

/** randomMove for computer */
function randomMove(){
    var move = getRandomInt(3);

    if(move == 0){
        return "rock";
    }
    else if(move == 1){
        return "paper";
    }
    
    return "scissors";
}

/** updates the score board and draws it to the DOM */
function updateScoreboard(c_score, p_score){
    player_score = document.getElementById("p_score");
    computer_score = document.getElementById("c_score"); 
    scoreboard["player"] += p_score;
    scoreboard["computer"] += c_score;
    player_score.innerText = scoreboard["player"];
    computer_score.innerText = scoreboard["computer"];
}

/** generates a random number */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  