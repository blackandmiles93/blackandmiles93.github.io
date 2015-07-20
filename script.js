console.log("linked!");

//set up gameboard so that each box has its own id.

//This takes the parent element and adds the event listener which essentially trickles down to the child elements.

//Creating the players essentially by turnCount. Each turn will cause the box innerText to be either and "X" or an "O".
var turnCount = 1;
var singlePlayerButton = $('.mode1');
var multiPlayerButton = $('.mode2');
var computerMove = false;

$('.mode2').on('click', function() {
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
      }
    }
    else if (player != "") {
      turnCount--; //This stops the turnCount from continuing upwards which would disrupt the order of "X" and "O".
    };

    console.log(event);
    console.log(turnCount);
    turnCount++;

    // var winConditions = function() {
      /* Horizontal
      var win1 = document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box1').innerText === document.querySelector('#box2').innerText;
      var win2 = document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box5').innerText;
      var win3 = document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box7').innerText === document.querySelector('#box8').innerText;
      */
      /* Vertical
      var win4 = document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box3').innerText === document.querySelector('#box6').innerText;
      var win5 = document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box7').innerText;
      var win6 = document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box5').innerText === document.querySelector('#box8').innerText;
      */
      /* Diagnol
      var win7 = document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box6').innerText;
      var win8 = document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box8').innerText;
      */
      console.log("player",player.innerText);
      if (document.querySelector('#box0').innerText != "" && document.querySelector('#box1').innerText != "" && document.querySelector('#box2').innerText != "") {
        if(document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box1').innerText === document.querySelector('#box2').innerText) {
          alert("Winner! Top Row");
        }
      }
      else if (document.querySelector('#box3').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box5').innerText != "") {
        if (document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box5').innerText) {
          alert("winner! second row");
        }
      }
      else if (document.querySelector('#box6').innerText != "" && document.querySelector('#box7').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box7').innerText === document.querySelector('#box8').innerText) {
          alert("winner!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box3').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box3').innerText === document.querySelector('#box6').innerText) {
          alert("winner!");
        }
      }
      else if (document.querySelector('#box1').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box7').innerText != "") {
        if (document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box7').innerText) {
          alert("winner!");
        }        
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box5').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box5').innerText === document.querySelector('#box8').innerText) {
          alert("winner!");
        }
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box6').innerText) {
          alert("winner!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box8').innerText) {
          alert("winner!");
        }
      }
      //Here the win conditions are set. They cover all horizontal, vertical, and diagnol combinations.
  });
      
});

$('.mode1').on('click', function() {
  $('#container').on('click', function(event) {
    var player = event.target
    if (player.innerText === "") {
      if (turnCount % 2 != 0) {
        player.innerText = "X";
      }
    };

  });
});



//Fix winning conditions so that they actually work
//Set up AI
//CSS







