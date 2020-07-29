import React, { useState } from 'react'

const Search = (props) => {
    let [selectedCountry, setSelectedCountry] = useState("");
    let [states, setStates] = useState([]);
    let [selectedState, setSelectedState] = useState("");
    let [cities, setCities] = useState([]);
    let [selectedCity, setSelectedCity] = useState("");

    let setTheStates = async function setTheStates(e) {
        let country = e.target.value;
        setSelectedCountry(country);
        setSelectedState("");
        setCities([]);
        setSelectedCity("");
        await fetch("http://api.airvisual.com/v2/states?country=" + e.target.value + "&key=" + props.apiKey)
            .then(response => response.json())
            .then(result => setStates(result.data))
            .catch(error => console.log('error', error));
    }

    let setTheCities = async function setTheCities(e) {
        let state = e.target.value;
        setSelectedState(state);
        setSelectedCity("");
        await fetch("http://api.airvisual.com/v2/cities?state=" + e.target.value +
            "&country=" + selectedCountry + "&key=" + props.apiKey)
            .then(response => response.json())
            .then(result => setCities(result.data))
            .catch(error => console.log('error', error));
    }

    let setTheCurrentLocation = async function setTheCurrentLocation(city, state, country) {
        
        await fetch("http://api.airvisual.com/v2/city?city=" + city + "&state=" + state + "&country=" +
            country + "&key=" + props.apiKey)
            .then(response => response.json())
            .then(result => props.setCurrentLocation(result.data))
            .catch(error => console.log('error', error));
    }

    return (
        <form className="nav-form">
            <select onChange={e => setTheStates(e)}>
                <option selected value>--Choose a country--</option>
                {props.countries.map((country) => <option key={country.country} value={country.country}>{country.country}</option>)}
            </select>
            <select onChange={e => setTheCities(e)}>
                <option selected value>--Choose a state--</option>
                {states.map((state) => <option key={state.state} value={state.state}>{state.state}</option>)}
            </select>
            <select onChange={e => setSelectedCity(e.target.value)}>
                <option selected value>--Choose a city--</option>
                {cities.map((city) => <option key={city.city} value={city.city}>{city.city}</option>)}
            </select>
            <button type="button" className="btn btn-light" onClick={() => setTheCurrentLocation(selectedCity,
                selectedState, selectedCountry)}>Submit</button>
        </form>
    )
}

export default Search