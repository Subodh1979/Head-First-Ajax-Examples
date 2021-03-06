window.onload = initPage;
//alert("Browser Started");
function initPage() {
	//call checkUsername function
  document.getElementById("username").onblur = checkUsername;
  //disable submit button
  document.getElementById("register").disabled = true;
}

function checkUsername() {
	//display loading gif image
  document.getElementById("username").className = "thinking";
  //get the request object
  request = createRequest();
  if (request == null)
    alert("Unable to create request");
  else {
//	  alert("Object/Request Created");
	  //get the username
    var theName = document.getElementById("username").value;
    var username = escape(theName);
    var url= "checkName.jsp?username=" + username;
    //any changes call showUsernameStatus function
    request.onreadystatechange = showUsernameStatus;
    request.open("GET", url, true);
    request.send(null);
  }
}

function showUsernameStatus() {
  if (request.readyState == 4) {
    if (request.status == 200) {
//    	alert("status : ok");
    	var status=request.responseText;
//    	alert("Response : "+request.responseText);
      if (status.trim() == "okay") {
    	  //display check mark
        document.getElementById("username").className = "approved";
        //enable submit button
        document.getElementById("register").disabled = false;
      } else {
    	  //display cross mark
        document.getElementById("username").className = "denied";
        //focus the field
        document.getElementById("username").focus();
        //select the text
        document.getElementById("username").select();
        //disable submit button
        document.getElementById("register").disabled = true;
      }
    }
  }
}
 
