import React, {useState} from 'react'
import '../pages/search-bar.css'

import {SearchBar} from "../components/SearchBar"
import {SearchBarResultsList} from "../components/SearchResultsList"

const Search = () => {
    const [results, setResults] = useState([]); 

    return (
        <div className = "Search">
            <div className="search-bar-ctn">
                <SearchBar setResults = {setResults} />
                <SearchBarResultsList results = {results} />
            </div>
        </div>
    );
};
export default Search;