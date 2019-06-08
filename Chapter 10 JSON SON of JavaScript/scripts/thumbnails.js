window.onload = initPage;
//	alert("Browser Started");

function initPage() {
  // find the thumbnails on the page
  var thumbs = document.getElementById("thumbnailPane").getElementsByTagName("img");

  // set the handler for each image
  for (var i = 0; i < thumbs.length; i++) {
    var image = thumbs[i];
    
    // create the onclick function
    image.onclick = function() {
//    	alert("Image Clicked");
      // find the image name
      var detailURL = 'images/' + this.title + '-detail.jpg';
      //change image
      document.getElementById("itemDetail").src = detailURL;
//      alert("Image Changed");
      getDetails(this.title);
    }
  }
}

function getDetails(itemName) {
	//create request object or get the request object
  request = createRequest();
  if (request == null) {
    alert("Unable to create request");
    return;
  }
//  alert("Request Created");
  // Version for JSON server-side script

  var url= "getDetailsJSON.jsp?ImageID=" + escape(itemName);
  request.open("GET", url, true);
//any changes call displayDetails function 
  request.onreadystatechange = displayDetails;
  request.send(null);
}

function displayDetails() {
  if (request.readyState == 4) {
    if (request.status == 200) {
//    	alert("Status : Ok");
    	
    //get the description
      var detailDiv = document.getElementById("description");
      // Remove existing item details (if any)
      for (var i=detailDiv.childNodes.length; i>0; i--) {
        detailDiv.removeChild(detailDiv.childNodes[i-1]);
      }
      
      //var itemDetails = eval('(' + request.responseText + ')');
//      alert("Response : "+request.responseText);
      var itemDetails = JSON.parse(request.responseText);
//      alert("JSON : "+itemDetails);
//      console.log(itemDetails);

//      console.log(itemDetails);
  		//delete/remove the id value in json object
  		delete itemDetails["id"];
// 		console.log(delete itemDetails["id"]);
      
      
      // Add new item details
      for (var property in itemDetails) {
        var propertyValue = itemDetails[property];
        if (!isArray(propertyValue)) {
        
        	//create p tag
          var p = document.createElement("p");
//          console.log(p);
          //property and propertyValue are append to p
          p.appendChild(document.createTextNode(property + ": " + propertyValue));
 //         console.log(p);
          //p is append to detailDiv 
          detailDiv.appendChild(p);
        } else {
        	//create p tag
          var p = document.createElement("p");
//          console.log(p);
          //property is append to p
          p.appendChild(document.createTextNode(property + ":"));
//          console.log(p);
          //create ul
          var list = document.createElement("ul");
//          console.log(list);
          for (var i=0; i<propertyValue.length; i++) {
        	  //create li
            var li = document.createElement("li");
 //           console.log(li);
            // create a
            var a = document.createElement("a");
 //           console.log(a);
            //set propertyValue to href
            a.setAttribute("href",propertyValue[i]);
			var urlText=document.createTextNode(propertyValue[i]);
			//urlText is append to a
			a.appendChild(urlText);
//			console.log(a);
			//a is append to li
			li.appendChild(a);
//			console.log(li);
			//li is append to list
			list.appendChild(li);
          }
          //p is append to detailDiv
          detailDiv.appendChild(p);
          //list is append to detailDiv
          detailDiv.appendChild(list);
        }
      }
    }  
  }
}
//checking array or not
function isArray(arg) {
  if (typeof arg == 'object') {
//	  alert("array");
    var criteria = arg.constructor.toString().match(/array/i);
    return (criteria != null);
  }
//  alert("not array");
  return false;
}