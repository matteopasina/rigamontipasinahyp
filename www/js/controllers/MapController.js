


app.controller('MapCtrl',['$scope','$http','uiGmapGoogleMapApi' ,function ($scope,$http, uiGmapGoogleMapApi) {

    $http.get("http://grandepalestra.altervista.org/Location.php")
      .success(function(response) {
      $scope.info = response[0];
        var latStr=JSON.stringify($scope.info.lat).replace(",",".");
        //var lat=parseFloat(JSON.stringify($scope.info.lat).replace(",","."));
        var lngStr=JSON.stringify($scope.info.lng).replace(",",".");
        var c = JSON.stringify($scope.info.city);
        var desc=JSON.stringify($scope.info.descr);
        var lat=latStr.replace('"','');
    lat=lat.replace('"','');
    var lng= lngStr.replace('"','');
    lng=lng.replace('"','');
    var zoom=12;
          
    uiGmapGoogleMapApi.then(function(maps) {
          console.log('maps API loaded; creating map');
          $scope.map = { center: { latitude: lat, longitude: lng }, zoom: zoom };
         $scope.marker = {
      id: 0,
      coords: {
        latitude: lat,
        longitude: lng
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
          });
/*var city = 
    {
        city : c,
        desc : desc,
        lat : lat,
        long : lng
    }
    ;
    
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(lat, lng),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        
        $scope.markers.push(marker);
        
    };  
        createMarker(city);
    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    };*/
        
      }); 
    
    
    
}]);
