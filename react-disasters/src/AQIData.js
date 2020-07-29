import React, { useState, useEffect } from 'react'
import logo from './aqi.jpg'

const AQIData = (props) => {
    let [aqius, setAQIUS] = useState();
    let [threatLevel, setThreatLevel] = useState({});

    useEffect(() => {
        if (props.currentLocation.current) {
            function getThreatLevel() {
                fetch("http://localhost:8080/levels/" + props.currentLocation.current.pollution.aqius)
                    .then(response => response.json())
                    .then(result => setThreatLevel(result))
                   .catch(error => console.log('error', error));

            }
            getThreatLevel();
            setAQIUS(props.currentLocation.current.pollution.aqius);
        }
    }, [props.currentLocation])

    useEffect(() => {
        if (threatLevel.color) {
            function changeBackgroundColor(color) {
                document.body.style.backgroundColor = color;
            }
            changeBackgroundColor(threatLevel.color);
        }
    }, [threatLevel.color])

    return (
        <div className="card">
            <img className="card-img-top" src={logo} alt="Air Quality Index Logo" />
            <div className="card-body">
                <h3>{props.currentLocation.city}, {props.currentLocation.state}, {props.currentLocation.country}</h3>
                <br>
                </br>
                <h4>{aqius}</h4>
                <br />
                <h5>{threatLevel.concern}</h5>
                <br />
                <h5>{threatLevel.description}</h5>
            </div>
        </div>
    )
}

export default AQIData