<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ page trimDirectiveWhitespaces="true" %>
<!-- If you want to eliminate the extra white space from the page, you can add a trim-directive-whitespaces element to a jsp-property-group element in the deployment descriptor and set it to true -->
    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Items Details</title>
</head>
<body>
<%
String imageName=request.getParameter("ImageID");
if(imageName.equals("itemGuitar")){
	out.print("<p>Pete Townshend once played this guitar while his own axe was in the shop having bits of drumkit removed from it.</p>");	
}else if(imageName.equals("itemShades")){
	out.print("<p>Yoko Ono's sunglasses. While perhaps not valued much by Beatles fans, this pair is rumored to have been licked by John Lennon.</p>");
}else if(imageName.equals("itemCowbell")){
	out.print("<p>Remember the famous \"more cowbell\" skit from Saturday Night Live? Well, this is the actual cowbell.</p>");
}else if(imageName.equals("itemHat")){
	out.print("<p>Michael Jackson's hat, as worn in the \"Billie Jean\" video. Not really rock memorabilia, but it smells better than Slash's tophat.</p>");
}else{
	out.print("Nothing");
}
%>
</body>
</html>