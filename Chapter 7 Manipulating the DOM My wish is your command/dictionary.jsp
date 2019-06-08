 <%@ page import="java.io.*" %>
    <%@ page import="java.util.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String word=request.getParameter("word");
//System.out.println("word:"+word);

ArrayList<String> list=new ArrayList<String>();
 String filepath = getServletContext().getRealPath("Dictionary.txt");
// System.out.println("filepath:"+filepath);
 try {
 FileReader freader=new FileReader(filepath);
 BufferedReader breader=new BufferedReader(freader);
 String line="";
 while((line=breader.readLine())!=null){
		list.add(line);
	}
// System.out.println(list);
 int score=0;
 if(list.contains(word)){
//	 System.out.println("ok");
	 char[] vowel={'a', 'e', 'i', 'o', 'u'};
	 boolean b=false;
		for(int i=0;i<word.length();i++){
			char ch=word.charAt(i);
			for(int j=0;j<vowel.length;j++){
				 if(ch==vowel[j]){
					b=true;
				} 
			}
		}
		if(b){
			score+=1;
		}else{
			score+=2;
		}
	 out.print(score);
 }else{
//	 System.out.println("not ok");
	 out.print("-1");
 }
 
 } catch (FileNotFoundException e) {

		e.printStackTrace();
	} catch (IOException e) {

		e.printStackTrace();
	}

%>
