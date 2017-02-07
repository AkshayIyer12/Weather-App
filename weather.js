  if(navigator.geolocation)
    {
       var timeoutVal = 10 * 1000 * 1000;
      navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 });
    }
  else {
    alert("Geolocation is not supported by this browser");
  }

  function error() {
  alert("Location not found");
  }
  function success(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&units=metric&APPID=d1e5a1bf13204932205a9240a308c664", 

      function(data){
      var degree = "°C";
      var location = data.name;
      var temp = data.main.temp;
      var imgIcon;
      var wind = data.wind.speed;
      var desc = data.weather[0].description;
      $('#location').html(location);
      $('#temp').html(Math.round(temp)+degree);
      $('#desc').html(desc);
      $("#imgIcon").attr('class', " ");
      
      if(desc == "clear sky"){
        $("#imgIcon").attr('class', 'wi wi-day-sunny');
      }
      else if(desc=="few clouds"){
        $("#imgIcon").attr('class', 'wi wi-day-sunny');
      }
      else if (desc == "scattered clouds") {
       $("#imgIcon").attr('class', 'wi wi-cloud');
     }
     else if (desc == "broken clouds") {
       $("#imgIcon").attr('class', 'wi wi-cloudy');
     }
     else if (desc == "shower rain") {
       $("#imgIcon").attr('class', 'wi wi-showers');
     }
     else if (desc == "rain") {
       $("#imgIcon").attr('class', 'wi wi-rain');
     }
     else if (desc == "thunderstorm") {
       $("#imgIcon").attr('class', 'wi wi-thunderstorm');
     }
     else if (desc == "snow") {
       $("#imgIcon").attr('class', 'wi wi-snow');
     }
     else {
       $("#imgIcon").attr('class', 'wi wi-showers');
    }
     
    $('#temp').on("click", function(){
      if (degree == "°F") {
       var newt = (temp - 32) * 5 / 9;
        degree = "°C";
        $('#temp').html(Math.round(newt) + degree);
      }
      else if (degree == "°C") {
        temp * 9 / 5 + 32;
        degree = "°F";
        $('#temp').html(Math.round(temp) + degree);
    }    
    }); 
    });
  }

    