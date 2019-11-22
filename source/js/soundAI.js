
window.onload = function() {

  function startContinuousArtyom(){
    artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"en-GB",// A lot of languages are supported. Read the docs !
            continuous:true,// Artyom will listen forever
            listen:true, // Start recognizing
            debug:false, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
  }

  var artyom = new Artyom();
  startContinuousArtyom();

  // Add a single command
  var commandHello = {
      indexes:["rock paper scissors shoot", "rock paper scissors shoot"], // These spoken words will trigger the execution of the command
      action:function(){ // Action to be executed when a index match with spoken word
        var computer_label = document.getElementById("computer_move");
        //label variable from videoAI.js
        var computer_move = randomMove();
        var player_move = getPlayerMove();
        var doesPlayerWin = judge(computer_move, player_move);
        
        if(doesPlayerWin == 1){
          updateScoreboard(1, 0);
        }
        else if(doesPlayerWin == -1){
          updateScoreboard(0, 1);
        }
        else if(doesPlayerWin == 0){
          updateScoreboard(0, 0);
        }

        computer_label.innerText = computer_move;
        artyom.say("I played " + computer_move);
      }
  };

  artyom.addCommands(commandHello);
}

function judge(computer, player){

  var permutations = [[player,computer], [computer, player]];

  for(var i = 0; i < permutations.length; i++){
    var p1 = permutations[i][0];
    var p2 = permutations[i][1];
    var isHuman = i ? 1 : -1;

    if(p1 == "scissors"){
      if(p2 == "rock"){
        return 1 * isHuman;
      }
      else if(p2 == "paper"){
        return -1 * isHuman;
      }
      else{
        return 0;
      }
    }

    if(p1 == "rock"){
      if(p2 == "paper"){
        return 1 * isHuman;
      }
      else if(p2 == "scissors"){
        return -1 * isHuman;
      }
      else{
        return 0;
      }
    }

    if(p1 == "paper"){
      if(p2 == "scissors"){
        return 1 * isHuman;
      }
      else if(p2 == "rock"){
        return -1 * isHuman;
      }
      else{
        return 0;
      }
    }
  }
}