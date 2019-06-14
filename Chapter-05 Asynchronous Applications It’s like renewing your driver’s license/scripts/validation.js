window.onload = initPage;
var usernameValid = false;
var passwordValid = false;
//	alert("Browser Started");
function initPage() {
	//call checkUsername function
  document.getElementById("username").onblur = checkUsername;
  //call checkPassword function
  document.getElementById("password2").onblur = checkPassword;
  //disable submit button
  document.getElementById("register").disabled = true;
//call registerUser function 
  document.getElementById("register").onclick = registerUser;
}

function checkUsername() {
	//display loading gif image
  document.getElementById("username").className = "thinking";
  //get the request object
  usernameRequest = createRequest();
  if (usernameRequest == null)
    alert("Unable to create request");
  else {
//	  alert("User Object/Request Created");
	//get the username
    var theName = document.getElementById("username").value;
    var username = escape(theName);
    var url= "checkName.jsp?username=" + username;
    //any changes call showUsernameStatus function
    usernameRequest.onreadystatechange = showUsernameStatus;
    usernameRequest.open("GET", url, true);
    usernameRequest.send(null);
  }
}

function showUsernameStatus() {
  if (usernameRequest.readyState == 4) {
    if (usernameRequest.status == 200) {
//    	alert("User Request status : ok");
    	var userStatus=usernameRequest.responseText;
//    	alert("Response : "+usernameRequest.responseText);
      if (userStatus.trim() == "okay") {
    	//display check mark or username available
        document.getElementById("username").className = "approved";
        usernameValid = true;
      } else {
    	//display cross mark or username not available
        document.getElementById("username").className = "denied";
        //focus the field
        document.getElementById("username").focus();
        //select the text
        document.getElementById("username").select();
        usernameValid = false;
      }
      checkFormStatus();
    }
  }
}

function checkPassword() {
	
  var password1 = document.getElementById("password1");
  var password2 = document.getElementById("password2");
  //display loading gif image
  password1.className = "thinking";

  // First compare the two passwords
  if ((password1.value == "") || (password1.value != password2.value)) {
    password1.className = "denied";
    return;
  } 

  // Passwords match, so send request to server
  //get the request object
  passwordRequest = createRequest();
  if (passwordRequest == null) {
    alert("Unable to create request");
  } else {
//	  alert("Password Object/Request Created");
	  //get password
    var password = escape(password1.value);
    var url = 'checkPass.jsp?password=' + password;
    //any changes call showPasswordStatus function
    passwordRequest.onreadystatechange = showPasswordStatus;
    passwordRequest.open('GET', url, true);
    passwordRequest.send(null);
  }
}

function showPasswordStatus() {
  if (passwordRequest.readyState == 4) {
    if (passwordRequest.status == 200) {
//    	alert("Password Request status : ok");
    	var passwordStatus=passwordRequest.responseText;
//   	alert("Response : "+passwordRequest.responseText);
      var password1 = document.getElementById("password1");
      if (passwordStatus.trim() == 'okay') {
    	//display check mark or password ok
       password1.className = "approved";
       passwordValid = true;
      } else {
    	//display cross mark or password not ok
       password1.className = "denied";
     //focus the field
       password1.focus();
     //select the text
       password1.select();
       passwordValid = false;
      }
      checkFormStatus();
    }
  }
}

function checkFormStatus() {
  if (usernameValid && passwordValid) {
	  //enable register button
    document.getElementById("register").disabled = false;
  } else {
	  //disable register button
    document.getElementById("register").disabled = true;
  }
}

function registerUser() {
  t = setInterval(scrollImages, 50);
  //display Processing... message on register button
  document.getElementById("register").value = "Processing...";
  //get the request object
  registerRequest = createRequest();
  if (registerRequest == null) {
    alert("Unable to create request.");
  } else {
//	  alert("Register Object/Request Created");
    var url = "register.jsp?username=" +
      escape(document.getElementById("username").value) + "&password=" +
      escape(document.getElementById("password1").value) + "&firstname=" +
      escape(document.getElementById("firstname").value) + "&lastname=" +
      escape(document.getElementById("lastname").value) + "&email=" +
      escape(document.getElementById("email").value) + "&genre=" +
      escape(document.getElementById("genre").value) + "&favorite=" +
      escape(document.getElementById("favorite").value) + "&tastes=" +
      escape(document.getElementById("tastes").value);
    //any changes call registrationProcessed function
    registerRequest.onreadystatechange = registrationProcessed;
    registerRequest.open("GET", url, true);
    registerRequest.send(null);
  }
}

function registrationProcessed() {
  if (registerRequest.readyState == 4) {
    if (registerRequest.status == 200) {
//    	alert("Register Request status : ok");
      document.getElementById('wrapper').innerHTML =registerRequest.responseText;
//      alert("Response : "+registerRequest.responseText);
    }
  }
}

function scrollImages() {
  var coverBarDiv = document.getElementById("coverBar");
  var images = coverBarDiv.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    var left = images[i].style.left.substr(0, images[i].style.left.length - 2);
    if (left <=  -86) {
      left = 532;
    }
    images[i].style.left = (left - 1) + "px";
  }
}
 
