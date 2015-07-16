console.log("linked!");

// var player1;
// var player2;
// var computer;

//set up gameboard so that each box has its own id.
//match up box id with each index value in an array.
//
//add event listener for each box.

//This takes the parent element and adds the event listener which essentially trickles down to the child elements.
//Here I want to set up a conditional in where when a player clicks on a square, their respective symbol; X or O, appears.
// document.querySelector("#container").addEventListener('click', function(event){
//   var turnCount = 0;
//   if (turnCount === 0;) {

//   }
// });

//Here I'm trying to establish the turns.
// $('.box').on('click', function(event){
//   console.log(event);
var turns = function(){ 
  for (var turnCount = 0; turnCount < 9; turnCount++) {
    if (turnCount % 2 != 0){
      $('#box0').on('click', function(event){
        $('#box0').text("X");
      });
      $('#box1').on('click', function(event){
        $('#box1').text("X");
      });
      $('#box2').on('click', function(event){
        $('#box2').text("X");
      })
      $('#box3').on('click', function(event){
        $('#box3').text("X");
      })  
      $('#box4').on('click', function(event){
        $('#box4').text("X");
      })
      $('#box5').on('click', function(event){
        $('#box5').text("X");
      })
      $('#box6').on('click', function(event){
        $('#box6').text("X");
      })
      $('#box7').on('click', function(event){
        $('#box7').text("X");
      })
      $('#box8').on('click', function(event){
        $('#box8').text("X");
      })
      //This seems to work...but, there has to be a less verbose way.
      console.log(turnCount);
    }
    else if (turnCount % 2 === 0) {
      $('#box0').on('click', function(event){
        $('#box0').text("O");
      });
      $('#box1').on('click', function(event){
        $('#box1').text("O");
      });
      $('#box2').on('click', function(event){
        $('#box2').text("O");
      });
      $('#box3').on('click', function(event){
        $('#box3').text("O");
      });  
      $('#box4').on('click', function(event){
        $('#box4').text("O");
      });
      $('#box5').on('click', function(event){
        $('#box5').text("O");
      });
      $('#box6').on('click', function(event){
        $('#box6').text("O");
      });
      $('#box7').on('click', function(event){
        $('#box7').text("O");
      });
      $('#box8').on('click', function(event){
        $('#box8').text("O");
      });
    }
  } 
};
turns();
  //Here continue else if statements until all 9 turns are completed and alternate between "X" and "O" for each turn. Doing this until I can figure out a faster less verbose way.
// });
