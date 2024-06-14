import React, {useState} from "react";
import "./SyncedLyrics.css";

export const SyncedLyrics = ({ isOpen, onClose, syncedLyrics, plainLyrics}) => { 
    const [activeTab, setActiveTab] = useState ('synced');

    if(!isOpen) return null;

    return (
        <div className = "lyrics-wrapper">
            <div className = "lyrics-content">
                <div className="lyrics-header">
                    <button
                        className={`modal-tab ${activeTab === 'synced' ? 'active' : ''}`}
                        onClick={() => setActiveTab('synced')}
                    >
                        Synced Lyrics
                    </button>
                    <button
                        className={`modal-tab ${activeTab === 'plain' ? 'active' : ''}`}
                        onClick={() => setActiveTab('plain')}
                    >
                        Plain Lyrics
                    </button>
                </div>
                <div className="lyrics-body">
                {activeTab === 'synced' && syncedLyrics && (
                    <div className="lyrics-container">
                    <pre className="lyrics">{syncedLyrics}</pre>
                    </div>
                )}
                {activeTab === 'plain' && plainLyrics && (
                    <div className="lyrics-container">
                    <pre className="lyrics">{plainLyrics}</pre>
                    </div>
                )}
                </div>
                <button className="lyrics-close" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};