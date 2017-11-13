<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script type="text/javascript" src="./resources/js/jquery-3.1.1.js"></script><!--jquery -->

<script>
	$(function(){
		$("#select").click(function (){
				var rawstring = new XMLSerializer().serializeToString(document);/*html string으로 파싱  */
				//var obj = JSON.parse(rawstring);
				var sample = "sample";
				$("#content").append(rawstring);
				$("#content").append(sample);
				$.ajax({
					url: "inputHTML",
					type : "get",
					data : {
						num: sample,
						sam: rawstring
					},
					success: function(data){
						if(data.length == 0){
							alert("fail");
						}else alert("success");
					} ,
					error:function(e){
						console.log(e);
					}
						
					});
					
				});
	});

</script>
<html>
<head>
	<title>Home</title>
</head>
<body>
<h1>
	Hello world!  
</h1>

<P>  The time on the server is ${serverTime}. </P>
<!-- 
 <form name = "insertMember" method = "get" action = "insertMember" >
<input type = "text" id = "id" name = "id"/><br>
<input type = "text" id = "pw" name = "pw"/><br>
<input type = "text" id = "name" name = "name" ><br>

<input type = "submit" value = "submit"> -->
 <form action="loginMember"  method="post" >
		<input type="text" id="id" name="id">
		<input type="password" id="pw" name="pw">
		<input type="submit" value="submit">
	</form>
 
<a href = '#' id = 'select'>click</a>
<div id = "content"></div>
</form>
</body>
</html>
