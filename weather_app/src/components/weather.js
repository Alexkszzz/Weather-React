import React from 'react';

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

const Weather = ({ WeatherData }) => (
    <section className="vh-100" style={{ backgroundColor: '#4B515D' }}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-8 col-lg-6 col-xl-4">
                    <div className="card" style={{ color: '#4B515D', borderRadius: '35px' }}>
                        <div className="card-body p-4">
                            <div className="d-flex">
                                <h6 className="flex-grow-1">{WeatherData.name}</h6>
                                <h6>{time}</h6>
                            </div>
                            <div className="d-flex flex-column text-center mt-5 mb-4">
                                <h6 className="display-4 mb-0 font-weight-bold" style={{ color: '#1C2331' }}> {WeatherData.main.temp}°C </h6>
                                <span className="small" style={{ color: '#868B94' }}>{WeatherData.weather[0].description}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                                    <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }} /> <span className="ms-1"> {WeatherData.wind.speed} km/h </span></div>
                                    <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }} /> <span className="ms-1"> {WeatherData.main.humidity}% </span></div>
                                </div>
                                <div>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="100px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
{/* <div>
         <h1>Location: {WeatherData.name}</h1>
        <h2>Temperature: {WeatherData.main.temp}</h2>
         <h2>Sunrise: {new Date(WeatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h2>
         <h2>Sunset: {new Date(WeatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</h2>
         <h2>Description: {WeatherData.weather[0].description}</h2>
     </div>  */}



export default Weather;