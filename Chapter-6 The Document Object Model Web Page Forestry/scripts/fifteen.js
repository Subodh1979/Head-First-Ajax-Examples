window.onload = initPage;
//	alert("Browser Started");
function initPage() {
	//get the puzzleGrid
  var table = document.getElementById("puzzleGrid");
  //get the tag i.e td i.e cell numbers
  var cells = table.getElementsByTagName("td");
  for (var i=0; i<cells.length; i++) {
    var cell = cells[i];
    cell.onclick = tileClick;
  }
}

function tileClick() {
//	alert("tile clicked");
  if (cellIsEmpty(this)) {
    // User clicked on an empty cell
    alert("Please click on a numbered tile.");
    return;
  }

  var currentRow = this.id.charAt(4);
  var currentCol = this.id.charAt(5);

  // Check above
  if (currentRow > 1) {
    var testRow = Number(currentRow) - 1;
    var testCellId = "cell" + testRow + currentCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
//    	alert("above");
    	//change tiles
      swapTiles(this, testCell);
      return;
    }
  }

  // Check below
  if (currentRow < 4) {
    var testRow = Number(currentRow) + 1;
    var testCellId = "cell" + testRow + currentCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
//    	alert("below");
    	//change tiles
      swapTiles(this, testCell);
      return;
    }
  }

  // Check to the left
  if (currentCol > 1) {
    var testCol = Number(currentCol) - 1;
    var testCellId = "cell" + currentRow + testCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
    	//change tiles
//    	alert("left");
      swapTiles(this, testCell);
      return;
    }			
  }

  // Check to the right
  if (currentCol < 4) {
    var testCol = Number(currentCol) + 1;
    var testCellId = "cell" + currentRow + testCol;
    var testCell = document.getElementById(testCellId);
    if (cellIsEmpty(testCell)) {
    	//change tiles
//    	alert("right");
      swapTiles(this, testCell);
      return;
    }
  }

  // The clicked-on cell is locked
  alert("Please click a tile next to an empty cell.");
}

function cellIsEmpty(cell) {
  var image = cell.firstChild;
  while (image.nodeName == "#text") { 
	  image = image.nextSibling; 
	  }
  if (image.alt == "empty")
    return true; 
  else 
    return false; 
}

function swapTiles(selectedCell, destinationCell) {

  selectedImage = selectedCell.firstChild;
  while (selectedImage.nodeName == "#text") {
    selectedImage = selectedImage.nextSibling;
  }
  destinationImage = destinationCell.firstChild;
  while (destinationImage.nodeName == "#text") {
    destinationImage = destinationImage.nextSibling;
  }
  //change selected cell to destination cell
  selectedCell.appendChild(destinationImage);
  //change destination cell to selected cell
  destinationCell.appendChild(selectedImage);

  if (puzzleIsComplete()) {
    win();
  }
}

function puzzleIsComplete() {
  var tiles = document.getElementById("puzzleGrid").getElementsByTagName("img");
  var hash = "";
  for (var x = 0; x < tiles.length; x++) {
    var num = tiles[x].src.substr(-6,2);
    if (num != "ty")
      hash += num;
  }
  //checking puzzle complete or not
  if (hash == "010203040506070809101112131415") 
    return true; 

  return false;
}

function win() {
	//change puzzle image or gif
  document.getElementById('puzzleGrid').className = 'win';
}

