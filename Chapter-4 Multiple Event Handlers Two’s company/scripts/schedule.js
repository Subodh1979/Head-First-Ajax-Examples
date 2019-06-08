window.onload = initPage;
var welcomePaneShowing = true;
//alert("Browser Started");

function initPage() {

  var schedulePane = document.getElementById("schedulePane");
  //call addEventHandler
  addEventHandler(schedulePane, "click", showTab);
  addEventHandler(schedulePane, "mouseover", showHint);
  addEventHandler(schedulePane, "mouseout", hideHint);

  var navigationDiv = document.getElementById("navigation");
  //call addEventHandler
  addEventHandler(navigationDiv, "mouseover", buttonOver);
  addEventHandler(navigationDiv, "mouseout", buttonOut);
}

function showHint(e) {
//	alert("show hint");
  if (!welcomePaneShowing) {
    return;
  }
  //get the element
  var element = getActivatedObject(e);
  switch (element.title) {
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

function hideHint(e) {
//	alert("hide hint");
  if (welcomePaneShowing) {
	//get the content
    var contentPane = document.getElementById("content");
    //change content 
    contentPane.innerHTML = "<h3>Click a tab to display the course schedule for the class</h3>";
  }
}

function showTab(e) {
//	alert("show tab");
	//get the element 
  var me = getActivatedObject(e);
//get the current selected title
  var selectedTab = me.title;
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
  //  	alert("status : ok");
    	//change content
      document.getElementById("content").innerHTML = request.responseText;
//      alert("Response : "+request.responseText);
    }
  }
}

function buttonOver(e) {
//	alert("button over");	
  var me = getActivatedObject(e);
  //set button is active 
  me.className = "active";
}
function buttonOut(e) {
//	alert("button out");
  var me = getActivatedObject(e);
  //set button is inactive or nothing
  me.className = "";
}
