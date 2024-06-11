import React, { useState, useEffect } from 'react';
import axios from 'axios';

// setting base URL to local IP
axios.defaults.baseURL = 'http://192.168.86.44:8000';
//axios.defaults.baseURL = 'http://192.168.1.237:8000';

function App() {
  const [rootData, setRootData] = useState(null);
  const [healthData, setHealthData] = useState(null);
  const [trackData, setTrackData] = useState(null);
  const [trackId, setTrackId] = useState('');
  const [trackQueryData, setTrackQueryData] = useState({
    artist_name: '',
    track_name: '',
    album_name: '',
    duration: ''
  });


  // Fetch root data
  useEffect(() => {
    axios.get('/')
      .then(response => setRootData(response.data))
      .catch(error => console.error(error));
  }, []);

  // Fetch health check data
  const fetchHealthData = () => {
    axios.get('/health')
      .then(response => setHealthData(response.data))
      .catch(error => console.error(error));
  };

  // Fetch track data by ID
  const fetchTrackData = () => {
    axios.get(`/get/${trackId}`)
      .then(response => setTrackData(response.data))
      .catch(error => console.error(error));
  };

  // Fetch track data by query
  const fetchTrackQueryData = () => {
    const { artist_name, track_name, album_name, duration } = trackQueryData;
    axios.get(`/get/${artist_name}/${track_name}/${album_name}/${duration}`)
      .then(response => setTrackData(response.data))
      .catch(error => console.error(error));
  };
    // Fetch track data by query
    const ftsSearch = () => {
      const { q, track_name, artist_name, album_name } = trackQueryData;
      axios.get(`/tracks`)
        .then(response => setTrackData(response.data))
        .catch(error => console.error(error));
    };

  return (
    <div className="App">
      <h1>FastAPI React App</h1>

      <h2>Root Data</h2>
      {rootData ? <pre>{JSON.stringify(rootData, null, 2)}</pre> : <p>Loading...</p>}

      <h2>Health Check</h2>
      <button onClick={fetchHealthData}>Check Health</button>
      {healthData ? <pre>{JSON.stringify(healthData, null, 2)}</pre> : null}

      <h2>Fetch Track Data by ID</h2>
      <input 
        type="text" 
        value={trackId} 
        onChange={(e) => setTrackId(e.target.value)} 
        placeholder="Enter Track ID" 
      />
      <button onClick={fetchTrackData}>Get Track Info</button>
      {trackData ? <pre>{JSON.stringify(trackData, null, 2)}</pre> : null}

      <h2>Fetch Track Data by Query</h2>
      <input 
        type="text" 
        value={trackQueryData.artist_name} 
        onChange={(e) => setTrackQueryData({ ...trackQueryData, artist_name: e.target.value })} 
        placeholder="Enter Artist Name" 
      />
      <input 
        type="text" 
        value={trackQueryData.track_name} 
        onChange={(e) => setTrackQueryData({ ...trackQueryData, track_name: e.target.value })} 
        placeholder="Enter Track Name" 
      />
      <input 
        type="text" 
        value={trackQueryData.album_name} 
        onChange={(e) => setTrackQueryData({ ...trackQueryData, album_name: e.target.value })} 
        placeholder="Enter Album Name" 
      />
      <input 
        type="text" 
        value={trackQueryData.duration} 
        onChange={(e) => setTrackQueryData({ ...trackQueryData, duration: e.target.value })} 
        placeholder="Enter Duration" 
      />
      <button onClick={fetchTrackQueryData}>Get Track Info</button>
      {trackData ? <pre>{JSON.stringify(trackData, null, 2)}</pre> : null}
    </div>
  );
}

export default App;

