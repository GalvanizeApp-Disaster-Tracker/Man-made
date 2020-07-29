import React, { useCallback } from 'react'
import Search from './Search'
import logo from './aqi.jpg'

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button type="button" class="btn btn-light" onClick={() => props.setCurrentLocation(props.nearestLocation)}>Home</button>
            <Search countries={props.countries} apiKey={props.apiKey}
                setCurrentLocation={props.setCurrentLocation} />
        </nav>
    )
}


export default NavBar