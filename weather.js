const key = '941b90ebb24c49c6ecaa8dfdf80c560f';
if(key=='941b90ebb24c49c6ecaa8dfdf80c560f') document.getElementById('temp').innerHTML = ('...');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=941b90ebb24c49c6ecaa8dfdf80c560f')  
	.then(function(resp) { return resp.json() })
  
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 2643743 );
}