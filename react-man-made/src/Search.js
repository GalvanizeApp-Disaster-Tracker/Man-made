import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCountry: "Afghanistan",
            states: [],
            cities: [],
        }
        this.setStates = this.setStates.bind(this);
        this.setCities = this.setCities.bind(this);
        this.selectCity = this.selectCity.bind(this);
    }

    async setStates(e) {
        let country = e.target.value;
        const response = await fetch("http://api.airvisual.com/v2/states?country=" + country + "&key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713");
        const body = await response.json();
        this.setState({selectedCountry: country, states: body.data});
    }

    async setCities(e) {
        let state = e.target.value
        const response = await fetch("http://api.airvisual.com/v2/cities?state=" + state +
         "&country=" + this.state.selectedCountry + "&key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713");
        const body = await response.json();
        this.setState({selectedState: state, cities: body.data});
    }

    async selectCity(e) {
        let city = e.target.value
        this.setState({selectedCity: city})
    }

    render() {
        return (
            <form >
                <select id="select-country" onChange={this.setStates}>
                    <option disabled selected value>--Choose a country--</option>
                    {this.props.countries.data.map((country) => <option key={country.country} value={country.country}>{country.country}</option>)}
                </select>
                <select id="select-state" onChange={this.setCities}>
                    <option disabled selected value>--Choose a state--</option>
                    {this.state.states.map((state) => <option key={state.state} value={state.state}>{state.state}</option>)}
                </select>
                <select id="select-city" onChange={this.selectCity}>
                    <option disabled selected value>--Choose a city--</option>
                    {this.state.cities.map((city) => <option key={city.city} value={city.city}>{city.city}</option>)}
                </select>
                <button type="submit" onClick={this.props.setLocation}>Submit</button>
            </form>
        )
    }
}

export default Search;