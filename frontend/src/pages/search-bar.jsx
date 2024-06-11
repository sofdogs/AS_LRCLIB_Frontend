import React, {useState} from 'react'

import '../fonts/Tigerlily.otf'
import Logo from '../as-logo.png'


import '../pages/search-bar.css'

import {SearchBar} from "../components/SearchBar"
import {SearchBarResultsList} from "../components/SearchResultsList"
import {LinkNav} from "../components/LinkNav"

const Search = () => {
    const [results, setResults] = useState([]); 

    return (
        <div className = "Search">
            <div className="name-ctn">
                <img src={Logo} alt="logo" />
                <p className="name">Aurally Sound</p>
            </div>
            <div className="search-bar-ctn">
                <SearchBar setResults = {setResults} />
                <SearchBarResultsList results={results} /> 
            </div>
            <div className = "link-nav-ctn"> 
                <LinkNav/>
            </div>
        </div>
    );
};
export default Search;