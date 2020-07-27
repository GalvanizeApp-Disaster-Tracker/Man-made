import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    };
    this.setCurrentLocation = this.setCurrentLocation.bind(this);
  }

  async componentDidMount() {
    const response = await fetch("http://api.airvisual.com/v2/nearest_city?key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713");
    const body = await response.json();
    const countries = await fetch("http://api.airvisual.com/v2/countries?key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713");
    const countryBody = await countries.json();
    this.setState({ currentLocation: body.data, countries: countryBody, isLoading: false });
  }

  async setCurrentLocation(country, city, state) {
    const response = await fetch("http://api.airvisual.com/v2/city?city=" + city + "&state=" + state + "&country=" + country + "&key=2dfa7b58-3bfb-4ec7-bddc-6cf7ec9b1713");
    const body = await response.json();
    this.setState({currentLocation: body.data});
  }

render() {


  if (this.state.isLoading) {
    return <p>Loading...</p>
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar countries={this.state.countries} setLocation={this.setCurrentLocation}/>
            HELLO
          </header>
      </div>
    )
  }
}
}

export default App;
