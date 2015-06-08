


app.controller('MapCtrl',['$scope','$http',function ($scope,$http) {

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
var city = 
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
    };
        
      }); 
    
    
    
}]);
