import React, { useEffect, useState } from 'react';
import Weather from './components/weather.js';
import Stats from './components/stats.js';
import './styles/weather.css'


function App() {
  const [long_lat, setLongLat] = useState([0, 0]);
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  const fetchLocation = async (city) => {
    await fetch(`${process.env.REACT_APP_LOCATION_API_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setCity(result[0].name);
        setLongLat([result[0].lon, result[0].lat])
      })
  }
  const fetchDataNow = async () => {
    console.log(long_lat)
    await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather/?lat=${long_lat[0]}&lon=${long_lat[1]}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
  };
  useEffect(() => {
    fetchDataNow();

  }, long_lat);

  navigator.geolocation.getCurrentPosition(function (position) {
    setLongLat([position.coords.latitude, position.coords.longitude]);
  });

  return (
    <>
      <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="row card0">
            {(typeof data.main !== 'undefined') ? (<Weather WeatherData={data} city={city} />) : (<div>Loading...</div>)}
            <div className="card2 col-lg-4 col-md-5">
              <div className="row px-3"> <input type="text" name="location" placeholder="Another location" className="mb-5" />
                <div className="fa fa-search mb-5 mr-0 text-center" onClick={() => fetchLocation("Texas")} />
              </div>
              {(typeof data.main !== 'undefined') ? (<Stats data={data} />) : (<div>Loading...</div>)}
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
