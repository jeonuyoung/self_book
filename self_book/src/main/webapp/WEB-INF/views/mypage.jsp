<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

<head>
<meta charset="utf-8">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Self Tour Guide Book </title>

<!-- CSS FILES --> 
<link rel="stylesheet" href="./resources/css/bootstrap.min.css">
<link rel="stylesheet" href="./resources/css/flexslider.css">
<link rel="stylesheet" href="./resources/css/main.css">
<link rel="stylesheet" href="./resources/css/responsive.css">
<link rel="stylesheet" href="./resources/css/animate.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link href="http://fonts.googleapis.com/css?family=Hind:300,400,500,600,700" rel="stylesheet" type="text/css">
<link href="./resources/vendor/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
<link href="./resources/css/animate.css" rel="stylesheet">
<link href="./resources/vendor/swiper/css/swiper.min.css" rel="stylesheet" type="text/css"/>
<link href="./resources/css/layout.min.css" rel="stylesheet" type="text/css"/>
<link rel="shortcut icon" href="favicon.ico"/>
<link href="./resources/css/ItGen.css" rel="stylesheet" type="text/css"/>

<!-- JS FILES --> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
<script src="http://code.jquery.com/jquery-3.1.1.js"></script>
<script src="./resources/js/bootstrap.min.js"></script> 
<script src="./resources/js/jquery.flexslider-min.js"></script> 
<script src="./resources/js/retina.min.js"></script> 
<script src="./resources/js/modernizr.js"></script> 
<script src="./resources/js/main.js"></script>

<!-- CORE PLUGINS -->
<script src="./resources/vendor/jquery-migrate.min.js" type="text/javascript"></script>

<!-- PAGE LEVEL PLUGINS -->
<script src="./resources/vendor/jquery.easing.js" type="text/javascript"></script>
<script src="./resources/vendor/jquery.back-to-top.js" type="text/javascript"></script>
<script src="./resources/vendor/jquery.smooth-scroll.js" type="text/javascript"></script>
<script src="./resources/vendor/jquery.wow.min.js" type="text/javascript"></script>
<script src="./resources/vendor/swiper/js/swiper.jquery.min.js" type="text/javascript"></script>
<script src="./resources/vendor/masonry/jquery.masonry.pkgd.min.js" type="text/javascript"></script>
<script src="./resources/vendor/masonry/imagesloaded.pkgd.min.js" type="text/javascript"></script>

<!-- PAGE LEVEL SCRIPTS -->
<script src="./resources/js/layout.min.js" type="text/javascript"></script>
<script src="./resources/js/components/wow.min.js" type="text/javascript"></script>
<script src="./resources/js/components/swiper.min.js" type="text/javascript"></script>
<script src="./resources/js/components/masonry.min.js" type="text/javascript"></script>

<style>
  .modal-header, .close, .h5bold {
      background-color: #422700;
      color:white !important;
      text-align: center;
      font-size: 30px;
  }
  .modal-footer {
      background-color: #f9f9f9;
  }
  
  
</style>
<!-- Header Section -->
<section class="tophead" role="tophead"> 
<header id="header">
  <div class="header-content clearfix"> <a class="logo" href="/cu/menu">Self Tour Guide book</a>
    <nav class="navigation" role="navigation">
      <ul class="primary-nav">
         	  <li><a href="http://localhost:8888/cu/menu">Menu</a></li>
         	  <li><a href="#" id="withdrawal">会員脱会</a></li> 	
	          <li><a href="logout">ログアウト</a></li> 	
      </ul>
    </nav>
  <a href="#" class="nav-toggle">メニュー<span></span></a> </div>
  </header>
</section>
</head>
<body>


<!-- Jquery start -->


<script>
$(function(){
	/* if("${msg}".equals("회원정보 수정 완료!")){
		alert("${msg}");
	}; */
	
	if($("#editForm").submit(function(){
		if($("#pw").val() !== $("#pw2").val()){
			alert("パスワードが異なります。");
			$("#pw").val("").focus();
			$("#pw2").val("");
			return false;
		}
		else if ($("#pw").val().length < 8) {
			alert("パスワードは8桁以上設定可能です。");
			$("#pw").val("").focus();
			return false; 
		}else if($.trim($("#pw").val()) !== $("#pw").val()){
			alert("空白は入力できません。");
			return false;
		}
		
	}));
	
	  $("#withdrawal").click(function(){
          $("#myModal4").modal();
      });
});
	

</script>

       <div class="bg-color-sky-light">
            <div class="content-md container">
<div class="container">
<div class="row divposition">
    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3" position="relative" top="80px">
    
		<form role="form" id="editForm" action="update_mypage" method="post">
			<hr class="colorgraph">
			
			<div class="form-group">
				<input type="text" name="id" id="id" class="form-control input-lg"  tabindex="3" value="${member.id}" readonly="readonly">
			</div>
			<div class="form-group">
				<input type="nickname" name="nickname" id="nickname" class="form-control input-lg" value = "${member.nickname}" tabindex="4">
			</div>
			<div class="row">
				<div class="col-xs-6 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="password" name="pw" id="pw" class="form-control input-lg" placeholder="Password" tabindex="5">
					</div>
				</div>
				<div class="col-xs-6 col-sm-6 col-md-6">
					<div class="form-group">
						<input type="password" name="pw_confirmation" id="pw2" class="form-control input-lg" placeholder="Confirm Password" tabindex="6">
					</div>
				</div>
			</div>
			<div class="row">
			</div>
			<hr class="colorgraph">
		
			<div class="row">
				<div class="col-xs-6 col-md-6"><a href="menu" class="btn btn-success btn-block btn-lg">キャンセル</a></div>
				<div class="col-xs-6 col-md-6"><input type="submit" value="変更する" class="btn btn-primary btn-block btn-lg" id="formSubmit" tabindex="7"></div>
			</div>
		</form>
	</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="myModal4" role="dialog">
  <div class="modal-dialog">
    Modal content
    <div class="modal-content">
      <div class="modal-header" style="padding:35px 50px;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h5 class="h5bold">会員脱退</h5>
      </div>
      <div class="modal-body" style="padding:40px 50px;">
          <div class="form-group">
            <label for="username">もう一度情報を入力してください。</label>
            <label for="usrname"></label>
            <form action="withdrawal" method="post">
            <label for="usrname">ID</label>
             <input type="text" class="form-control" name = "id" id="withdrawalId" placeholder="Enter ID">
             <label for="usrname"> </label>
             <label for="usrname">Password</label>
             <input type="password" class="form-control" name = "pw" id="withdrawalPw" placeholder="Enter Password">
          </div>
            <button type="submit" id ="withdrawlSubmit" class="btn btn-success btn-block" style="background: #FFECB4; border-color: transparent; color: #422700">会員脱退する</button>
            </form>
      </div>
    </div>
      
  </div>
 </div> 
 
</body>
<!-- footer section -->

<footer id="contact" class="footer">
  <div class="container-fluid">
    <div class="col-md-2 left">
      <h4>Office Location</h4>
    </div>
    <div class="col-md-2 left">
      <h4>Contact</h4>
        Email : <a href="mailto:hello@ascom.com.co"> hello@ascom.com.co </a></p>
    </div>
    <div class="col-md-6 right">
      <p>© 2015 All rights reserved. All Rights Reserved<br>
        Made with <i class="fa fa-heart pulse"></i> by <a href="http://www.designstub.com/">Designstub</a></p>
    </div>
  </div>
</footer>
</html>