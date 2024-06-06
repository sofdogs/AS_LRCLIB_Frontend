import React from "react";
import './homepage.css';

const Homepage = () => {

    /*
    const handlePlanningButtonClick = () => {
        // Redirect to another page
        window.location.href = "/formpage";
    };
    */

    return (
        <div>
            <div className="homepage">
                <div className="slogan-container">
                    <p className="slogan">Aurally Sound</p>
                    <p className="description">This is an AI writing assistant that helps you create a professional business plan in minutes!</p>
                    <p className="des-under-btn">No credit card required.</p>
                </div>
            </div>
        </div>
    );
};
export default Homepage;