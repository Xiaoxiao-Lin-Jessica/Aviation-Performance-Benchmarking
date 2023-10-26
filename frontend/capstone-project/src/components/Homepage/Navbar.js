//navigation bar
import React from "react";
import "./Navbar.css";

function Navbar({ onHelpClick, onLogoutClick }) {
    return (
        <nav className="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <img src="/flight-icon.png" alt="Flight Icon" />
                    <span
                        className="logo-text"
                        href="frontend/capstone-project/src/components/Homepage/Homepage#"
                    >
                        APB
                    </span>
                </div>
                <div className="dropdown">
                    <li>
                        <button className="dropbtn">For Route</button>
                        <div className="dropdown-content">
                            <a href="/ForRouteOverview">Overview</a>
                            <a href="/ForRouteDelayCancel">
                                Delay & Cancel Rate
                            </a>
                            <a href="/ForRouteBusynessSeat">
                                Busyness Level & Seat Utilization
                            </a>
                        </div>
                    </li>
                </div>

                <div className="dropdown">
                    <li>
                        <button className="dropbtn">For Airlines</button>
                        <div className="dropdown-content">
                            <a href="/ForAirlineOverview">Overview</a>
                            <a href="/ForAirlineDelayCancel">
                                Delay & Cancel Rate
                            </a>
                        </div>
                    </li>
                </div>
            </ul>

            <div className="rightNav">
                <button className="icon-button" onClick={onHelpClick}>
                    <img src="/help-icon.png" alt="Help Icon" />
                </button>
                <button className="icon-button" onClick={onLogoutClick}>
                    <img src="/logout-icon.png" alt="Logout Icon" />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
