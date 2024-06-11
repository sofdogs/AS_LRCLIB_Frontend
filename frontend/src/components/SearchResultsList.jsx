import React, {useState} from "react";
import "./SearchResultsList.css";
import {SearchResult} from "./SearchResults.jsx"

export const SearchBarResultsList = ({ results }) => { 

    return (
        <div className="results-list">
            {results.map((track, id) => {
                return <SearchResult result = {track} key = {id}/>
            })}
      </div>
    );
}; 