import React, { useState, useEffect } from 'react'
import Article from './Article'

function Headlines() {
    let [disasters, setDisasters] = useState([]);

    useEffect(() => {
            function getDisasters() {
                fetch("http://localhost:8080/disasters")
                    .then(response => response.json())
                    .then(result => setDisasters(result))
                   .catch(error => console.log('error', error));

            }
            getDisasters();
    }, [])

    return (
        <div id="article-space">
            {/* <select id="disaster-type-sel">
                <option selected value>--Choose a Type--</option>
                <option value="Oil Spill">Oil Spill</option>
                <option value="Radiation Leak">Radiation Leak</option>
                <option value="Invasive Species">Invasive Species</option>
            </select> */}
            {disasters.map(disaster => <Article data={disaster} />)}
        </div>
    )
}

export default Headlines