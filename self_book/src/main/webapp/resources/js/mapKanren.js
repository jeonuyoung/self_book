 
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
				 
		  /* 장소검색 場所検索 */
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
				
        var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        	};
        document.getElementById('searchMap').addEventListener('click', onChangeHandler);
		}

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    	  console.log(document.getElementById("origin").value);
    	  console.log(document.getElementById("destination").value);
    	  console.log(document.getElementById("travelMode").value);
        directionsService.route({
        	origin: document.getElementById("origin").value,
			  destination: document.getElementById("destination").value,
			    travelMode: document.getElementById('travelMode').value,
			    	drivingOptions: {
				        departureTime: new Date(Date.now()),  
				        trafficModel: 'pessimistic'
				      },
			      unitSystem: google.maps.UnitSystem.IMPERIAL,
			    avoidHighways: false,
			    avoidTolls: false
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            console.log(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

