import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import AQIData from './AQIData'



function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [currentLocation, setCurrentLocation] = useState({});
  let [aqius, setAQIUS] = useState();
  let [nearestLocation, setNearestLocation] = useState({});
  let [countries, setCountries] = useState([]);
  let [apiKey, setKey] = useState("1042c00e-348c-46e0-b350-c9960d3c3ffa")

  useEffect(() => {
    async function fetchCountries() {
      await fetch("http://api.airvisual.com/v2/countries?key=" + apiKey)
        .then(response => response.json())
        .then(result => setCountries(result.data))
        .catch(error => console.log('error', error));
    }
    fetchCountries();
    setIsLoading(false);
  }, [])

  useEffect(() => {
    async function fetchNearest() {
      // setAQIUS(nearestLocation.current.pollution.aqius);
      await fetch("http://api.airvisual.com/v2/nearest_city?key=" + apiKey)
        .then(response => response.json())
        .then(result => setNearestLocation(result.data))
        .catch(error => console.log('error', error));
    }
    fetchNearest();
  }, [])

  useEffect(() => {
    async function fetchNearest() {
      await fetch("http://api.airvisual.com/v2/nearest_city?key=" + apiKey)
        .then(response => response.json())
        .then(result => setCurrentLocation(result.data))
        .catch(error => console.log('error', error));
    }
    fetchNearest();
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar countries={countries} apiKey={apiKey} setCurrentLocation={setCurrentLocation} />
        </header>
        <AQIData currentLocation={currentLocation} aqius={aqius} />
      </div>
    );
  }
}

export default App;
