//create request object
function createRequest() {
  try {
	//modern browsers
    request = new XMLHttpRequest();
  } catch (tryMS) {
    try {
    	//old IE browsers
      request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (otherMS) {
      try {
        request = new ActiveXObject("Microsoft.XMLHTTP");
      } catch (failed) {
        request = null;
      }
    }
  }	
  return request;
}

