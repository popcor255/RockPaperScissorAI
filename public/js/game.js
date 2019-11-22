
var player_score;
var computer_score;
var player_move;
var computer_move;
var scoreboard = { "player" : 0, "computer" : 0};

function reset(){
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
    
    return "scissors";
}

function updateScoreboard(c_score, p_score){
    player_score = document.getElementById("p_score");
    computer_score = document.getElementById("c_score"); 
    scoreboard["player"] += p_score;
    scoreboard["computer"] += c_score;
    player_score.innerText = scoreboard["player"];
    computer_score.innerText = scoreboard["computer"];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  