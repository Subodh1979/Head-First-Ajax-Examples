window.onload = initPage;
//	alert("Browser Started");
	//warnings
var warnings = {
  "firstname" : {
    "required": "Please enter in your first name.",
    "letters" : "Only letters are allowed in a first name.",
    "err"     : 0
  },
  "lastname" : {
    "required": "Please enter in your last name.",
    "letters" : "Only letters are allowed in a last name.",
    "err"     : 0
  },
  "email" : {
    "required": "Please enter in your e-mail address.",
    "format" : "Please enter your e-mail in the form 'name@domain.com'.",
    "err"     : 0
  }
}

function initPage() {
	//call addEventHandler
  addEventHandler(document.getElementById("firstname"), "blur", fieldIsFilled);
  addEventHandler(document.getElementById("firstname"), "blur", fieldIsLetters);
  addEventHandler(document.getElementById("lastname"), "blur", fieldIsFilled);
  addEventHandler(document.getElementById("lastname"), "blur", fieldIsLetters);
  addEventHandler(document.getElementById("email"), "blur", fieldIsFilled);
  addEventHandler(document.getElementById("email"), "blur", emailIsProper);
}

function fieldIsFilled(e) {
	//get the element
  var element = getActivatedObject(e);
  if (element.value == "") {
	  //call warn function
    warn(element, "required");
  } else {
	//call unwarn function
    unwarn(element, "required");
  }
}

function emailIsProper(e) {
  var element = getActivatedObject(e);
  if (!/^[\w\.-_\+]+@[\w-]+(\.\w{2,4})+$/.test(element.value)) {
	//call warn function
    warn(element, "format");
  } else {
	//call unwarn function
    unwarn(element, "format");
  }
}

function fieldIsLetters(e) {
  var element = getActivatedObject(e);
  var nonAlphaChars = /[^a-zA-Z]/;
  if (nonAlphaChars.test(element.value)) {
	//call warn function
    warn(element, "letters");
  } else {
	//call unwarn function
    unwarn(element, "letters");
  }
}

function fieldIsNumbers(e) {
  var element = getActivatedObject(e);
  var nonNumericChars = /[^0-9]/;
  if (nonNumericChars.test(element.value)) {
	//call warn function
    warn(element, "numbers");
  } else {
	//call unwarn function
    unwarn(element, "numbers");
  }
}
	
function warn(field, warningType) {
	//get the fieldset
  var parentNode = field.parentNode;
  //get the warning text
  var warning = eval('warnings.' + field.id + '.' + warningType);
  if (parentNode.getElementsByTagName('p').length == 0) {
	  //create p
    var p = document.createElement('p');
    //fieldset is append to p
    field.parentNode.appendChild(p);
    
    var warningNode = document.createTextNode(warning);
    //warningNode is append to p
    p.appendChild(warningNode);
  } else {
	  //get the p tag
    var p = parentNode.getElementsByTagName('p')[0];
    //append the warning
    p.childNodes[0].nodeValue = warning;
  }
  //disable the enroll button
  document.getElementById("enroll").disabled = true;
}

function unwarn(field, warningType) {
  if (field.parentNode.getElementsByTagName("p").length > 0) {
	  //get the p tag
    var p = field.parentNode.getElementsByTagName("p")[0];
    //get the current warning
    var currentWarning = p.childNodes[0].nodeValue;
    //get the warning
    var warning = eval('warnings.' + field.id + '.' + warningType);
    if (currentWarning == warning) {
    	//remove the warning
      field.parentNode.removeChild(p);
    }
  }
  //get the all fieldsets
  var fieldsets = document.getElementById("content").getElementsByTagName("fieldset");
  for (var i=0; i<fieldsets.length; i++) {
	  //get the warnings numbers
    var fieldWarnings = fieldsets[i].getElementsByTagName("p").length;
    if (fieldWarnings > 0) {
    	//disable the enroll button
      document.getElementById("enroll").disabled = true;
      return;
    }       
  }
  //enable the enroll button
  document.getElementById("enroll").disabled = false;
}
