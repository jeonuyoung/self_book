<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
<head>
 <meta charset="utf-8">
 <meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

 <meta name="description" content="">
 <meta name="author" content="">
 <link rel="icon" href="favicon.ico">
 <base href="">
 <title>Self Tour Guide Book</title>
    
 <link href="./resources/css/editor.css" rel="stylesheet">
 <link href="./resources/css/line-awesome.css" rel="stylesheet">
  <link href="./resources/css/mapCss.css" rel="stylesheet">
    
<!-- jquery-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> 
<script src="http://code.jquery.com/jquery-3.1.1.js"></script>
<script src="./resources/js/jquery.hotkeys.js"></script>
<script src="./resources/js/tendina.js"></script>


<!-- bootstrap-->
<script src="./resources/js/popper.min.js"></script>
<script src="./resources/js/bootstrap.min.js"></script>

<!-- builder code-->
<script src="./resources/libs/builder/builder.js"></script>	
<!-- undo manager-->
<script src="./resources/libs/builder/undo.js"></script>	

<!-- inputs-->
<script src="./resources/libs/builder/inputs.js"></script>	
<script src="./resources/js/mapKanren.js"></script> 
<!-- components-->
<script src="./resources/libs/builder/components-bootstrap4.js"></script>	
<script src="./resources/libs/builder/components-widgets.js"></script>	


<script>
$(function(){
	$('#menu1').tendina();
	
});

function openTab(tab) {
    var i;
    var x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(tab).style.display = "block"; 
}
</script>

</head>
<body>


	<div id="vvveb-builder">
				
				<div id="top-panel">
				
					<div alt="Vvveb" class="float-left" id="logo"> Self Tour Guide Book</div>
					
					
					<div class="btn-group mr-3" role="group">
					  <button class="btn btn-light" title="Undo (Ctrl/Cmd + Z)" id="undo-btn" data-vvveb-action="undo" data-vvveb-shortcut="ctrl+z">
						  <i class="la la-undo"></i>
					  </button>

					  <button class="btn btn-light"  title="Redo (Ctrl/Cmd + Shift + Z)" id="redo-btn" data-vvveb-action="redo" data-vvveb-shortcut="ctrl+shift+z">
						  <i class="la la-undo la-flip-horizontal"></i>
					  </button>
					</div>
										
					
					<div class="btn-group mr-3" role="group">
					  <button class="btn btn-light" title="Fullscreen (F11)" id="fullscreen-btn" data-toggle="button" aria-pressed="false" data-vvveb-action="fullscreen">
						  <i class="la la-arrows"></i>
					  </button>

					  <button class="btn btn-light" title="Preview" id="preview-btn" type="button" data-toggle="button" aria-pressed="false" data-vvveb-action="preview">
						  <i class="la la-eye"></i>
					  </button>

					  <button class="btn btn-light" title="Export (Ctrl + E)" id="save-btn" data-vvveb-action="save2" data-vvveb-shortcut="ctrl+e">
						  <i class="la la-save"></i> <!--  여긴그냥 이미지-->
					  </button>
					 
					 <button class="btn btn-light" title="test" id="save-btn" data-vvveb-action="test" data-vvveb-shortcut="ctrl+e">
						  <i class="la la-save"></i> <!--  여긴그냥 이미지-->
					  </button>
					  
					</div>	

										
				</div>	
				
				<div id="left-panel">
					  <div id="components">
						<div class="header">
							  <input class="form-control form-control-sm" placeholder="" type="text" id="component-search"  data-vvveb-action="componentSearch" data-vvveb-on="keyup">
							  <button id="clear-backspace"  data-vvveb-action="clearComponentSearch">
								  <i class="ion-backspace"></i>
							  </button>
						</div>
						
						  <div class="tabset">
					  <input type="radio" name="tabset" id="tab1" aria-controls="Elements" checked onclick="openTab('Elements');">
					  <label for="tab1">Elements</label>
					  <input type="radio" name="tabset" id="tab2" aria-controls="MapDiv" onclick="openTab('MapDiv');">
					  <label for="tab2">Map</label>
					  <input type="radio" name="tabset" id="tab3" aria-controls="Information" onclick="openTab('Info');">
					  <label for="tab3">Info</label>
							
							<div id="components-sidepane" class="sidepane">
							<div class="tab-panels tab" id="Elements">
							<ul id="components-list" class="clearfix">
							</ul>
							</div>
							<div class="tab-panels tab" id="MapDiv" style="display:none">
								<div id="map"></div>
									<div class="map_row" id="map_div">
								
    							<p>経路を探す</p>
									<input type="text" id="origin" placeholder="Start" class="pac-input controls"><br>
									<input type="text" id="destination" placeholder="End" class="pac-input controls"><br>
								<p>移動手段</p>
									<select name="travelMode" id="travelMode">
									    <option value="DRIVING">自動車</option>
									    <option value="BICYCLING">自転車</option>
									    <option value="TRANSIT">公共交通</option>
									    <option value="WALKING">徒步</option>
									</select><br>
								<input type="checkbox" id="avoidHighways"">高速道路を探す<input type="checkbox" id="avoidTolls">有料道路を探す

								<button type="button" id="searchMap" class="peter-river-flat-button">サーチ</button><br>
								
								<input type="text" id="search" placeholder="Search" class="pac-input controls"><br>
								<button type="button" id="searchPlace" class = "peter-river-flat-button">場所サーチ</button>
							</div>










							</div>
							<div class="tab-panels tab" id="Info" style="display:none">
								정보 들어가기
							</div>

						  </div>
						</div>
					  </div>


				</div>

				<div id="canvas">
					<div id="iframe-wrapper">
						<div id="iframe-layer">
							
							<div id="highlight-box">
								<div id="highlight-name"></div>
								
							</div>

							<div id="select-box">

								<div id="wysiwyg-editor">
										<a id="bold-btn" href="" title="Bold"><i><strong>B</strong></i></a>
										<a id="italic-btn" href="" title="Italic"><i>I</i></a>
										<a id="underline-btn" href="" title="Underline"><u>u</u></a>
										<a id="strike-btn" href="" title="Strikeout"><strike>S</strike></a>
										<a id="link-btn" href="" title="Create link"><strong>a</strong></a>
								</div>

								<div id="select-actions">
									<a id="drag-box" href="" title="Drag element"><i class="ion-arrow-move"></i></a>
									<a id="parent-box" href="" title="Select parent"><i class="ion-reply"></i></a>
									
									<a id="up-box" href="" title="Move element up"><i class="ion-arrow-up-a"></i></a>
									<a id="down-box" href="" title="Move element down"><i class="ion-arrow-down-a"></i></a>
									<a id="clone-box" href="" title="Clone element"><i class="ion-ios-copy"></i></a>
									<a id="delete-box" href="" title="Remove element"><i class="ion-trash-a"></i></a>
								</div>
							</div>
							
						
						</div>
						<iframe src="about:none" id="iframe1"></iframe>
						
					</div>
					
					
				</div>

				<div id="right-panel">
					<div id="component-properties">
					</div>
				</div>
				
				<div id="bottom-panel">
				</div>	
			</div>


<!-- templates -->

<script id="vvveb-input-textinput" type="text/html" >
	
	<div>
		<input name="{%=key%}" type="text" class="form-control"/>
	</div>
	
</script>



<script id="vvveb-input-checkboxinput" type="text/html">
	
	<div>

		<label class="custom-control custom-checkbox">
		  <input name="{%=key%}" class="custom-control-input" type="checkbox"><span class="custom-control-indicator"></span>
		  <!-- span class="custom-control-description">Text</span -->
		</label>

	</div>
	
</script>


<script id="vvveb-input-toggle" type="text/html">
	
    <div class="toggle">
        <input type="checkbox" name="{%=key%}" value="{%=on%}" data-value-off="{%=off%}" data-value-on="{%=on%}" class="toggle-checkbox" id="{%=key%}">
        <label class="toggle-label" for="{%=key%}">
            <span class="toggle-inner"></span>
            <span class="toggle-switch"></span>
        </label>
    </div>
	
</script>

<script id="vvveb-input-header" type="text/html">

		<h6 class="header">{%=header%}</h6>
	
</script>

	
<script id="vvveb-input-select" type="text/html">

	<div>

		<select class="form-control custom-select">
			{% for ( var i = 0; i < options.length; i++ ) { %}
			<option value="{%=options[i].value%}">{%=options[i].text%}</option>
			{% } %}
		</select>
	
	</div>
	
</script>

<script id="vvveb-input-grid" type="text/html">

	<div class="row">
		<div class="mb-1 col-12">
		
			<label>Flexbox</label>
			<select class="form-control custom-select" name="col">
				
				<option value="">None</option>
				{% for ( var i = 1; i <= 12; i++ ) { %}
				<option value="{%=i%}" {% if ((typeof col !== 'undefined') && col == i) { %} selected {% } %}>{%=i%}</option>
				{% } %}
				
			</select>
			<br/>
		</div>

		<div class="col-6">
			<label>Extra small</label>
			<select class="form-control custom-select" name="col-xs">
				
				<option value="">None</option>
				{% for ( var i = 1; i <= 12; i++ ) { %}
				<option value="{%=i%}" {% if ((typeof col_xs !== 'undefined') && col_xs == i) { %} selected {% } %}>{%=i%}</option>
				{% } %}
				
			</select>
			<br/>
		</div>
		
		<div class="col-6">
			<label>Small</label>
			<select class="form-control custom-select" name="col-sm">
				
				<option value="">None</option>
				{% for ( var i = 1; i <= 12; i++ ) { %}
				<option value="{%=i%}" {% if ((typeof col_sm !== 'undefined') && col_sm == i) { %} selected {% } %}>{%=i%}</option>
				{% } %}
				
			</select>
			<br/>
		</div>
		
		<div class="col-6">
			<label>Medium</label>
			<select class="form-control custom-select" name="col-md">
				
				<option value="">None</option>
				{% for ( var i = 1; i <= 12; i++ ) { %}
				<option value="{%=i%}" {% if ((typeof col_md !== 'undefined') && col_md == i) { %} selected {% } %}>{%=i%}</option>
				{% } %}
				
			</select>
			<br/>
		</div>
		
		<div class="col-6 mb-1">
			<label>Large</label>
			<select class="form-control custom-select" name="col-lg">
				
				<option value="">None</option>
				{% for ( var i = 1; i <= 12; i++ ) { %}
				<option value="{%=i%}" {% if ((typeof col_lg !== 'undefined') && col_lg == i) { %} selected {% } %}>{%=i%}</option>
				{% } %}
				
			</select>
			<br/>
		</div>
		
		{% if (typeof hide_remove === 'undefined') { %}
		<div class="col-12">
		
			<button class="btn btn-sm btn-outline-light text-danger">
				<i class="ion-trash-a"></i> Remove
			</button>
			
		</div>
		{% } %}
		
	</div>
	
</script>


<script id="vvveb-input-textvalue" type="text/html">

	<div class="row">
		<div class="col-6 mb-1">
			<label>Value</label>
			<input name="value" type="text" value="{%=value%}" class="form-control"/>
		</div>

		<div class="col-6 mb-1">
			<label>Text</label>
			<input name="text" type="text" value="{%=text%}" class="form-control"/>
		</div>

		{% if (typeof hide_remove === 'undefined') { %}
		<div class="col-12">
		
			<button class="btn btn-sm btn-outline-light text-danger">
				<i class="ion-trash-a"></i> Remove
			</button>
			
		</div>
		{% } %}

	</div>

</script>

<script id="vvveb-input-rangeinput" type="text/html">
	
	<div>
		<input name="{%=key%}" type="range" min="{%=min%}" max="{%=max%}" step="{%=step%}" class="form-control"/>
	</div>
	
</script>

<script id="vvveb-input-button" type="text/html">
	<div>
		<button class="btn btn-sm btn-primary">
			<i class="ion-trash-a"></i> {%=text%}
		</button>
	</div>		
</script>


<script id="vvveb-property" type="text/html">

	<div class="form-group row" data-key="{%=key%}">
		<label class="col-sm-4 control-label" for="input-model">{%=name%}</label>
		<div class="col-sm-8 input">
		 </div>
	</div>		 
	

</script>

<!--// end templates -->





<script>
$(document).ready(function() 
{
	Vvveb.Builder.init('./resources/demo/index2.html', function() {
		//load code after page is loaded here
		Vvveb.Gui.init();
	});
});
	
</script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1SXZMCJFk4dRd7MZCDWHk0jINUtI9v2Y&libraries=places&callback=initMap"
        async defer></script>
</body>
</html>