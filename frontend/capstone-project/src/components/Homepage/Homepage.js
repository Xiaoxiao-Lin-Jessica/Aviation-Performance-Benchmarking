import React, { useState } from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import { useAuth } from "../../AuthContext";
import AustralianMap from "../Map/AustralianMap";

function Homepage() {
    const { isLoggedIn, setIsLoggedIn } = useAuth();

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
                    <button>
                        <a href="/Map">Map &nbsp;&nbsp;&gt;</a>
                    </button>
                </div>
                {}
                <div class="content">
                    <p className="text-intro">
                        The EY Data & Analytics team was approached by airport
                        admins and airline CEOs with the goal of building a
                        report covering the current aviation crisis in
                        Australia. You will be required to analyse the data
                        provided and build an end-to-end solution to allow the
                        ingestion of data into a model, which will be fed into a
                        centralised analytics dashboard. This dashboard must
                        provide insight into the current issues related to
                        airport/flight delays, busiest routes, safety, etc and
                        must address a set of business requirements that will be
                        handed to them.
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
