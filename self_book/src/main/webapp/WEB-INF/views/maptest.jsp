<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <script src="http://code.jquery.com/jquery-3.1.1.js"></script>
    <title>Directions service</title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 30%;
        width: 100%
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      #floating-panel {
        position: absolute;
        top: 10px;
        left: 25%;
        z-index: 5;
        background-color: #fff;
        padding: 5px;
        border: 1px solid #999;
        text-align: center;
        font-family: 'Roboto','sans-serif';
        line-height: 30px;
        padding-left: 10px;
      }
       #locationField, #controls {
        position: relative;
        width: 480px;
      }
      #autocomplete {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 99%;
      }
      .label {
        text-align: right;
        font-weight: bold;
        width: 100px;
        color: #303030;
      }
      #address {
        border: 1px solid #000090;
        background-color: #f0f0ff;
        width: 480px;
        padding-right: 2px;
      }
      #address td {
        font-size: 10pt;
      }
      .field {
        width: 99%;
      }
      .slimField {
        width: 80px;
      }
      .wideField {
        width: 200px;
      }
      #locationField {
        height: 20px;
        margin-bottom: 2px;
      }
            #pac-input {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 300px;
      }

   /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
     
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .controls {
        margin-top: 10px;
        border: 1px solid transparent;
        border-radius: 2px 0 0 2px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        height: 32px;
        outline: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      }

      .pac-input {
        background-color: #fff;
        font-family: Roboto;
        font-size: 15px;
        font-weight: 300;
        margin-left: 12px;
        padding: 0 11px 0 13px;
        text-overflow: ellipsis;
        width: 300px;
      }

      #pac-input:focus {
        border-color: #4d90fe;
      }

      .pac-container {
        font-family: Roboto;
      }

      #type-selector {
        color: #fff;
        background-color: #4d90fe;
        padding: 5px 11px 0px 11px;
      }

      #type-selector label {
        font-family: Roboto;
        font-size: 13px;
        font-weight: 300;
      }
    </style>
     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1SXZMCJFk4dRd7MZCDWHk0jINUtI9v2Y&libraries=places"></script>
     <script type="text/javascript">
    // $("#map_div").
   
	 
     </script>
  </head>
  <body>
<div class="map_row" id="map_div">
	<!-- <input id="pac-input" class="controls" type="text" placeholder="Enter a location"> -->
    
								<input type="text" id="origin" placeholder="Start" class="pac-input controls"><br>
								<input type="text" id="destination" placeholder="end" class="pac-input controls"><br>
								<p>이동수단</p>
								<select name="travelMode" id="travelMode">
								    <option value="DRIVING">car</option>
								    <option value="BICYCLING">bike</option>
								    <option value="TRANSIT">transit</option>
								    <option value="WALKING">walk</option>
								</select><br>
								<input type="checkbox" id="provideRouteAlternatives">여러경로 찾기<br>
								<input type="checkbox" id="avoidHighways">고속도로 제외<br>
								<input type="checkbox" id="avoidTolls"> 유료도로 제외<br>

								<button type="button" id="searchMap">Search</button><br>
								
								
								<input type="text" id="search" placeholder="Search" class="pac-input controls"><br>
								<button type="button" id="searchPlace">Search Places</button>
							</div>
    <div id="map"></div>
    
    <script>
      
      function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);
        
        /* 현재 위치 반환 */
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, map.getCenter());
        }
        
        
        //keyup 
        function auto(input){
        	var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.addListener('place_changed', function() {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                  // User entered the name of a Place that was not suggested and
                  // pressed the Enter key, or the Place Details request failed.
                  window.alert("場所を探し出せなかった。: '" + place.name + "'");
                  return;
                }

                // If the place has a geometry, then present it on a map.
                if (place.geometry.viewport) {
                  map.fitBounds(place.geometry.viewport);
                } else {
                  map.setCenter(place.geometry.location);
                  map.setZoom(17);  // Why 17? Because it looks good.
                }
              });
        }
        
        var input = document.getElementById("origin");
        auto(input);
        
        $(function(){
		 $("#destination").focusin(function(){
			 input = document.getElementById('destination');
			 autocomplete=new google.maps.places.Autocomplete(input);
			 auto(input);
			 
		 });
		 $("#waypoints").focusin(function(){
			 input = document.getElementById('waypoints');
			 autocomplete=new google.maps.places.Autocomplete(input);
			 auto(input);
		 });
		 
		 $("#search").focusin(function(){
			 input = document.getElementById('search');
			 autocomplete=new google.maps.places.Autocomplete(input);
			 var autocomplete = new google.maps.places.Autocomplete(input);
			 var place;
	            autocomplete.addListener('place_changed', function() {
	                place = autocomplete.getPlace();
	                if (!place.geometry) {
	                  // User entered the name of a Place that was not suggested and
	                  // pressed the Enter key, or the Place Details request failed.
	                  window.alert("場所を探し出せなかった。: '" + place.name + "'");
	                  return;
	                }

	                // If the place has a geometry, then present it on a map.
	                if (place.geometry.viewport) {
	                  map.fitBounds(place.geometry.viewport);
	                } else {
	                  map.setCenter(place.geometry.location);
	                  map.setZoom(17);  // Why 17? Because it looks good.
	                }
	                
	            var placeId1 = place.place_id;
	            var request1 = {
	            	placeId: placeId1	
	            };
	            
	            service = new google.maps.places.PlacesService(map);
	            service.getDetails(request1, callback);
	            
	            function callback(place,status){
	            	 if (status == google.maps.places.PlacesServiceStatus.OK) {
	            		 console.log(place);
	            	 }
	            }
	            
	              });
	            
			 
		 });
         
     });
        
        /* 장소검색 場所検索 */
        
	        
	        
				
        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };

          document.getElementById('searchMap').addEventListener('click', onChangeHandler);
		  //document.getElementById('searchPlace').addEventListener('click', onChangeHandler);
			
		}

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
        	origin: $("#origin").val(),
			  destination: $("#destination").val(),
			    travelMode:$('#travelMode').val(),
			    	drivingOptions: {
				        departureTime: new Date(Date.now()),  
				        trafficModel: 'pessimistic'
				      },
			      transitOptions: {
			    	    departureTime: new Date(Date.now()),
			    	    routingPreference: 'LESS_WALKING'
			    	  },
			      unitSystem: google.maps.UnitSystem.IMPERIAL,
			    avoidHighways: false,
			    avoidTolls: false
			    
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
      
    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD1SXZMCJFk4dRd7MZCDWHk0jINUtI9v2Y&libraries=places&callback=initMap"
        async defer></script>
  </body>
</html>