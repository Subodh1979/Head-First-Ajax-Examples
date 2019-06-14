window.onload = initPage;
//	alert("Browser Started");
var frequencyTable = new Array(
  "a", "a", "a", "a", "a", "a", "a", "a", "b", "c", "c", "c", "d", "d", "d",
  "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g",
  "g", "h", "h", "h", "h", "h", "h", "i", "i", "i", "i", "i", "i", "i", "j",
  "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o",
  "o", "o", "o", "o", "o", "o", "p", "p", "q", "q", "q", "q", "q", "q", "r",
  "r", "r", "r", "r", "r", "s", "s", "s", "s", "s", "s", "s", "s", "t", "t",
  "t", "u", "u", "v", "v", "w", "x", "y", "z");

function initPage() {
	//get the random tiles
  randomizeTiles();
  //get the submit button
  var submitDiv = document.getElementById("submit");
  //get the first child of submit
  var a = submitDiv.firstChild;
  while (a.nodeName == "#text") {
    a = a.nextSibling;
  }
  a.onclick = function() { 
    alert("Please click tiles to add letters and create a word."); 
  };
}

function randomizeTiles() {
	//get the letter box with a tag
  var tiles = document.getElementById("letterbox").getElementsByTagName("a");
  for (i = 0; i < tiles.length; i++) {
    var index = Math.floor(Math.random() * 100);
    var letter = frequencyTable[index];
    tiles[i].className = tiles[i].className + ' l' + letter;
    //add the letter
    tiles[i].onclick = addLetter;
  }
}

function addLetter() {
  var tileClasses = this.className.split(" ");
  var letterClass = tileClasses[2];
  var tileLetter = letterClass.substring(1,2);
  //add word to current word
  var currentWordDiv = document.getElementById("currentWord");
  if (currentWordDiv.childNodes.length == 0) {
	  //create p element
    var p = document.createElement("p");
    //append to currentWordDiv
    currentWordDiv.appendChild(p);
    var letterText = document.createTextNode(tileLetter);
    //add letter to p
    p.appendChild(letterText);
    var submitDiv = document.getElementById("submit");
    var a = submitDiv.firstChild;
    while (a.nodeName == "#text") { 
      a = a.nextSibling;
    }
    //call submitWord function
    a.onclick = submitWord;
  } else {
    var p = currentWordDiv.firstChild;
    var letterText = p.firstChild;
    letterText.nodeValue += tileLetter;
  }
  //disable tile
  this.className += " disabled";
  this.onclick = "";
}

function submitWord() {
	//get the request object
  var request = createRequest();
  if (request == null) {
    alert ("Unable to create request object.");
    return;
  }
//  alert("User Object/Request Created");
  var currentWordDiv = document.getElementById("currentWord");
  //get the word
  var userWord = currentWordDiv.firstChild.firstChild.nodeValue;
  var url = "dictionary.jsp?word=" + escape(userWord);
  request.open("GET", url, false);
  request.send(null);

  if (request.responseText == -1) {
    alert("You have entered an invalid word. Try again!");
  } else {
	  //add word to word list
    var wordListDiv = document.getElementById("wordList");
    //create p element
    var p = document.createElement("p");
    var newWord = document.createTextNode(userWord);
    //append word to p
    p.appendChild(newWord);
    wordListDiv.appendChild(p);

    var scoreDiv = document.getElementById("score");
    var scoreNode = scoreDiv.firstChild;
    var scoreText = scoreNode.nodeValue;
    var pieces = scoreText.split(" ");
    var currentScore = parseInt(pieces[1]);
    //get the score 
    currentScore += parseInt(request.responseText);
    scoreNode.nodeValue = "Score: " + currentScore;
  }
  var currentWordP = currentWordDiv.firstChild;
  currentWordDiv.removeChild(currentWordP);
  enableAllTiles();
  var submitDiv = document.getElementById("submit");
  var a = submitDiv.firstChild;
  while (a.nodeName == "#text") {
    a = a.nextSibling;
  }                                    
  a.onclick = function() {                                  
    alert("Please click tiles to add letters and create a word.");
  };
}
//enables the tiles
function enableAllTiles() {
  tiles = document.getElementById("letterbox").getElementsByTagName("a");
  for (i=0; i<tiles.length; i++) {
    var tileClasses = tiles[i].className.split(" ");
    if (tileClasses.length == 4) {
      var newClass = 
        tileClasses[0] + " " + tileClasses[1] + " " + tileClasses[2];
      tiles[i].className = newClass;
      tiles[i].onclick = addLetter;
    }
  }
}
 
