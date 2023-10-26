import React, { useState } from 'react';
import './Homepage.css';
import Navbar from './Navbar';


function App() {
    const [isHelpClicked, setIsHelpClicked] = useState(false);
    const [isLogoutClicked, setIsLogoutClicked] = useState(false);

    const handleHelpClick = () => {
        // Handles the logic for clicking help icons
        setIsHelpClicked(true);
        // Here you can add processing logic, such as displaying help information or performing other actions
    };

    const handleLogoutClick = () => {
        // Handles the logic for clicking the logout icon
        setIsLogoutClicked(true);
        // Here you can add processing logics, such as performing a logout operation
    };

    return (
        <div>
            <Navbar
                handleHelpClick={handleHelpClick}
                handleLogoutClick={handleLogoutClick}
            />

            <div className="main">
                <div className="pic">
                    <img src="/background-homepage.webp" alt="Homepage Background" />
                </div>
                {/* 遮罩层 */}
                <div className="topLayer"></div>
                <div className="btn">
                    <p>Australian Aviation Data visualization</p>
                    <button>Map &nbsp;&nbsp;&gt;</button>
                </div>
                {/*Text introduction*/}
                <div class="content">
                    <p className="text-intro">
                        The EY Data & Analytics team was approached by airport admins and airline CEOs with the goal of building a report covering the current aviation crisis in Australia.
                        You will be required to analyse the data provided and build an end-to-end solution to allow the ingestion of data into a model, which will be fed into a centralised analytics dashboard.
                        This dashboard must provide insight into the current issues related to airport/flight delays, busiest routes, safety, etc and must address a set of business requirements that will be handed to them.
                    </p>
                </div>
            </div>




            <footer className="footer">
                <p className="text-footer">
                    Copyright © - All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default App;

