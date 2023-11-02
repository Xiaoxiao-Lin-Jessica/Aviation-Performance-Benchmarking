import React, { useState } from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import { useAuth } from "../../AuthContext";
import AustralianMap from "../Map/AustralianMap";
import {Link} from "react-router-dom";

// Define the Homepage functional component
function Homepage() {
    // Destructure methods from the authentication context
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    // Render the component
    return (
        <div>
            <Navbar
            // isLoggedIn={isLoggedIn}
            // setIsLoggedIn={setIsLoggedIn}
            />
            <div className="main">
                <div className="pic">
                    <img
                        src="/background-homepage.webp"
                        alt="Homepage Background"
                    />
                </div>

                <div className="topLayer"></div>
                <div className="btn">
                    <p>Australian Aviation Data visualization</p>
                    <Link to="/Map">
                        <button>
                            Map &nbsp;&nbsp;&gt;
                        </button>
                    </Link>
                </div>
                {}
                <div class="content">
                    <p className="text-intro">
                        Welcome to our aviation analytics dashboard,
                        designed specifically for the Australian aviation sector.
                        Here, we delve deep into the data to provide you with valuable insights
                        into airport and flight delays, busiest travel routes, and more.
                        Our goal is to empower airport administrators, airline CEOs, and other stakeholders with
                        the information they need to make informed decisions. By leveraging the power of data,
                        we aim to address the current challenges in the industry, optimize operations,
                        and pave the way for a more efficient and safer aviation future in Australia.
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

export default Homepage;
