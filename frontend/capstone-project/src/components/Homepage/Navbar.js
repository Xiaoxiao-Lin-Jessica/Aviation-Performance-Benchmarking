//navigation bar
import React from "react";
import "./Navbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

function Navbar() {
    return (
        <nav className="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <button className="APBButton">
                        <img src="/flight-icon.png" alt="Flight Icon" />
                        <span className="logo-text">
                            <a href="/">APB</a>
                        </span>
                    </button>
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
                <button className="icon-button">
                    <a href="/login">
                        {" "}
                        <LoginIcon />{" "}
                    </a>
                </button>
                <br />
                <button className="icon-button">
                    <a href="/">
                        {" "}
                        <LogoutIcon />{" "}
                    </a>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
