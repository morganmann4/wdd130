const forecastURL = `https://api.openweathermap.org/data/2.5/weather?zip=83549&units=imperial&APPID=f1fa408b88505a26227247e1a8767c30`;

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        //get summary
        const currently = jsObject.weather[0].main
        const temp = jsObject.main.temp_max.toFixed(0);
        const humidity = jsObject.main.humidity;
        const winSpeed = jsObject.wind.speed.toFixed(0);
        
        document.getElementById('currently').textContent = currently;
        document.getElementById('temp').textContent = temp;
        document.getElementById('humidity').textContent = `${humidity}%`;
        document.getElementById('speed').textContent = winSpeed;
        document.getElementById('windchill').textContent = windChill(temp, winSpeed);
    });

function windChill(temperature, speed) {
    if (temperature <= 50 && speed >= 3.0) {
        windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
        windchill = windchill.toFixed(0)
        return `${windchill} °F`
    }else {
        return 'NA';    
    }
}