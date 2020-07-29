import React, { useCallback } from 'react'
import Search from './Search'
import logo from './aqi.jpg'

const NavBar = (props) => {
    return (
        <nav>

            <button>Home</button>
            <Search countries={props.countries} apiKey={props.apiKey} 
                setCurrentLocation={props.setCurrentLocation} />
            <img src={logo} alt="logo"></img>

        </nav>
    )
}


export default NavBar