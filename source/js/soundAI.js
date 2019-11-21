
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
        var computer_move = document.getElementById("computer_move");
        //label variable from videoAI.js
        document.getElementById("player_move").innerText = label;
        var move = randomMove();
        computer_move.innerText = move;
        updateScoreboard();  
        artyom.say("I played " + move);
      }
  };

  artyom.addCommands(commandHello);
}