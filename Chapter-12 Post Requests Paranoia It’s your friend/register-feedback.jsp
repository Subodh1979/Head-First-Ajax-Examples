<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Register</title>
</head>
<body>
<h1>Welcome to Mike's!</h1>

<%
String username=request.getParameter("username");
String firstname=request.getParameter("firstname");
String lastname=request.getParameter("lastname");
String email=request.getParameter("email");
/* System.out.println("username:"+username);
System.out.println("firstname:"+firstname);
System.out.println("lastname:"+lastname);
System.out.println("email:"+email); */
out.print("<p>Here's what you entered, "+firstname+":</p>");
out.print("<p>Username: "+username+"</p>");
out.print("<p>Name: "+firstname+" "+lastname+"</p>");
out.print("<p>Email: "+email+"</p>");
%>

<h2><a href="#">Read Reviews</a></h2>
<h2><a href="#">Write Reviews</a></h2>

<div id="coverBar">
	<img src="images/coverMatrix.jpg" width="82" height="115" style="left: 0px;" onclick="alert('Our movie reviews are coming soon. Check back often!')" />
	<img src="images/coverDeadRingers.jpg" width="82" height="115" style="left: 88px;" onclick="alert('Our movie reviews are coming soon. Check back often!')" />
	<img src="images/coverDrStrangelove.jpg" width="82" height="115" style="left: 176px;" onclick="alert('Our movie reviews are coming soon. Check back often!')" />
	<img src="images/coverFuturama.jpg" width="82" height="115" style="left: 264px;" onclick="alert('Our movie reviews are coming soon. Check back often!')" />
	<img src="images/coverHolyGrail.jpg" width="82" height="115" style="left: 356px;" onclick="alert('Our movie reviews are coming soon. Check back often!')" />
	<img src="images/coverRaisingArizona.jpg" width="82" height="115" style="left: 444px;" onclick="alert('Our movie reviews are coming soon. Check back often!')" />
	<img src="images/coverRobotChicken.jpg" width="82" height="115" style="left: 532px;" onclick="alert('Our movie reviews are coming soon. Check back often!')" />
</div>
</body>
</html>
