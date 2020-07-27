import React from 'react';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            states: [],
            cities: [],
            selectedCountry: "--Choose Country--",
            selectedState: "--Choose State--",
        };
        this.changeCountry = this.changeCountry.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        this.setState({
            countries: [

            ]
        });
    }

    changeCountry(event) {
        this.setState({selectedCountry: event.target.value});
        this.setState({states: this.state.countries.find(cntry => cntry.name === event.target.value).states})
    }
}