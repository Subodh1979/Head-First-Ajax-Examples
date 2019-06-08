window.onload=initPage;
//	alert("Browser Started");
function initPage(){
	 // find the thumbnails on the page
	var thumbs=document.getElementById("thumbnailPane").getElementsByTagName("img");
	//alert(thumbs);
	  // set the handler for each image
	for(var i=0;i<thumbs.length;i++){
		var image=thumbs[i];
	    // create the onclick function
		image.onclick=function(){
			//alert("Image Clicked : "+image);
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
	var url="getDetailsXML-updated.jsp?ImageID="+escape(itemName);
	request.open("GET",url,true);
	//any changes call displayDetails function 
	request.onreadystatechange=displayDetails;
	//alert("ready state");
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
		      
		      //get the categories
		      var categories=responseDoc.getElementsByTagName("category");
		      for(var i=0;i<categories.length;i++){
		    	  //get the category
		    	  var category=categories[i];
		    	  //get the name
		    	  var nameElement=category.getElementsByTagName("name")[0];
		    	  //category name
		    	  var categoryName = nameElement.firstChild.nodeValue;
		    	  var categoryType = category.getAttribute("type");
		    	  if((categoryType==null)||(categoryType!="list")){
		    		  
		    		  var valueElement=category.getElementsByTagName("value")[0];
		    		  var categoryValue=valueElement.firstChild.nodeValue;
		    		//created paragraph tag
		    		  var p = document.createElement("p");
//		    		  console.log(p);
		    		  var text = document.createTextNode(categoryName + ": " + categoryValue);
//		    		  console.log(text);
		    		  //text is append to p
		    		  p.appendChild(text);
		    		  //p is append to detailDiv
		    		  detailDiv.appendChild(p);
		    	  }else{
		    		//created paragraph tag
		    		  var p=document.createElement("p");
//		    		  console.log(p);
		    		  p.appendChild(document.createTextNode(categoryName));
//		    		  console.log(p);
		    		  //create ul
		    		  var list=document.createElement("ul");
//		    		  console.log(list);
		    		  var value=category.getElementsByTagName("value");
		    		  for(var j=0;j<value.length;j++){
		    			  //create li
		    			  var li=document.createElement("li");
//		    			  console.log(li);
		    			  var listvalues=value[j].firstChild.nodeValue;
		    			  //listvalues is append to li
		    			  li.appendChild(document.createTextNode(listvalues));
//		    			  console.log(li);
		    			  //li is append to list
		    			  list.appendChild(li);
//		    			  console.log(list);
		    		  }
		    		  //p is append to detailDiv
		    		  detailDiv.appendChild(p);
		    		  //list is append to detailDiv
		    		  detailDiv.appendChild(list);
		    	  }
		    	  
		      }
		      
	}
}
