import React from "react";
import "./LinkNav.css";


export const LinkNav = () => {
    return(
        <div className = "link-wrapper">
            <div className="nav-elements">
                <ul>
                    <li>
                        {/* api */}
                        <button className="link-btn" >API Documenation</button>
                    </li>
                    <li>
                        {/* github code */}
                        <button className="link-btn">Source Code</button>
                    </li>
                    <li>
                        {/* song master website */}
                        <button className="link-btn">Song Master</button>
                    </li>
                </ul>
            </div>
        </div>
    )

};