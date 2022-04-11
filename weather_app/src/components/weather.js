import React from 'react';

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
var date = today.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })

const Weather = ({ WeatherData, city }) => (
    <>
        <div className="card1 col-lg-8 col-md-7">
            <div className="text-center"> <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" /> </div>
            <div className="row px-3 mt-3 mb-3">
                <h1 className="large-font mr-3">{Math.floor(WeatherData.main.temp)}°</h1>
                <div className="d-flex flex-column mr-3">
                    <h2 className="mt-3 mb-0">{(city !== "") ? city : WeatherData.name}</h2> <small>{time} - {date}</small>
                </div>
                <div className="d-flex flex-column text-center">
                    <h3 className="fa fa-sun-o mt-4" /> <small>{WeatherData.weather[0].main}</small>
                </div>
            </div>
        </div>
    </>)


export default Weather;