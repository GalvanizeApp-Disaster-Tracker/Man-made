import React from 'react';

const Search = (props) => {

    async function setStates(e) {
        const response = await fetch("http://api.airvisual.com/v2/states?country=" + e.target.value + "&key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713")
        const body = await response.json();
        body.map((state) => <option key={state.state} value={state.state}>{state.state}</option>)
    }

    return (
        <form >
            <select id="select-country" onChange={setStates}>
                {props.countries.data.map((country) => <option key={country.country} value={country.country}>{country.country}</option>)}
            </select>
            <select id="select-state">

            </select>
            <select id="select-city">

            </select>
        </form>
    )
}

export default Search;