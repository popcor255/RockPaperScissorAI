
window.onload = function (){
  if (annyang) {
      // Let's define our first command. First the text we expect, and then the function it should call
      var commands = {
        'rock paper scissor shoot': function() {
          var computer_move = document.getElementById("computer_move");
          computer_move.innerText = randomMove();
          updateScoreboard();
          console.log("moved made!");
        }
      };
    
      // Add our commands to annyang
      annyang.addCommands(commands);
    
      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
  }
}