import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './NavBar'
import AQIData from './AQIData'
import Headlines from './Headlines'



function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [currentLocation, setCurrentLocation] = useState({});
  let [nearestLocation, setNearestLocation] = useState({});
  let [countries, setCountries] = useState([]);
  let [apiKey, setKey] = useState("66f2cb04-569e-48b4-8505-4dd21c814ac9")

  useEffect(() => {
    async function fetchCountries() {
      await fetch("https://api.airvisual.com/v2/countries?key=" + apiKey)
        .then(response => response.json())
        .then(result => setCountries(result.data))
        .catch(error => console.log('error', error));
    }
    fetchCountries();
    setIsLoading(false);
  }, [])

  useEffect(() => {
    async function fetchNearest() {
      await fetch("https://api.airvisual.com/v2/nearest_city?key=" + apiKey)
        .then(response => response.json())
        .then(result => setNearestLocation(result.data))
        .catch(error => console.log('error', error));
    }
    fetchNearest();
  }, [])

  useEffect(() => {
    async function fetchNearest() {
      await fetch("https://api.airvisual.com/v2/nearest_city?key=" + apiKey)
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
          <h1>Our Man-Made Disasters</h1>
          <h3>Oil spills. Industrial fires. Deforestation. Pollution.</h3>
          <h4>Learn where your city stands, and read more about current man-made disasters. You can make a difference.</h4>
          <NavBar countries={countries} apiKey={apiKey} setCurrentLocation={setCurrentLocation} nearestLocation={nearestLocation} />
        </header>
          <AQIData currentLocation={currentLocation} />
          <Headlines />
      </div>
    );
  }
}

export default App;
