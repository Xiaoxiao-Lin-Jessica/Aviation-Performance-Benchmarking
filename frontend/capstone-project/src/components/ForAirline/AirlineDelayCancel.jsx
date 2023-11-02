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

function AirlineDelayCancel() {
    // Using react-router's navigate function for programmatic navigation.
    const navigate = useNavigate();

    // State for handling errors.
    const [error, setError] = useState(null);

    // Accessing the context for authentication and access tokens.
    const { airlineAccessToken } =
        useContext(AccessTokenContext);
    const { isLoggedIn } = useAuth();

    // useEffect hook to redirect to login page if the user is not authenticated.
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login");
        }
    }, [isLoggedIn, navigate]);


    // Return statement to return the for airline's delay and cancel rate Power BI report.
    return (
        <div>
            <Navbar />
            <PowerBIEmbed
                embedConfig={{
                    // Define the type of Power BI item, supported types: report, dashboard, tile, visual, qna, paginated report and create.
                    type: "report",

                    //Unique Power BI report ID, if input a new Power BI item, modify the corresponding ID as well.
                    id: "7ffadd76-6203-43b5-98f9-93423364d7aa",

                    //Power BI embed URL for the report, if input a new Power BI item, modify the corresponding URL as well.
                    embedUrl:
                        "https://app.powerbi.com/reportEmbed?reportId=7ffadd76-6203-43b5-98f9-93423364d7aa&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",

                    //Access token for authentication, if need, edit or refresh the content of token on the App.js file.
                    accessToken: airlineAccessToken,

                    // Use models.TokenType.Aad for SaaS embed.
                    tokenType: models.TokenType.Aad,

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
                                    "ReportSectioncbfa90aad9942930e592"
                                );
                                console.log("Report loaded");
                                window.report.getPages().then((pages) => {
                                    console.log(pages);     // This will print all the pages in the report.
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
                    window.report = embeddedReport;     // Store the embedded report for future reference.
                }}
            />
        </div>
    );
}

export default AirlineDelayCancel;
