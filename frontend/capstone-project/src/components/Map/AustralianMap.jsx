// Importing required dependencies and components.
import react from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from "../Homepage/Navbar";
import "../PowerBIStyle.css";
import { AccessTokenContext } from "../../App";
import { useContext } from "react";

function AustralianMap() {
    // Accessing the tokens.
    const { mapAccessToken } = useContext(AccessTokenContext);
    
    // Return statement to return the Australian map Power BI report.
    return (
        <div>
            <Navbar />
            <PowerBIEmbed
                className="powerbi"
                embedConfig={{
                    // Define the type of Power BI item, supported types: report, dashboard, tile, visual, qna, paginated report and create.
                    type: "report", 
                    
                    //Unique Power BI report ID, if input a new Power BI item, modify the corresponding ID as well.
                    id: "5560b482-6de1-49e1-b24d-9e799027c309",
                    
                    //Power BI embed URL for the report, if input a new Power BI item, modify the corresponding URL as well.
                    embedUrl:
                        "https://app.powerbi.com/reportEmbed?reportId=5560b482-6de1-49e1-b24d-9e799027c309&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    
                    //Access token for authentication, if need, edit or refresh the content of token on the App.js file.
                    accessToken: mapAccessToken,
                    
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
                                window.report.setPage("ReportSection");
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
                    window.report = embeddedReport;     // Store the embedded report for future reference.
                }}
            />
        </div>
    );
}

export default AustralianMap;
