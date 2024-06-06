import React, {useState} from "react";
import {FaSearch} from "react-icons/fa"; 
import "./SearchBar.css";
import axios from 'axios';

// setting base URL to local IP
axios.defaults.baseURL = 'http://192.168.86.157:8000';

export const SearchBar = ({setResults}) => { 
    // setting vars for user input
    const [input, setInput] = useState("");

    //query params init
    const [trackId, setTrackId] = useState(null);

    // funct to  fetch data from API
    // value is the text to search for
    const fetchData = (value) => { 
        // api call to async function
        fetch()
        .then((response) => response.json()) // awaits result and convert to JSON format 
        .then((json) => { //get back JSON value
            console.log(json);
        });
    };

    // Fetch track data by ID
    // call fetchTrackData whenever text changes in search bar
    // will need to change to only a search query 
    // `data` is the response that was provided by the server
    const fetchTrackData = (trackId) => {
        /*
        const queryParams = { 
            id: 1, 
            sort: "desc", 
        }; 
        const params = new url.URLSearchParams(queryParams);
        console.log (params);
        axios
            .get(`/get/${params}`)
            .then(function (response) {
                console.log(response.data);
            });
        */
       
        /* to filter later ... (doesnt work with data.filter)
            const results = data.filter((track) => { 
                return track && track.id && track.id.toLowerCase().includes(trackId)
            });
            console.log(results);
        */

        axios.get(`/get/${trackId}`)
        .then(response => response.data)
        .then((results) => { 
            //console.log(data)

            // set result var
            setResults(results);
        })
        .catch(error => console.error(error));
    };

    const handleChange = (value) => { 
        // set input var to given value 
        setInput(value); 

        // update trackId state var and fetch data 
        fetchTrackData(value) ; //makes request to API
    }

    return (
        <div className = "input-wrapper">
            <FaSearch id = "search-icon"/>
            <input 
                placeholder = "Search lyrics or songs..." 
                value = {input}  //sets value of input field to inpput state var
                onChange = {(e) => handleChange(e.target.value)} //triggered when val of input field changes, e.target.value is the curr val of the input field
            />
        </div>
    )
}; 
