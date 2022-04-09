import React from 'react';
import './weather.css';

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
var date = new Date().toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" })

const Weather = ({ WeatherData }) => (
    <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
            <div className="row card0">
                <div className="card1 col-lg-8 col-md-7"> <small>the.weather</small>
                    <div className="text-center"> <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" /> </div>
                    <div className="row px-3 mt-3 mb-3">
                        <h1 className="large-font mr-3">{Math.floor(WeatherData.main.temp)}°</h1>
                        <div className="d-flex flex-column mr-3">
                            <h2 className="mt-3 mb-0">{WeatherData.name}</h2> <small>{time} - {date}</small>
                        </div>
                        <div className="d-flex flex-column text-center">
                            <h3 className="fa fa-sun-o mt-4" /> <small>{WeatherData.weather[0].main}</small>
                        </div>
                    </div>
                </div>
                <div className="card2 col-lg-4 col-md-5">
                    <div className="row px-3"> <input type="text" name="location" placeholder="Another location" className="mb-5" />
                        <div className="fa fa-search mb-5 mr-0 text-center" />
                    </div>
                    <div className="mr-5">
                        <p className="light-text suggestion">Birmingham</p>
                        <p className="light-text suggestion">Manchester</p>
                        <p className="light-text suggestion">New York</p>
                        <p className="light-text suggestion">California</p>
                        <div className="line my-5" />
                        <p>Weather Details</p>
                        <div className="row px-3">
                            <p className="light-text">Humidity</p>
                            <p className="ml-auto">{WeatherData.main.humidity}%</p>
                        </div>
                        <div className="row px-3">
                            <p className="light-text">Wind</p>
                            <p className="ml-auto">{WeatherData.wind.speed} km/h</p>
                        </div>
                        <div className="row px-3">
                            <p className="light-text">Sunrise</p>
                            <p className="ml-auto">{new Date(WeatherData.sys.sunrise * 1000).toLocaleTimeString('en-us')}</p>
                        </div>
                        <div className="row px-3">
                            <p className="light-text">Sunset</p>
                            <p className="ml-auto">{new Date(WeatherData.sys.sunset * 1000).toLocaleTimeString('en-us')}</p>
                        </div>
                        <div className="line mt-3" />
                    </div>
                </div>
            </div>
        </div>
    </div>)

export default Weather;