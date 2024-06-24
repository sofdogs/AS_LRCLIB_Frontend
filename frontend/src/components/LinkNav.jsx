import React from "react";
import "./LinkNav.css";


export const LinkNav = () => {
    return(
        <div className = "link-wrapper">
            <div className="nav-elements">
                <ul>
                    <li>
                        {/* github code */}
                        <a href="https://github.com/sofdogs/Aurally_Sound_LRCLIB" target="_blank" rel="noopener noreferrer" className="link-btn">
                            Source Code 
                        </a>
                    </li>
                    <li>
                        {/* song master website */}
                        <a href="https://aurallysound.com/" target="_blank" rel="noopener noreferrer" className="link-btn">
                            Song Master
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )

};