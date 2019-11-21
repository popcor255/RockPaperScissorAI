
var player_score;
var computer_score;
var player_move;
var computer_move;
var scoreboard;

function reset(){
    player_score = document.getElementById("p_score");
    computer_score = document.getElementById("c_score");
    scoreboard = { "player" : 0, "computer" : 0};
}

function randomMove(){
    var move = getRandomInt(3);

    if(move == 0){
        return "rock";
    }
    else if(move == 1){
        return "paper";
    }
    
    return "scissor";
}

function updateScoreboard(){
    player_score.innerText = scoreboard["player"];
    computer_score.innerText = scoreboard["computer"];
}

window.onload = function (){
    reset();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  