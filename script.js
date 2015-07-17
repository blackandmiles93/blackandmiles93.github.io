console.log("linked!");

//set up gameboard so that each box has its own id.
//match up box id with each index value in an array.
//add event listener for each box.

//This takes the parent element and adds the event listener which essentially trickles down to the child elements.

//Creating the players essentially by turnCount. Each turn will cause the box innerText to be either and "X" or an "O".
var turnCount = 1;
  $('#container').on('click', function(event){
    var player = event.target; //the target of the event are the boxes.
    if (player.innerText === "") { 
      if (turnCount % 2 != 0) { //odd turns are "X".
        player.innerText = "X";

    //$(player).stopPropagation();
      }
      else if (turnCount % 2 === 0) { //Even turns are "O".
        player.innerText = "O";

    //$(player).stopPropagation();
      };
    };

    console.log(event);
    console.log(turnCount);
    turnCount++;
  });

  //if a box is not undefined,
  //then, cannot target event.

  // var winCombo = function() {
  //   if 
  // }

