console.log("linked!");

//set up gameboard so that each box has its own id.

//This takes the parent element and adds the event listener which essentially trickles down to the child elements.

//Creating the players essentially by turnCount. Each turn will cause the box innerText to be either and "X" or an "O".
var turnCount = 1;
var singlePlayerButton = $('.mode1');
var multiPlayerButton = $('.mode2');
var guessCount = 0;

$('.mode2').on('click', function() {
  $('#container').on('click', function(event) {
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
    //    // Horizontal
    //   var win1 = document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box1').innerText === document.querySelector('#box2').innerText;
    //   var win2 = document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box5').innerText;
    //   var win3 = document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box7').innerText === document.querySelector('#box8').innerText;
      
    //    // Vertical
    //   var win4 = document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box3').innerText === document.querySelector('#box6').innerText;
    //   var win5 = document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box7').innerText;
    //   var win6 = document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box5').innerText === document.querySelector('#box8').innerText;
      
    //    // Diagnol
    //   var win7 = document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box6').innerText;
    //   var win8 = document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box4').innerText === document.querySelector('#box8').innerText;
      
    //   console.log("player",player.innerText);
      
    //   return winConditions();
    // }
    // winConditions();

      if (document.querySelector('#box0').innerText != "" && document.querySelector('#box1').innerText != "" && document.querySelector('#box2').innerText != "") {
        if(document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box0').innerText === document.querySelector('#box2').innerText) {
          alert("Winner! Row one!");
        }
      }
      else if (document.querySelector('#box3').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box5').innerText != "") {
        if (document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box3').innerText === document.querySelector('#box5').innerText) {
          alert("Winner! Two row!");
        }
      }
      else if (document.querySelector('#box6').innerText != "" && document.querySelector('#box7').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box6').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Row third!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box3').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box0').innerText === document.querySelector('#box6').innerText) {
          alert("Winner! Column one!");
        }
      }
      else if (document.querySelector('#box1').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box7').innerText != "") {
        if (document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box1').innerText === document.querySelector('#box7').innerText) {
          alert("Winner! Column two!");
        }        
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box5').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box2').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Column three!");
        }
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box2').innerText === document.querySelector('#box6').innerText) {
          alert("Winner! First Diagnol!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box0').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Second Diagnol!");
        }
      }
      //Here the win conditions are set. They cover all horizontal, vertical, and diagnol combinations.
  });
      
});

$('.mode1').on('click', function() {
  $('#container').on('click', function(event) {
    var player = event.target
    if (player.innerText === "") {
      player.innerText = "X";
    };
    guessCount++;
    console.log(event);
//Computer Move
    if (guessCount <= 8) {
      var random = Math.floor(Math.random() * 9);
      var boxes = "#box" + random; // This concatenates the random values generated between 0 and 8 with the id of the boxes so that the computer can link them together.
      console.log("outside loop " + boxes);
      while (document.querySelector(boxes).innerText != "") {
        random = Math.floor(Math.random() * 9);
        boxes = "#box" + random;
        console.log("inside loop " + boxes);
      }
      guessCount++;
      document.querySelector(boxes).innerText = "O"; // This allows the computer to randomly select a spot of the 9 available and place an "O" there.
      if (document.querySelector('#box0').innerText != "" && document.querySelector('#box1').innerText != "" && document.querySelector('#box2').innerText != "") {
        if(document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box0').innerText === document.querySelector('#box2').innerText) {
          alert("Winner! Row one!");
        }
      }
      else if (document.querySelector('#box3').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box5').innerText != "") {
        if (document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box3').innerText === document.querySelector('#box5').innerText) {
          alert("Winner! Two row!");
        }
      }
      else if (document.querySelector('#box6').innerText != "" && document.querySelector('#box7').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box6').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Row third!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box3').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box0').innerText === document.querySelector('#box6').innerText) {
          alert("Winner! Column one!");
        }
      }
      else if (document.querySelector('#box1').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box7').innerText != "") {
        if (document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box1').innerText === document.querySelector('#box7').innerText) {
          alert("Winner! Column two!");
        }        
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box5').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box2').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Column three!");
        }
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box2').innerText === document.querySelector('#box6').innerText) {
          alert("Winner! First Diagnol!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box0').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Second Diagnol!");
        }
      }
    }

      if (document.querySelector('#box0').innerText != "" && document.querySelector('#box1').innerText != "" && document.querySelector('#box2').innerText != "") {
        if(document.querySelector('#box0').innerText === document.querySelector('#box1').innerText && document.querySelector('#box0').innerText === document.querySelector('#box2').innerText) {
          alert("Winner! Row one!");
        }
      }
      else if (document.querySelector('#box3').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box5').innerText != "") {
        if (document.querySelector('#box3').innerText === document.querySelector('#box4').innerText && document.querySelector('#box3').innerText === document.querySelector('#box5').innerText) {
          alert("Winner! Two row!");
        }
      }
      else if (document.querySelector('#box6').innerText != "" && document.querySelector('#box7').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box6').innerText === document.querySelector('#box7').innerText && document.querySelector('#box6').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Row third!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box3').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box3').innerText && document.querySelector('#box0').innerText === document.querySelector('#box6').innerText) {
          alert("Winner! Column one!");
        }
      }
      else if (document.querySelector('#box1').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box7').innerText != "") {
        if (document.querySelector('#box1').innerText === document.querySelector('#box4').innerText && document.querySelector('#box1').innerText === document.querySelector('#box7').innerText) {
          alert("Winner! Column two!");
        }        
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box5').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box5').innerText && document.querySelector('#box2').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Column three!");
        }
      }
      else if (document.querySelector('#box2').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box6').innerText != "") {
        if (document.querySelector('#box2').innerText === document.querySelector('#box4').innerText && document.querySelector('#box2').innerText === document.querySelector('#box6').innerText) {
          alert("Winner! First Diagnol!");
        }
      }
      else if (document.querySelector('#box0').innerText != "" && document.querySelector('#box4').innerText != "" && document.querySelector('#box8').innerText != "") {
        if (document.querySelector('#box0').innerText === document.querySelector('#box4').innerText && document.querySelector('#box0').innerText === document.querySelector('#box8').innerText) {
          alert("Winner! Second Diagnol!");
        }
      }
  });
});







