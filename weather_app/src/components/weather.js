import React from 'react';

const Weather = ({ WeatherData }) => (
    <div>
        <h1>Location: {WeatherData.name}</h1>
        <h2>Temperature: {WeatherData.main.temp}</h2>
        <h2>Sunrise: {new Date(WeatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h2>
        <h2>Sunset: {new Date(WeatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h2>
        <h2>Description: {WeatherData.weather[0].description}</h2>
    </div>

)

export default Weather;