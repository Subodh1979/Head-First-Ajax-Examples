<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String username=request.getParameter("username");
	if(username!=null&&!username.equals(" ")&&!username.equals("")){
		if((!username.equals("bill")) && (!username.equals("ted"))){
			out.print("okay");
		}else{
			out.print("denied");
		}
	}
%>