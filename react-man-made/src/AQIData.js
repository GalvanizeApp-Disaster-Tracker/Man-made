import React from 'react';

class AQIData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.getThreatLevel = this.getThreatLevel.bind(this);
    }

    async getThreatLevel() {
        await fetch("http://localhost:8080/levels/" + this.props.aqius.toString())
            .then((response) => response.json())
            .then((json) => { this.setState({ threatLevel: json }) })

        await this.setState({color: this.state.threatLevel.color, concern: this.state.threatLevel.concern, description: this.state.threatLevel.description})
    }



    render() {
        this.getThreatLevel();

        return (
            <div className="card">
                <div className="card-body">
                    (background color will be threat level color from db) <br />
                    <h1>{this.props.currentLocation.city}, {this.props.currentLocation.state}, {this.props.currentLocation.country}</h1>
                    <br>
                    </br>
                    <h3>{this.props.aqius}</h3>
                    <br />
                    {this.state.concern}
                    <br />
                    {this.state.description}
                </div>
            </div>
        )
    }
}

export default AQIData;