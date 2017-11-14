<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

<html>
<head>
<meta charset="utf-8">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Auro - Elegant, Minimal, Creative Bootstrap Template </title>

<!-- CSS FILES --> 
<link rel="stylesheet" href="./resources/css/bootstrap.min.css">
<link rel="stylesheet" href="./resources/css/flexslider.css">
<link rel="stylesheet" href="./resources/css/main.css">
<link rel="stylesheet" href="./resources/css/responsive.css">
<link rel="stylesheet" href="./resources/css/animate.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

<!-- JS FILES --> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
<script src="http://code.jquery.com/jquery-3.1.1.js"></script>
<script src="./resources/js/bootstrap.min.js"></script> 
<script src="./resources/js/jquery.flexslider-min.js"></script> 
<script src="./resources/js/retina.min.js"></script> 
<script src="./resources/js/modernizr.js"></script> 
<script src="./resources/js/main.js"></script>

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
	    
	});
</script>


<!-- Header Section -->
<section class="tophead" role="tophead"> 
<header id="header">
  <div class="header-content clearfix"> <a class="logo" href="#">Self-Tourbook</a>
    <nav class="navigation" role="navigation">
      <ul class="primary-nav">
       <c:choose>
         <c:when test="${sessionScope.custid != null}"> <!-- 테스트 후 조건 변경 할 것  -->
          <li><a href="">Home</a></li>
          <li><a href="#services" id="login" class="login">Login</a></li> 
         </c:when>
         <c:otherwise>
         	  <li><a href="menu">Menu</a></li>
	          <li><a href="#services">Logout</a></li> 	
         </c:otherwise>
         </c:choose>        
      </ul>
    </nav>
  <a href="#" class="nav-toggle">Menu<span></span></a> </div>
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
        <form role="form">
          <div class="form-group">
            <label for="usrname">Username</label>
            <input type="text" class="form-control" id="usrname" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="psw">Password</label>
            <input type="text" class="form-control" id="psw" placeholder="Enter password">
          </div>
          <div class="checkbox">
            <label><input type="checkbox" value="" checked>Remember me</label>
          </div>
            <button type="submit" class="btn btn-success btn-block" style="background: #FFECB4; border-color: transparent; color: #422700"> Login</button>
        </form>
      </div>
      <div class="modal-footer">
        <p>Not a member? <a href="#" id="join" data-dismiss="modal">Sign Up</a></p>
        <p>Forgot <a href="#">Password?</a></p>
      </div>
    </div>
      
  </div>
 </div> 
</div>




<!-- Modal Join-->
<div class="modal fade" id="myModal2" role="dialog">
  <div class="modal-dialog">
    
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header" style="padding:35px 50px;">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h5 class="h5bold">Sign Up</h5>
      </div>
      <div class="modal-body" style="padding:40px 50px;">
        <form role="form">
          <div class="form-group">
            <label for="usrname">Username</label>
            <input type="text" class="form-control" id="usrname" placeholder="Enter Username">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="psw" placeholder="Enter Email address">
          </div>
          <div class="form-group">
            <label for="psw">Password</label>
            <input type="text" class="form-control" id="psw" placeholder="Enter password">
          </div>          
            <button type="submit" class="btn btn-success btn-block" style="background: #FFECB4; border-color: transparent; color: #422700">Sign up</button>
        </form>
      </div>
    </div>
      
  </div>
 </div> 
</div>


</body>
</html>