console.log("linked!");

//set up gameboard so that each box has its own id.

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

    var win1 = document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box1').innerText === document.querySelector('#box2').innerText;
    var win2 = document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box5').innerText;
    var win3 = document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box7').innerText === document.querySelector('#box8').innerText;
    var win4 = document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box3').innerText === document.querySelector('#box6').innerText;
    var win5 = document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box7').innerText;
    var win6 = document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box5').innerText === document.querySelector('#box8').innerText;
    var win6 = document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box6').innerText;
    var win6 = document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box8').innerText;
  
  if (player = win1) {
    console.log("winner!");
  }

  });