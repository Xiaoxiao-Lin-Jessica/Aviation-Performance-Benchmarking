// Importing required dependencies and components.
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

function RouteBusynessSeat() {
    // Using react-router's navigate function for programmatic navigation.
    const navigate = useNavigate();

    // State for handling errors.
    const [error, setError] = useState(null);

    // Accessing the context for authentication and access tokens.
    const { routeAccessToken } = useContext(AccessTokenContext);
    const { isLoggedIn } = useAuth();

    // useEffect hook to redirect to login page if the user is not authenticated.
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);

    // Return statement to return the for route's busyness level and seat utilisation Power BI report.
    return (
        <div>
            <Navbar />
            <PowerBIEmbed
                className="powerbi"
                embedConfig={{
                    // Define the type of Power BI item, supported types: report, dashboard, tile, visual, qna, paginated report and create.
                    type: "report",

                    //Unique Power BI report ID, if input a new Power BI item, modify the corresponding ID as well.
                    id: "045203b9-eb2f-4eff-9343-e9d01a150724",

                    //Power BI embed URL for the report, if input a new Power BI item, modify the corresponding URL as well.
                    embedUrl:
                        "https://app.powerbi.com/reportEmbed?reportId=045203b9-eb2f-4eff-9343-e9d01a150724&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",

                    //Access token for authentication, if need, edit or refresh the content of token on the App.js file.
                    accessToken: routeAccessToken,

                    // Use models.TokenType.Aad for SaaS embed.
                    tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed

                    //Layout and display settings for the embedded report.
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
                //Define event handlers for report events like load succeeded, load failed or rendered.
                eventHandlers={
                    new Map([
                        [
                            "loaded",
                            function () {
                                window.report.setPage(
                                    "ReportSectionf7092d6bc776543b4817"
                                );
                                console.log("Report loaded");
                                window.report.getPages().then((pages) => {
                                    console.log(pages); // This will print all the pages in the report.
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
                //Giving the Power BI report a CSS style.
                cssClassName={"powerbi"}
                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport; // Store the embedded report for future reference.
                }}
            />
        </div>
    );
}

export default RouteBusynessSeat;
