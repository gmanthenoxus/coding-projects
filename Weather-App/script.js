document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchWeather, handleLocationError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function fetchWeather(position) {
    const apiKey = '95b2dee96f9142fc95d03141241201';
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=yes`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(weatherData => displayWeather(weatherData))
        .catch(error => console.error('Error fetching weather data:', error));
}

function handleLocationError(error) {
    alert(`Error getting location: ${error.message}`);
}

function displayWeather(weatherData) {
    const weatherContainer = document.getElementById('weather-container');
    const weatherInfo = document.getElementById('weather-info');

    const cityName = weatherData.location.name;
    const countryName = weatherData.location.country;
    const temperature = weatherData.current.temp_c; 

    weatherContainer.innerHTML = `<h2>Weather in ${countryName}</h2>`;
    weatherInfo.innerHTML = `<p>City: ${cityName}</p>
                             <p>Temperature: ${temperature} °C</p>`;
}
