window.onload = initPage;
//alert("Browser Started");
function initPage() {
  // find the thumbnails on the page
  thumbs = document.getElementById("thumbnailPane").getElementsByTagName("img");

  // set the handler for each image
  for (var i = 0; i < thumbs.length; i++) {
    image = thumbs[i];
    
    // create the onclick function
    image.onclick = function() {
//    	alert("Image Clicked");
      // find the image name
      detailURL = 'images/' + this.title + '-detail.jpg';
      document.getElementById("itemDetail").src = detailURL;
//      alert("Image changed");
      getDetails(this.title);
    }
  }
}
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
//get the item details
function getDetails(itemName) {
  //get the request
	request = createRequest();
  if (request == null) {
    alert("Unable to create request");
    return;
  }
//  alert("Object/Request Created");
  var url= "getDetails.jsp?ImageID=" + escape(itemName);
  request.open("GET", url, true);
  //any changes call displayDetails function 
  request.onreadystatechange = displayDetails;
  request.send(null);
}

function displayDetails() {
  if (request.readyState == 4) {
    if (request.status == 200) {
//    	alert("status : ok");
    	//Get the element
      detailDiv = document.getElementById("description");
      //display the response text
//      alert("Response : "+request.responseText);
      detailDiv.innerHTML = request.responseText;
    }
  }
}
 
