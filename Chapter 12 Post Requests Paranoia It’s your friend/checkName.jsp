<%@ page language="java"
    pageEncoding="UTF-8"%>

<%
	String username=request.getParameter("username");
	if(!username.equals("") && username!=null){
		if(!username.equals("bill")&&!username.equals("ted")&&!username.equals("sam")){
			out.print("okay");
		}else{
			out.println("denied");
		}
	}
%>
