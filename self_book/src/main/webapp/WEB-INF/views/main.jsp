<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Self Tour Book </title>

<!-- CSS FILES --> 
<link rel="stylesheet" href="./resources/css/bootstrap.min.css">
<link rel="stylesheet" href="./resources/css/flexslider.css">
<link rel="stylesheet" href="./resources/css/main.css">
<link rel="stylesheet" href="./resources/css/responsive.css">
<link rel="stylesheet" href="./resources/css/animate.min.css">
<link rel="stylesheet" href="./resources/css/sweetalert.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css'/>

<!-- JS FILES --> 
<script src="http://code.jquery.com/jquery-3.1.1.js"></script>
<script src="./resources/js/bootstrap.min.js"></script> 
<script src="./resources/js/jquery.flexslider-min.js"></script> 
<script src="./resources/js/retina.min.js"></script> 
<script src="./resources/js/modernizr.js"></script> 
<script src="./resources/js/main.js"></script>
<script src="./resources/js/sweetalert.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>

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
</head>
<body>


<!-- Jquery start -->
<script>
 $(function () {
       $("#login").click(function(){
           $("#myModal").modal();
       });
       
       $("#join").click(function(){
           $("#myModal2").modal();
       });
       
       $("#find_pw_form").click(function(){
           $("#myModal3").modal();
       });
       
 
 	$("#joinId").keyup(function() {
		$.ajax({
			url : "check_id",
			type : "POST",
			data : {
				id : $("#joinId").val()
			},
			success : function(result) {
				if (result == 1) {
					$("#id_check").html("중복된 이메일 주소가 있습니다.");
					$("#joinSubmit").attr("disabled", "disabled");
				} else {
					$("#id_check").html("");
					$("#joinSubmit").removeAttr("disabled");
				}
			},
			error: function(e){
				console.log(e);
			}
		})
	});
 
 
 $("#joinForm").submit(function(){
		if($("#joinPw").val() !== $("#joinPw2").val()){
			alert("비밀번호가 다릅니다.");
			$("#joinPw").val("").focus();
			$("#joinPw2").val("");
			return false;
		}else if ($("#pw").val().length < 8) {
			alert("비밀번호는 8자 이상으로 설정해야 합니다.");
			$("#pw").val("").focus();
			return false;
		}else if($.trim($("#joinPw").val()) !== $("#joinPw").val() || $.trim($("#joinNickname").val()) !== $("#joinNickname").val() || $.trim($("#joinId").val()) !== $("#joinId").val()){
			alert("공백은 입력이 불가능합니다.");
			return false;
		}
		return true;
	})

   });
</script>

<script>
	function loginCheck(){
		var idCheck = document.getElementById("id").value;
		var pwCheck = document.getElementById("pw").value;
		alert(idCheck+pwCheck);
		
		if (idCheck.length == 0 || pwCheck.length == 0) {
			sweetAlert({
	             title: "!", 
	              text: "값을 입력해주세요", 
	              type: "error"
	          });
			return false;
		}
		return true;
		
	}

	$(function(){
		$("#findbtn").click(function(){
			$.ajax({
				url : "find_pw",
				type : "POST",
				data : {
					id : $("#findId").val()
				},
				success : function(result) {
					alert(result);
				},
				error: function(e){
					console.log(e);
				}
			})
		});
	});



</script>

<!-- Header Section -->
<section class="tophead" role="tophead"> 
<header id="header">
  <div class="header-content clearfix"> <a class="logo" href="#">Self Tour Book</a>
    <nav class="navigation" role="navigation">
      <ul class="primary-nav">
          <li><a href="/cu">Home</a></li>
          <li><a href="#services" id="login" class="login">Login</a></li> 
      </ul>
    </nav>
  <a href="#" class="nav-toggle login">Menu<span></span></a> </div>
  </header>
</section>

<!-- Slider Section -->
<section id="header-slider" class="section">
  <div id="myCarousel" class="carousel slide" data-ride="carousel"> 
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item active"> <img src="./resources/images/slider/slid4.png" alt="Chania">
        <div class="carousel-caption">
          <h3>Make your own book</h3>
          <p>Do it your self</p>
        </div>
      </div>
      <div class="item"> <img src="./resources/images/slider/slid3.png" alt="Chania">
        <div class="carousel-caption">
          <h3>Make your own book</h3>
          <p>Do it your self</p>
        </div>
      </div>
    </div>
    <!-- Controls --> 
    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span></a> <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span></a></div>
</section>



<!-- footer section -->
<footer id="contact" class="footer">
  <div class="container-fluid">
    <div class="col-md-2 left">
      <h4>Office Location</h4>
<!--       <p> Collins Street West Victoria 8007 Australia.</p> -->
    </div>
    <div class="col-md-2 left">
      <h4>Contact</h4>

        Email : <a href="mailto:hello@agency.com"> hello@agency.com </a></p>
    </div>
    <div class="col-md-6 right">
      <p>© 2015 All rights reserved. All Rights Reserved<br>
        Made with <i class="fa fa-heart pulse"></i> by <a href="http://www.designstub.com/">Designstub</a></p>
    </div>
  </div>
</footer>


<!-- Modal login-->
<div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">
    
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header" style="padding:35px 50px;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h5 class="h5bold">Login</h5>
      </div>
      <div class="modal-body" style="padding:40px 50px;">
        <form id ="loginForm" action="login" onsubmit="return loginCheck()" method="post">
          <div class="form-group">
            <label for="usrname">ID</label>
            <input type="text" class="form-control" id="loginId" name="id" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="psw">Password</label>
            <input type="password" class="form-control" id="loginPw" name="pw" placeholder="Enter password">
          </div>
            <button type="submit" id="login_submit" class="btn btn-success btn-block" style="background: #FFECB4; border-color: transparent; color: #422700"> Login</button>
        </form>
      </div>
      <div class="modal-footer">
        <p>Not a member? <a href="#" id="join" data-dismiss="modal">Sign Up</a></p>
        <p>Forgot <a href="#" id="find_pw_form" data-dismiss="modal">Password?</a></p>
      </div>
    </div>
      
  </div>
 </div> 
</div>


<!-- Modal Join-->
 <div class="modal fade" id="myModal2" role="dialog">
  <div class="modal-dialog">
    
    Modal content
    <div class="modal-content">
      <div class="modal-header" style="padding:35px 50px;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h5 class="h5bold">Sign Up</h5>
      </div>
      <div class="modal-body" style="padding:40px 50px;">
        <form role="form" id="joinForm" action="join_member" method="post">
          <div class="form-group">
            <label for="username">ID</label>
            <input type="text" class="form-control" name = "id" id="joinId" placeholder="Enter Email Address">
            <span id="id_check" class="w3-text-red"></span>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="pw" id="joinPw" placeholder="Enter Password">
          </div>
          <div class="form-group">
            <label for="password">Check Password</label>
            <input type="password" class="form-control" id="joinPw2" placeholder="Enter Password">
          </div>
          <div class="form-group">
            <label for="psw">Nickname</label>
            <input type="text" class="form-control" name="nickname" id="joinNickname" placeholder="Enter Nickname">
          </div>          
            <button type="submit" id ="joinSubmit" class="btn btn-success btn-block" style="background: #FFECB4; border-color: transparent; color: #422700">Sign up</button>
        </form>
      </div>
    </div>
      
  </div>
 </div> 
</div>


<!--find pw  -->
<div class="modal fade" id="myModal3" role="dialog">
  <div class="modal-dialog">
    
    Modal content
    <div class="modal-content">
      <div class="modal-header" style="padding:35px 50px;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h5 class="h5bold">Sign Up</h5>
      </div>
      <div class="modal-body" style="padding:40px 50px;">
          <div class="form-group">
            <label for="username">ID</label>
            <input type="text" class="form-control" name = "id" id="findId" placeholder="Enter Email Address">
          </div>
            <button type="button" id ="findbtn" class="btn btn-success btn-block" style="background: #FFECB4; border-color: transparent; color: #422700">임시비밀번호 받기</button>
      </div>
    </div>
      
  </div>
 </div> 


</body>
</html>