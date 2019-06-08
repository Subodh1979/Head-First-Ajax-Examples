window.onload=initPage;
//	alert("Browser Started");
function initPage(){
	 // find the thumbnails on the page
	var thumbs=document.getElementById("thumbnailPane").getElementsByTagName("img");
//	alert("thumbnail : "+thumbs);
	  // set the handler for each image
	for(var i=0;i<thumbs.length;i++){
		var image=thumbs[i];
	    // create the onclick function
		image.onclick=function(){
//			alert("Image Clicked : "+image);
			var detailURL='images/'+this.title+'-detail.jpg';
			//image changed
			document.getElementById("itemDetail").src=detailURL;
//			alert("Image changed");
			getDetails(this.title);
		}
	}
}
function getDetails(itemName){
	//get the request object
	request=createRequest();
	if(request==null){
		alert("Unable to create request");
		return;
	}
//	alert("Request/Object Created");
	 // Version for XML server-side script
	var url="getDetailsCSV.jsp?ImageID="+escape(itemName);
	request.open("GET",url,true);
	//any changes call displayDetails function 
	request.onreadystatechange=displayDetails;
//	alert("ready state");
	request.send();
}
function displayDetails(){
	if(request.readyState==4&&request.status==200){
//		alert("status : Ok");
		var detailDiv=document.getElementById("description");
		// Remove existing item details (if any)
		  for (var i=detailDiv.childNodes.length; i>0; i--) {
		        detailDiv.removeChild(detailDiv.childNodes[i-1]);
		   }
		  
	      // Add new item details
		  var response=request.responseText;
//		  alert("Response : "+request.responseText);
		  //split responseText
		  var itemDetails=response.split(",");
		//created paragraph tag
		  var descriptionPTag=document.createElement("p");
//		  console.log(descriptionPTag);
		  var descriptionText=document.createTextNode("Description: " +itemDetails[1]);
		  //descriptionText is append to descriptionPTag
		  descriptionPTag.appendChild(descriptionText);
		  //descriptionPTag is append to detailDiv
		  detailDiv.appendChild(descriptionPTag);
		  
		//created paragraph tag
		  var pricePTag=document.createElement("p");
//		  console.log(pricePTag);
		  var priceText=document.createTextNode("Price: $" +itemDetails[2]);
		  //priceText is append to pricePTag
		  pricePTag.appendChild(priceText);
		  // pricePTag is append to detailDiv
		  detailDiv.appendChild(pricePTag);
		  
		  //create ul
		  var list=document.createElement("ul");
//		  console.log(list);
		  for(var i=3;i<itemDetails.length;i++){
			  //create li
			  var li=document.createElement("li");
//			  console.log(list);
			  //create a
			  var a=document.createElement("a");
//			  console.log(list);
			  //set url to href
			  a.setAttribute("href",itemDetails[i]);
			  var urlText=document.createTextNode(itemDetails[i]);
			  //urlText is append to a
			  a.appendChild(urlText);
			  //a is append to li
			  li.appendChild(a);
			  //li is append to list
			  list.appendChild(li);
		  }
		  //list is append to detailDiv
		  detailDiv.appendChild(list);
		      
	}
}

