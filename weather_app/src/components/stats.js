import React from 'react';

const Stats = ({ data }) => (
    <div className="mr-5">
        <p className="light-text suggestion">Melbourne</p>
        <p className="light-text suggestion">Sydney</p>
        <p className="light-text suggestion">Canberra</p>
        <p className="light-text suggestion">Queensland</p>
        <div className="line my-5" />
        <p>Weather Details</p>
        <div className="row px-3">
            <p className="light-text">Humidity</p>
            <p className="ml-auto">{data.main.humidity}%</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Wind</p>
            <p className="ml-auto">{data.wind.speed} km/h</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Sunrise</p>
            <p className="ml-auto">{new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-us')}</p>
        </div>
        <div className="row px-3">
            <p className="light-text">Sunset</p>
            <p className="ml-auto">{new Date(data.sys.sunset * 1000).toLocaleTimeString('en-us')}</p>
        </div>
        <div className="line mt-3" />
    </div>)

export default Stats;