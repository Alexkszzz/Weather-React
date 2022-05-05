import React, { useEffect, useState } from 'react';
import Weather from './components/weather.js';
import Stats from './components/stats.js';
import './styles/App.css'


function App(props) {
  const [long_lat, setLongLat] = useState([0, 0]);
  const [city, setCity] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  var suggestions = props.suggestions

  function handleChange(e) {
    setSearch(e.target.value);
  }

  const fetchLocation = async (search) => {
    await fetch(`${process.env.REACT_APP_LOCATION_API_URL}?q=${search}&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setCity(result[0].name);
        setLongLat([result[0].lon, result[0].lat])
      })
    if (!suggestions.includes(search)) {
      suggestions.pop()
      suggestions.unshift(search)
    }
  }

  const fetchDataNow = async () => {
    console.log(long_lat)
    await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather/?lat=${long_lat[1]}&lon=${long_lat[0]}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result)
      })
  };

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      fetchLocation(search);
    }
  }

  useEffect(() => {
    fetchDataNow();
  }, long_lat);

  return (
    <>
      <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
        <div className="row d-flex justify-content-center">
          <div className="row card0">
            {(typeof data.main !== 'undefined') ? (<Weather WeatherData={data} city={city} />) : (<div>Loading...</div>)}
            <div className="card2 col-lg-4 col-md-5">
              <div className="row px-3"> <input type="text" name="location" placeholder="Another location" className="mb-5" onChange={handleChange} onKeyDown={handleKeyPress} />
                <div className="fa fa-search mb-5 mr-0 text-center" onClick={() => fetchLocation(search)} />
              </div>
              <div className="mr-5">
                {suggestions.map(suggestions => { return <p className="light-text suggestion" onClick={() => { fetchLocation(suggestions) }}>{suggestions}</p> })}
                {(typeof data.main !== 'undefined') ? (<Stats data={data} />) : (<div>Loading...</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
