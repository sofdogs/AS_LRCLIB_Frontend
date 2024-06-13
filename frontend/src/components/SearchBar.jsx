import React, {useState} from "react";
import {FaSearch} from "react-icons/fa"; 
import "./SearchBar.css";
import axios from 'axios';

// setting base URL to local IP
axios.defaults.baseURL = 'http://192.168.86.44:8000';

export const SearchBar = ({ setResults }) => { 
    // setting vars for user input
    const [input, setInput] = useState("");
    //const[results, setResults] = useState([]); 
    const [loading, setLoading] =  useState(false); 
    const [error, setError] = useState(null);

    const handleChange = (value) => { 
        // set input var to given value 
        setInput(value); 
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter') {
          handleSearch();
        }
      };

    const handleSearch = async () => { 
        setLoading(true);
        setError(null);

        try { 
            const response = await axios.get('http://localhost:8000/tracks', {
                params: { 
                    q:input,
                },
            });
            setResults(response.data); 
        } catch (err){ 
            setError('Error getting data'); 
        } finally { 
            setLoading(false);
        }
    };

    return (
        <div className = "input-wrapper">
            <input 
                placeholder = "Search lyrics or songs..." 
                value = {input}  //sets value of input field to inpput state var
                onChange = {(e) => handleChange(e.target.value)} //triggered when val of input field changes, e.target.value is the curr val of the input field
                onKeyDown={handleEnter}
            />
            <button onClick = {handleSearch}><FaSearch id = "search-icon"/></button>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {/* pass the results to the new component */}
        </div>
    )
}; 
