<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>


<body>

	<h1>파일첨부</h1>

	<form action="/cu/saveimg" method="post" enctype="multipart/form-data">

		첨부파일:<input type="file" name="s_file"/><br/>

		<input type="submit" value="보내기"/>

</body>
</html>