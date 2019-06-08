<%@ page language="java"
    pageEncoding="UTF-8"%>

<%
	String password=request.getParameter("password");
	//System.out.println("password:"+password);
	if(!password.equals("") && password!=null){
		
		/* pattern=".{6,}[a-zA-Z0-9]*$"
		pattern="/^.*(?=.{6,})(?=.*[0-9])(?=.*[a-zA-Z]).*$/" */		
		
	if(password.matches("^.*(?=.{6,})(?=.*[0-9])(?=.*[a-zA-Z]).*$")){
		out.print("okay");
	}else{
		out.println("denied");
	}
	}
%>
