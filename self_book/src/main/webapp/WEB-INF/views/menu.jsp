<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

<head>
<meta charset="utf-8">
<meta name="description" content="">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Self Tour Book </title>

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
</head>
<body>


<!-- Jquery start -->


<!-- Header Section -->
<section class="tophead" role="tophead"> 
<header id="header">
  <div class="header-content clearfix"> <a class="logo" href="#">Self-TourBook</a>
    <nav class="navigation" role="navigation">
      <ul class="primary-nav">
	          <li><a href="logout">Logout</a></li>
      </ul>
    </nav>
  <a href="#" class="nav-toggle">Menu<span></span></a> </div>
  </header>
</section>


       <!--========== PAGE LAYOUT ==========-->
        <!-- Work -->
        <div class="bg-color-sky-light">
            <div class="content-md container">
                <!-- Masonry Grid -->
                <div class="masonry-grid">
                    <div class="masonry-grid-sizer col-xs-6 col-sm-6 col-md-6"></div>
                    <div class="masonry-grid-item col-xs-12 col-sm-6 col-md-6">
                        <!-- Work -->
                        <div class="work">
                            <div class="work-overlay">
                                <img class="full-width img-responsive" src="./resources/img/595x483/01.jpg" alt="Portfolio Image">
                            </div>
                            <div class="work-content">
                                <h3 class="color-white margin-b-5">My page</h3>
                                <p class="color-white margin-b-0">修正・会員脱退</p>
                            </div>
                            <a class="content-wrapper-link" href="mypage"></a>
                        </div>
                        <!-- End Work -->
                    </div>
                    <div class="masonry-grid-item col-xs-6 col-sm-6 col-md-6">
                        <!-- Work -->
                        <div class="work">
                            <div class="work-overlay">
                                <img class="full-width img-responsive" src="./resources/img/595x240/01.jpg" alt="Portfolio Image">
                            </div>
                            <div class="work-content">
                                <h3 class="color-white margin-b-5">Make a book</h3>
                                <p class="color-white margin-b-0">本作り</p>
                            </div>
                            <a class="content-wrapper-link" href="makeabook"></a>
                        </div>
                        <!-- End Work -->
                    </div>
                    <div class="masonry-grid-item col-xs-6 col-sm-6 col-md-6">
                        <!-- Work -->
                        <div class="work">
                            <div class="work-overlay">
                                <img class="full-width img-responsive" src="./resources/img/595x240/02.jpg" alt="Portfolio Image">
                            </div>
                            <div class="work-content">
                                <h3 class="color-white margin-b-5">Saved Books</h3>
                                <p class="color-white margin-b-0">保存された本</p>
                            </div>
                            <a class="content-wrapper-link" href="#"></a>
                        </div>
                        <!-- End Work -->
                    </div>
                </div>
                <!-- End Masonry Grid -->
            </div>
        </div>
        <!-- End Work -->


</body>

<!-- footer section -->
<footer id="contact" class="footer">
  <div class="container-fluid">
    <div class="col-md-2 left">
      <h4>Office Location</h4>
<!--       <p> Collins Street West Victoria 8007 Australia.</p> -->
    </div>
    <div class="col-md-2 left">
      <h4>Contact</h4>

        Email : <a href="mailto:hello@ascom.com.co"> hello@ascom.com.co</a></p>
    </div>
    <div class="col-md-6 right">
      <p>© 2015 All rights reserved. All Rights Reserved<br>
        Made with <i class="fa fa-heart pulse"></i> by <a href="http://www.designstub.com/">Designstub</a></p>
    </div>
  </div>
</footer>
</html>