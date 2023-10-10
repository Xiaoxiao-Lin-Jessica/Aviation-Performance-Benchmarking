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
            <section className="section">
                <div className="box-main">
                    <div className="firstHalf">
                        <h1 className="text-big">
                            Related picture about Australian aviation
                        </h1>
                        <p className="text-small">
                            some description about it
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="box-main">
                    <div className="secondHalf">
                        <h1 className="text-big" id="program">
                            Some text description
                        </h1>
                        <p className="text-small">
                            JavaScript is the world's most popular language
                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p className="text-footer">
                    Copyright © - All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default App;
