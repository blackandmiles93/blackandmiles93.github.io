console.log("linked!");

// var player1;
// var player2;
// var computer;
var turnCount = 0;
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
$('#container').on('click', function(){
  if (turnCount === 0) {
    $('#box0').text("X");
    $('#box1').text("X");
    $('#box2').text("X");
    $('#box3').text("X");
    $('#box4').text("X");
    $('#box5').text("X");
    $('#box6').text("X");
    $('#box7').text("X");
    $('#box8').text("X");
    //This seems to fill all of the boxes with an X no matter which one you click at the same time.
    //Maybe create an array and grab each id of each box and push it in the new array?
    turnCount++;
    console.log(turnCount);
  };
  //Here continue else if statements until all 9 turns are completed and alternate between "X" and "O" for each turn. Doing this until I can figure out a faster less verbose way.
});



