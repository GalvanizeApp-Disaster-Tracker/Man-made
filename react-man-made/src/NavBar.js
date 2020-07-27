import React from 'react';
import Search from "./Search"

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar nav">
                <div id="nav-options">
                    <li className="nav-item active">
                        <a href="#">GET CURRENT CITY AIR INDEX (HOME)</a>
                        </li>
                    <li className="nav-item">
                        <a href="#">SEARCH SPECIFIC CITY AIR INDEX (SEARCH W/ BAR)</a>
                        <Search countries={props.countries} />
                        </li>
                    <li className="nav-item">
                        <a href="#">LOGO (IMAGE)</a>
                        </li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;