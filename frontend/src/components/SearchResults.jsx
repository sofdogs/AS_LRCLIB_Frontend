import React, {useState} from "react";
import "./SearchResult.css"
import { SyncedLyrics } from "./SyncedLyrics";

export const SearchResult = ({ result }) => { 
  const [isLyricsOpen, setLyricsOpen] = useState(false); 
  const [lyricsType, setLyricsType ] = useState ('');

  const handleLyricsOpen = () => { 
    if (result.last_lyrics.synced_lyrics) {
      setLyricsType('synced');
    } else if (result.last_lyrics.plain_lyrics) {
      setLyricsType('plain');
    }
    setLyricsOpen(true);
  };

  const handleLyricsClose= () => { 
    setLyricsOpen(false);
    setLyricsType('');
  };

    // Determine button style based on lyrics availability
    const buttonStyle = result.last_lyrics.synced_lyrics
    ? "track-label synced-lyrics"
    : result.last_lyrics.plain_lyrics
    ? "track-label plain-lyrics"
    : "track-label no-lyrics";

    return (
        <div className = "search-item">
            <div className="track-info">
                <h3 className="track-title">{result.name}</h3>
                <p className="track-artist">{result.artist_name}</p>
                <p className="track-album">{result.album_name}</p>
            </div>
            <div className="track-meta">
              <span className="track-duration">{formatDuration(result.duration)}</span>
              {(result.last_lyrics.synced_lyrics || result.last_lyrics.plain_lyrics) && (
                <button className={buttonStyle}  onClick={handleLyricsOpen}>
                  Lyrics
                </button>
              )}
              {result.last_lyrics.instrumental && (
                <span className="track-label instrumental">Instrumental</span>
              )}
            </div>
            {(result.last_lyrics.synced_lyrics || result.last_lyrics.plain_lyrics) && (
            <SyncedLyrics
              isOpen={isLyricsOpen}
              onClose={handleLyricsClose}
              syncedLyrics={result.last_lyrics.synced_lyrics}
              plainLyrics={result.last_lyrics.plain_lyrics}

            />
            )}
        </div>
    );
};

const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
