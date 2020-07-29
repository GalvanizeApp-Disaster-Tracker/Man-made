import React, { useState } from 'react'

const AQIData = (props) => {
    let [aqius, setAQIUS] = useState();
    let [threatLevel, setThreatLevel] = useState({});
    let [color, setColor] = useState("");
    let [concern, setConcern] = useState("");
    let [description, setDescription] = useState("");

    async function getThreatLevel() {
        await fetch("http://localhost:8080/levels/" + aqius)
            .then(response => response.json())
            .then(result => setThreatLevel(result.data))
            .catch(error => console.log('error', error));
        setColor(threatLevel.color);
        setConcern(threatLevel.concern);
        setDescription(threatLevel.description);
    }

    setAQIUS(props.currentLocation.current.pollution.aqius)
    getThreatLevel();
    return (
        <div className="card">
            <div className="card-body">
                (background color will be threat level color from db) <br />
                <h1>{props.currentLocation.city}, {props.currentLocation.state}, {props.currentLocation.country}</h1>
                <br>
                </br>
                <h3>{props.aqius}</h3>
                <br />
                {concern}
                <br />
                {description}
            </div>
        </div>
    )
}

export default AQIData