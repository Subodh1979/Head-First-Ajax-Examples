window.onload = initPage;
//alert("Browser Started");
var welcomePaneShowing = true;

function initPage() {
	//get all anchor id's in tab
  var tabs =document.getElementById("tabs").getElementsByTagName("a");
  for (var i=0; i<tabs.length; i++) {
    var currentTab = tabs[i];
    //mouse over call showHint function
    currentTab.onmouseover = showHint;
    //mouse over call hideHint function
    currentTab.onmouseout = hideHint;
    //on click call showTab function
    currentTab.onclick = showTab;
  }
//get all anchor id's in navigation
  var buttons = document.getElementById("navigation").getElementsByTagName("a");
  for (var i=0; i<buttons.length; i++) {
    var currentBtn = buttons[i];
    //mouse over call showHint function
    currentBtn.onmouseover = showHint;
    //mouse over call hideHint function
    currentBtn.onmouseout = hideHint;
    //on click call showTab function
    currentBtn.onclick = showTab;
  //mouse over call buttonOver function
    currentBtn.onmouseover = buttonOver;
  //mouse over call buttonOut function
    currentBtn.onmouseout = buttonOut;
  }
}

function showHint() {
//	alert("show hint");
  if (!welcomePaneShowing) {
    return;
  }
  //get the current title
  switch (this.title) {
    case "beginners":
      var hintText = "Just getting started? Come join us!";
      break;
    case "intermediate":
      var hintText = "Take your flexibility to the next level!";
      break;
    case "advanced":
      var hintText = "Perfectly join your body and mind " +
                     "with these intensive workouts.";
      break;
    default:
      var hintText = "Click a tab to display the course " +
                     "schedule for the class";  
  }  
  //get the content
  var contentPane = document.getElementById("content");
  //change content 
  contentPane.innerHTML = "<h3>" + hintText + "</h3>";
}

function hideHint() {
//	alert("hide hint");
  if (welcomePaneShowing) {
	//get the content
    var contentPane = document.getElementById("content");
  //change content
    contentPane.innerHTML = "<h3>Click a tab to display the course schedule for the class</h3>";
  }
}

function showTab() {
//	alert("show tab");
	//get the current selected title
  var selectedTab = this.title;
  if (selectedTab == "welcome") {
    welcomePaneShowing = true;
  //change content
    document.getElementById("content").innerHTML = "<h3>Click a tab to display the course schedule for the class</h3>";
  } else {
    welcomePaneShowing = false;
  }
  //get all anchor id's in tab
  var tabs = document.getElementById("tabs").getElementsByTagName("a");
  for (var i=0; i<tabs.length; i++) { 
    var currentTab = tabs[i];
    if (currentTab.title == selectedTab) {
    	//set current tab class is active
      currentTab.className = 'active';
    } else {
    	//set current tab class is inactive
      currentTab.className = 'inactive';
    }
  }
  //get the request object
  var request = createRequest();
  if (request == null) {
    alert("Unable to create request");
    return;
  }
//  alert("Object/Request Created");
  //any changes call showSchedule function
  request.onreadystatechange = showSchedule;
  request.open("GET", selectedTab + ".html", true);
  request.send(null);
}

function showSchedule() {
	
  if (request.readyState == 4) {
    if (request.status == 200) {
 //   	alert("status : ok");
    	//change content
      document.getElementById("content").innerHTML = request.responseText;
//      alert("Response : "+request.responseText);
    }
  }
}

function buttonOver() {
//	alert("button over");
	//set button is active 	
  this.className = "active";
}
function buttonOut() {
//	alert("button out");
	//set button is inactive or nothing
  this.className = "";
}
