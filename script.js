console.log("linked!");

var player1;
var player2;
var computer;

//set up gameboard so that each box has its own id.
//match up box id with each index value in an array.
//
//add event listener for each box.

// var boxes = document.querySelectorAll(".box").addEventListener('click', function(event){
// //collects all of the boxes and places them into a single container and I can iterate through them.
//   console.log("clicked!");
// });

//This takes the parent element and adds the event listener which essentially trickles down to the child elements.
document.querySelector("#container").addEventListener('click', function(event){
 document.getElementsByClassName("box").textContent = "X"; //Here I want to change the inner text of the box divs to X when clicked.
});

