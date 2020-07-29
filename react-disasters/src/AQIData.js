import React, { useState, useEffect } from 'react'

const AQIData = (props) => {
    let [aqius, setAQIUS] = useState();
    let [threatLevel, setThreatLevel] = useState({});

    useEffect(() => {
        if (props.currentLocation.current) {
            function getThreatLevel() {
                fetch("http://localhost:8080/levels/" + props.currentLocation.current.pollution.aqius)
                    .then(response => response.json())
                    .then(result => {
                        console.log(result)
                        setThreatLevel(result)
                    })

                    .catch(error => console.log('error', error));

            }
            getThreatLevel();
            setAQIUS(props.currentLocation.current.pollution.aqius);
        }
    }, [props.currentLocation])

    return (
        <div className="card">
            <div className="card-body">
                (background color will be threat level color from db) <br />
                <h1>{props.currentLocation.city}, {props.currentLocation.state}, {props.currentLocation.country}</h1>
                <br>
                </br>
                <h3>{aqius}</h3>
                <br />
                {threatLevel.concern}
                <br />
                {threatLevel.description}
            </div>
        </div>
    )
}

export default AQIData