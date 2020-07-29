import React, { useState, useEffect } from 'react'
import Article from './Article'

function Headlines() {
    let [disasters, setDisasters] = useState([]);

    useEffect(() => {
            function getDisasters() {
                fetch("/disasters")
                    .then(response => response.json())
                    .then(result => setDisasters(result))
                   .catch(error => console.log('error', error));

            }
            getDisasters();
    }, [])

    return (
        <div id="article-space">
            <h3>Read the following articles to learn what's going on in the world, and how you can help.</h3>
            {disasters.map(disaster => <Article data={disaster} />)}
        </div>
    )
}

export default Headlines