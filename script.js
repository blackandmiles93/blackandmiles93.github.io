console.log("linked!");

//set up gameboard so that each box has its own id.
//match up box id with each index value in an array.
//add event listener for each box.

//This takes the parent element and adds the event listener which essentially trickles down to the child elements.

var turnCount = 1;
  $('#container').on('click', function(event){
    if (turnCount % 2 != 0) {
     var player1 = event.target;
     player1.innerText = "X";
    }
    else if (turnCount % 2 === 0) {
      var player2 = event.target;
      player2.innerText = "O";
    }
    console.log(event);
    console.log(turnCount);
    turnCount++;
  });