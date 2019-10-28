
var cell1 = document.getElementById("cell1");
var cell2 = document.getElementById("cell2");
var cell3 = document.getElementById("cell3");
var cell4 = document.getElementById("cell4");
var cell5 = document.getElementById("cell5");
var cell6 = document.getElementById("cell6");
var cell7 = document.getElementById("cell7");
var cell8 = document.getElementById("cell8");
var cell9 = document.getElementById("cell9");

var ids = document.getElementsByClassName("td");
ids = Array.from(ids);

var winner = document.getElementById("winner");
var table = document.getElementById("board");
var nextPlayer = document.getElementById("nextPlayer");
var reset = document.getElementById("reset");

var cells = [[cell1, cell2, cell3], [cell4, cell5, cell6], [cell7, cell8, cell9]]

var playerX = 'X';
var playerO = 'O';
var turn = true;
var clicks = 0;

var board = [["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"]];

cell1.addEventListener("click", function() {
	listener(cell1, 0, 0);	 
});

cell2.addEventListener("click", function() {
	listener(cell2, 0, 1);
});

cell3.addEventListener("click", function() {
	listener(cell3, 0, 2);
});

cell4.addEventListener("click", function() {
	listener(cell4, 1, 0);
});

cell5.addEventListener("click", function() {
	listener(cell5, 1, 1);
});

cell6.addEventListener("click", function() {
	listener(cell6, 1, 2);
});

cell7.addEventListener("click", function() {
	listener(cell7, 2, 0);
});

cell8.addEventListener("click", function() {
	listener(cell8, 2, 1);
});

cell9.addEventListener("click", function() {
	listener(cell9, 2, 2);
});

//listener function
function listener(cell, row, col){

	clicks += 1;

	if(cell.innerHTML){
		cell.style.pointerEvents = "none";

	}else if(!cell.innerHTML) {

		if(turn === true) {

			cell.innerHTML = playerX;
			board[row][col] = playerX;
			console.log(board);

		if(checkWinner(playerX)){
			
			disableCells();

			// cell.style.pointerEvents = "none";
			winner.innerHTML = "Player X won the game!";
			nextPlayer.style.display = "none";

		} else {
			if(clicks === 9) {
				winner.innerHTML = "Losers! No one won the game!";
			}
		}
		
		turn = !turn;
		nextPlayer.innerHTML = "Player O turn!";


	} else {

			cell.innerHTML = playerO;
			board[row][col] = playerO;
			console.log(board);


			if(checkWinner(playerO)){

				disableCells();

				// cell.style.pointerEvents = "none";
				winner.innerHTML = "Player O won the game!";
				nextPlayer.style.display = "none";
			} else {
			if(clicks === 9) {
				winner.innerHTML = "Losers! No one won the game!";
			}
		}
			turn = !turn;
			nextPlayer.innerHTML = "Player X turn!";

		}		
	}
}

function disableCells() {

	for(var i = 0; i< ids.length; i++) {
		
			ids[i].style.pointerEvents ='none';
	}

}
// Check winner 
// Row:
function checkRow(player) {
  var counter;

  for(var i = 0; i < board.length ; i++){
  	counter = 0;
  	for(var k = 0; k < board[i].length ; k++){

  		if (board[i][k]=== player ){
      	counter ++;
     		if(counter === 3){
       	 return true;
      	}

    	}
  	}
  }
  return false; 
}
//check columns
function checkCol(player) {
	var counter;

  for(var i = 0; i < board.length ; i++){
  	counter = 0;
  	for(var k = 0; k < board[i].length ; k++){
  		
  		if (board[k][i] === player ){
      	counter ++;
     		if(counter === 3){
       	 return true;
      	}
    	}
  	}
  }
  return false; 
}
//Check major Diagonal
function checkMajorDiagonal(player) {
	var counter = 0;

  for(var i = 0; i < board.length ; i++){
  		if (board[i][i]=== player ){
      	counter ++;

     		if(counter === 3){
       	 return true;
      	}
    	}
  }
  return false; 
}
//Check major Diagonal
function checkMinorDiagonal(player) {
	var counter = 0;

  if (board[0][2]=== player ){
    counter ++;
  }
  if (board[1][1]=== player ){
    counter ++;
  }
  if (board[2][0]=== player ){
    counter ++;
  }
  if(counter === 3){
    return true;
  }
  return false; 
}
// check winner
function checkWinner(player){

	if(checkRow(player) || checkCol(player) || checkMajorDiagonal(player) || checkMinorDiagonal(player)) {
		return true
	}
	return false;
}
// reset
reset.addEventListener("click", function() {

	board = [["0","0","0"], ["0","0","0"], ["0","0","0"]];

	for(var i = 0; i< ids.length; i++) {
		
			ids[i].innerHTML = "";
			ids[i].style.pointerEvents ='initial';
		
		
	}

	turn = true;
	clicks = 0;
	winner.innerHTML = "";
	nextPlayer.innerHTML = "Player X turn!";

});


