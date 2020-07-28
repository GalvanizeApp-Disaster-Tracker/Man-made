import React from 'react';
import logo from "./aqi.jpg"
import Search from "./Search"

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar nav">
                <div id="nav-options">
                    <li className="nav-item active">
                        <button type="button" onClick={props.setNearestLocation}>HOME</button>
                        </li>
                    <li className="nav-item">
                        <p>SEARCH</p>
                        <Search countries={props.countries} setLocation={props.setLocation}/>
                        </li>
                    <li className="nav-item">
                        <img src={logo} alt="AQI logo"></img>
                        </li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;