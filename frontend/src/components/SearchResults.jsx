import React, {useState} from "react";
import "./SearchResult.css"

export const SearchResult = ({ result }) => { 
    return (
        <div className = "search-item">
            <div className="track-info">
                <h3 className="track-title">{result.name}</h3>
                <p className="track-artist">{result.artist_name}</p>
                <p className="track-album">{result.album_name}</p>
            </div>
            <div className="track-meta">
              <span className="track-duration">{formatDuration(result.duration)}</span>
              {result.last_lyrics.synced_lyrics && (
                <button className="track-label synced-lyrics">Synced Lyrics</button>
              )}
              {result.last_lyrics.instrumental && (
                <span className="track-label instrumental">Instrumental</span>
              )}
            </div>
        </div>
    );
};

const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };