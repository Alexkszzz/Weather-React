import React, { useEffect, useState } from 'react';
import Weather from './components/weather.js';

function App() {
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
      })
    };
    fetchData();
    console.log(data)

  }, [long, lat]);

  return (
    <div className="App">
      {(typeof data.main !== 'undefined') ? (<Weather WeatherData={data} />) : (<div>Loading...</div>)}
    </div>
  );
}

export default App;
