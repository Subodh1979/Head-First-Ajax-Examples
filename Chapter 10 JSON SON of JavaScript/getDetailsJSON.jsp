<%@ page language="java" contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@page import="org.json.JSONArray"%>
    <%@page import="org.json.JSONObject"%>
<%
String imageid=request.getParameter("ImageID");
//System.out.println("ImageID:"+imageid);

JSONObject json=new JSONObject();
JSONArray array=new JSONArray();
if(imageid.equals("itemGuitar")){
	json.put("id", "itemGuitar");
	json.put("Description","Pete Townshend once played this guitar while his own axe was in the shop having bits of drumkit removed from it.");
	json.put("Price","5695.99");
	array.put("http://www.thewho.com/");
	array.put("http://en.wikipedia.org/wiki/Pete_Townshend");
	json.put("URLs",array);
	out.print(json);
	
}else if(imageid.equals("itemShades")){
	json.put("id", "itemShades");
	json.put("Description","Yoko Ono\'s sunglasses. While perhaps not valued much by Beatles fans, this pair is rumored to have been licked by John Lennon.");
	json.put("Price","258.99");
	array.put("http://www.beatles.com/");
	array.put("http://johnlennon.com/");
	array.put("http://www.yoko-ono.com/");
	json.put("URLs",array);
	out.print(json);
	
	
}else if(imageid.equals("itemCowbell")){
	json.put("id", "itemCowbell");
	json.put("Description","Remember the famous \"more cowbell\" skit from Saturday Night Live? Well, this is the actual cowbell.");
	json.put("Price","299.99");
	array.put("http://www.nbc.com/Saturday_Night_Live/");
	array.put("http://en.wikipedia.org/wiki/More_cowbell");
	json.put("URLs",array);
	out.print(json);
	
}
else if(imageid.equals("itemHat")){
	json.put("id", "itemHat");
	json.put("Description","Michael Jackson\'s hat as worn in the \"Bille Jean\" video. Not really rock memorabilia, but it smells better than Slash\'s tophat.");
	json.put("Price","1699.99");
	array.put("http://www.michaeljackson.com/");
	array.put("http://music.yahoo.com/vid-2143030--Billie-Jean");
	json.put("URLs",array);
	out.print(json);
	
}else{
	out.print("No Details Found");
}
//System.out.println(json);

/* add json-20180813.jar */
%>
