//navigation bar
import React from "react";
import "./Navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";


function Navbar() {

    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const handleRestrictedClick = (e) => {
        if (!isLoggedIn) {
            e.preventDefault(); // Stop the default pop out window
            alert("Please Log in");
        }
    };
    return (
        <nav className="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <Link to="/">
                        <button className="APBButton">
                            <img src="/flight-icon.png" alt="Flight Icon" />
                            <span className="logo-text">APB</span>
                        </button>
                    </Link>
                </div>

                <div className="dropdown">
                    <li>
                        <button className="dropbtn" onClick={handleRestrictedClick}>For Route</button>
                        <div className="dropdown-content">
                            <a href="/ForRouteOverview" onClick={handleRestrictedClick}>Overview</a>
                            <a href="/ForRouteDelayCancel" onClick={handleRestrictedClick}>
                                Delay & Cancel Rate
                            </a>
                            <a href="/ForRouteBusynessSeat" onClick={handleRestrictedClick}>
                                Busyness Level & Seat Utilization
                            </a>
                        </div>
                    </li>
                </div>

                <div className="dropdown">
                    <li>
                        <button className="dropbtn" onClick={handleRestrictedClick}>For Airlines</button>
                        <div className="dropdown-content">
                            <a href="/ForAirlineOverview" onClick={handleRestrictedClick}>Overview</a>
                            <a href="/ForAirlineDelayCancel" onClick={handleRestrictedClick}>
                                Delay & Cancel Rate
                            </a>
                        </div>
                    </li>
                </div>
            </ul>
            <div className="rightNav">
                {isLoggedIn ? (
                    <button className="icon-button" onClick={() => {
                        setIsLoggedIn(false);
                    }}>
                        <a href="/"><LogoutIcon /></a>
                    </button>
                ) : (
                    <button className="icon-button">
                        <a href="/login"><LoginIcon /></a>
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
