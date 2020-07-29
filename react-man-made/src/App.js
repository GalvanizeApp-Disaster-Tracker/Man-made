import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import AQIData from './AQIData'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    };
    this.setCurrentLocation = this.setCurrentLocation.bind(this);
    this.setNearestLocation = this.setNearestLocation.bind(this);
    // this.setClosestLocation = this.setClosestLocation.bind(this);
  }

  async componentDidMount() {
    await this.setNearestLocation();
    // await this.setClosestLocation();
    // this.setState({isLoading: false})
    //https://pokeapi.co/api/v2/pokemon/ditto
    //const countries = await fetch("http://api.airvisual.com/v2/countries?key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713");
    const countryBody = await countries.json();
    await this.setState({ countries: countryBody, isLoading: false });
  }

  async setCurrentLocation(city, state, country) {
    const response = await fetch("http://api.airvisual.com/v2/city?city=" + city + "&state=" + state + "&country=" +
      country + "&key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713", {
      method: 'GET',
      mode: 'no-cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const body = await response.json();
    await this.setState({ currentLocation: body.data });
  }


  // async setClosestLocation(url = '', data = {}) {
  //   const response = await fetch(url, {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     cache: 'default',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   });
  //   this.setState({currentLocation: response.json()})
  // }

  async setNearestLocation() {
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713");
    const body = await response.json();
    await this.setState({ currentLocation: response.json() });
  }

  render() {

    // if (this.state.isLoading) {
    //   return <p>Loading...</p>
    // }
    // else {
      return (
        <div className="App">
          <header className="App-header">
            <NavBar countries={this.state.countries} setLocation={this.setCurrentLocation} setNearestLocation={this.setNearestLocation} />
          </header>
          <AQIData currentLocation={this.state.currentLocation} aqius={this.state.currentLocation.current.pollution.aqius} />
        </div>
      )
    // }
  }
}

export default App;
