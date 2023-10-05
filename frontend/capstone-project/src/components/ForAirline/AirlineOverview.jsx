import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from "../Homepage/Navbar";
import "../DashBoard.css";

function AirlineOverview() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/ForAirlineOverview",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json", //still need or not??
                    },
                }
            );

            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                console.log(localStorage);
                localStorage.setItem("token", responseData.token);
                console.log(localStorage);
                navigate("/ForAirlineOverview");
            } else {
                //error handler
                setError(responseData.message || "An error occurred");
            }
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    };

    return (
        <PowerBIEmbed
            embedConfig={{
                type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                id: "xxx", //new power bi item = change here
                embedUrl: "xxx", //new power bi item = change here
                accessToken: "xxx", //new power bi item = change here
                tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                settings: {
                    panes: {
                        filters: {
                            expanded: false,
                            visible: false,
                        },
                    },
                    background: models.BackgroundType.Transparent,
                },
            }}
            eventHandlers={
                new Map([
                    [
                        "loaded",
                        function () {
                            console.log("Report loaded");
                        },
                    ],
                    [
                        "rendered",
                        function () {
                            console.log("Report rendered");
                        },
                    ],
                    [
                        "error",
                        function (event) {
                            console.log(event.detail);
                        },
                    ],
                    ["visualClicked", () => console.log("visual clicked")],
                    ["pageChanged", (event) => console.log(event)],
                ])
            }
            cssClassName={"EmbedContainer"}
            getEmbeddedComponent={(embeddedReport) => {
                window.report = embeddedReport;
            }}
        />
    );
}

export default AirlineOverview;
