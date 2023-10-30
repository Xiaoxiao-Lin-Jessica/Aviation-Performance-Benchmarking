import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from "../Homepage/Navbar";
import "../PowerBIStyle.css";
import { AccessTokenContext } from "../../App";
import { useAuth } from "../../AuthContext";

function AirlineOverview() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { airlineAccessToken, routeAccessToken } = useContext(AccessTokenContext);
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

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
        <div>
            <Navbar />
            <PowerBIEmbed
                embedConfig={{
                    type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    //new power bi item id = change here
                    id: "7ffadd76-6203-43b5-98f9-93423364d7aa",
                    //new power bi item URL = change here
                    embedUrl:
                        "https://app.powerbi.com/reportEmbed?reportId=7ffadd76-6203-43b5-98f9-93423364d7aa&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    //new power bi item token = change here
                    accessToken: airlineAccessToken,
                    tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                    settings: {
                        panes: {
                            filters: {
                                expanded: false,
                                visible: true,
                            },
                        },
                        layoutType: models.LayoutType.Custom,
                        customLayout: {
                            displayOption: models.DisplayOption.FitToPage,
                        },
                    },
                }}
                eventHandlers={
                    new Map([
                        [
                            "loaded",
                            function () {
                                window.report.setPage("ReportSection");
                                console.log("Report loaded");
                                window.report.getPages().then(pages => {
                                    console.log(pages); // This will print all the pages in the report
                                });
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
                cssClassName={"powerbi"}
                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        </div>
    );
}

export default AirlineOverview;
