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
	var url="getDetailsXML.jsp?ImageID="+escape(itemName);
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
				//   var responseDoc = request.responseXML;
		  		//create DOM object
		      var parser = new DOMParser();
		    //get the responseText
		      var responsetex=request.responseText;
		    //convert responseText into xml
		      var responseDoc = parser.parseFromString(responsetex.trim(), "application/xml");
//		      alert("Response : "+responseDoc);
//		      console.log(responseDoc);
		      
		    //get the description
		      var description=responseDoc.getElementsByTagName("description")[0];
		    //get the descriptionText
		      var descriptionText=description.firstChild.nodeValue;
		    //created paragraph tag
		      var descriptionPtag=document.createElement("p");
//		      console.log(descriptionPtag);
		      var text=document.createTextNode("Description : "+descriptionText);
		      //text is append to descriptionPtag
		      descriptionPtag.appendChild(text);
//		      console.log(descriptionPtag);
		      //descriptionPtag is append to detailDiv
		      detailDiv.appendChild(descriptionPtag);
		      
		    //get the price
		      var price=responseDoc.getElementsByTagName("price")[0];
		      //get the priceText
		      var priceText=price.firstChild.nodeValue;
		    //created paragraph tag
		      var pricePtag=document.createElement("p");
//		      console.log(pricePtag);
		      var text=document.createTextNode("Price: $"+priceText);
		      //text is append to pricePtag
		      pricePtag.appendChild(text);
//		      console.log(pricePtag);
		      //pricePtag is append to detailDiv
		      detailDiv.appendChild(pricePtag);
		      
		    //created paragraph tag
		      var urlPtag=document.createElement("p");
//		      console.log(urlPtag);
		      //create ul 
		      var urlList=document.createElement("ul");
//		      console.log(urlList);
		      //get the urls
		      var urlNames=responseDoc.getElementsByTagName("url");
		      for(var i=0;i<urlNames.length;i++){
		    	  //get the url
		    	  var urlName=urlNames[i].firstChild.nodeValue;
		    	  //create li
		    	  var li=document.createElement("li");
//		    	  console.log(li);
		    	  //create a
		    	  var a = document.createElement("a");
//		    	  console.log(a);
		    	  //set url to href
		          a.setAttribute("href", urlName);
		          var urltext=document.createTextNode(urlName);
		          //urltext is append to a
		          a.appendChild(urltext);
		          //a is append to li
		          li.appendChild(a);
		          //li is append to urlList
		          urlList.appendChild(li);
		      }
		      //urlList is append to urlPtag 
		      urlPtag.appendChild(urlList);
		      //urlPtag is append to detailDiv
		      detailDiv.appendChild(urlPtag);
		      
	}
}
