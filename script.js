console.log("linked!");

//set up gameboard so that each box has its own id.

//This takes the parent element and adds the event listener which essentially trickles down to the child elements.

//Creating the players essentially by turnCount. Each turn will cause the box innerText to be either and "X" or an "O".
var turnCount = 1;
var singlePlayerButton = $('.mode1');
var multiPlayerButton = $('.mode2');
var computerMove = false;


  $('#container').on('click', function(event){
    var player = event.target; //the target of the event are the boxes.
    if (player.innerText === "") { 
      if (turnCount % 2 != 0) { //odd turns are "X".
        player.innerText = "X";

    //$(player).stopPropagation();
      }
      else if (turnCount % 2 === 0) { //Even turns are "O".
        var player = event.target
        player.innerText = "O";

    //$(player).stopPropagation();
      }
    }
    else if (player != "") {
      turnCount--; //This stops the turnCount from continuing upwards which would disrupt the order of "X" and "O".
    };

    console.log(event);
    console.log(turnCount);
    turnCount++;


  //Redo this as if else statements instead of using "||".
  });

  var winConditions = function() {
    
    var win1 = document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box1').innerText === document.querySelector('#box2').innerText;
    var win2 = document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box5').innerText;
    var win3 = document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box7').innerText === document.querySelector('#box8').innerText;
    var win4 = document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box3').innerText === document.querySelector('#box6').innerText;
    var win5 = document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box7').innerText;
    var win6 = document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box5').innerText === document.querySelector('#box8').innerText;
    var win7 = document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box6').innerText;
    var win8 = document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box8').innerText;

    if (player1 = win1) {
      alert("Player 1 wins!");
    }
  };








