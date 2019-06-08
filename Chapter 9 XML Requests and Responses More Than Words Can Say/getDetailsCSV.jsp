<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String imageid=request.getParameter("ImageID");

if(imageid.equals("itemGuitar")){
	//out.print("<p>Pete Townshend once played this guitar while his own axe was in the shop having bits of drumkit removed from it.</p>");
	
	out.print("itemGuitar,Pete Townshend once played this guitar while his own axe was in the shop having bits of drumkit removed from it.,5695.99,http://www.thewho.com/,http://en.wikipedia.org/wiki/Pete_Townshend");
	
}else if(imageid.equals("itemShades")){
	//out.print("<p>Yoko Ono's sunglasses. While perhaps not valued much by Beatles fans, this pair is rumored to have been licked by John Lennon.</p>");
	out.print("itemShades,Yoko Ono's sunglasses. While perhaps not valued much by Beatles fans this pair is rumored to have been licked by John Lennon.,258.99,http://www.beatles.com/,http://johnlennon.com/,http://www.yoko-ono.com/");
	
}else if(imageid.equals("itemCowbell")){
	//out.print("<p>Remember the famous \"more cowbell\" skit from Saturday Night Live? Well, this is the actual cowbell.");
	out.print("itemCowbell,Remember the famous \"more cowbell\" skit from Saturday Night Live? Well this is the actual cowbell.,299.99,http://www.nbc.com/Saturday_Night_Live/,http://en.wikipedia.org/wiki/More_cowbell");
}
else if(imageid.equals("itemHat")){
	//out.print("<p>Michael Jackson's hat, as worn in the \"Billie Jean\" video. Not really rock memorabilia, but it smells better than Slash's tophat.</p>");
	out.print("itemHat,Michael Jackson's hat as worn in the \"Billie Jean\" video. Not really rock memorabilia but it smells better than Slash's tophat.,1699.99,http://www.michaeljackson.com/,http://music.yahoo.com/vid-2143030--Billie-Jean");
	
}else{
	out.print("No Details Found");
}

%>
