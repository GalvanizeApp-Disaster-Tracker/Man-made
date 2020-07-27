import React from 'react';

const Search = (props) => {
    // function getLocation(urlData) {
    //     window.scrollTo(0,0)
    //     let data = fetch(urlData)
    //       .then(result => result.json())
    //       .then(data => this.setState({ currentLocation: data })) 
    //   }    
    
    // function search_locations() { 
    //     let input = document.getElementById('searchbar').value
    //     input = input.toLowerCase(); 
    //     let x = props.props.allPokemon; 

    //     for (let i = 0; i < x.length; i++) {  
    //         if (x[i].includes(input)) { 
    //             let url = 'https://pokeapi.co/api/v2/pokemon/' + x[i];
    //             getLocation(url);
    //         } 
    //     } 
    // } 
    function populateCountries(countryArray) {
        let selected = document.getElementById("select-country");
        for (let i = 0; i < countryArray.length; i++) {
            let opt = countryArray[i].country;
            let el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            selected.appendChild(el);
        }
    }
    populateCountries(props.countries);

    return (
        <form >
            {/* <input type='text' id ='searchbar' placeholder="Search..."></input> */}
            {/* <input type='submit' ></input> */}
            {/* <button type='button' onClick={search_pokemon()}> Search </button> */}
            <select id="select-country">

            </select>
            <select id="select-state">

            </select>
            <select id="select-city">

            </select>
        </form>
    )
}

export default Search;