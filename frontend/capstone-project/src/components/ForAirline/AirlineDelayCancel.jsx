import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from "../Homepage/Navbar";
import "../DashBoard.css";
import { AccessTokenContext } from "../../App";

function AirlineDelayCancel() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const { airlineAccessToken, routeAccessToken } = useContext(AccessTokenContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/ForAirlineDelayCancel",
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
                navigate("/ForAirlineDelayCancel");
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
                        // "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM1NTgyNiwibmJmIjoxNjk4MzU1ODI2LCJleHAiOjE2OTgzNjA2MjksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUF5dUs4MFFGTTdMQXhoUnZUb1NkQ2hVandNYStzY2U0OUFWdm5SQXlZaC9vSEIwb3Bxcmd5SmkvUmVxT3pWMXorIiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiNmE4YWU3OTAtYWRlYy00YjViLWI4ODctY2NlN2NhNDUxYTU2IiwiZmFtaWx5X25hbWUiOiJMaW4iLCJnaXZlbl9uYW1lIjoiWGlhb3hpYW8iLCJpcGFkZHIiOiIyNDAzOjU4MDc6NzJjNTowOmU0NGQ6ODZmNTo1OWJkOjg1MmYiLCJuYW1lIjoiWGlhb3hpYW8gTGluIiwib2lkIjoiOTYzZjYxYTAtMWZlNS00ZWRlLWJiMGQtOTRmNDkxNjhhZmQxIiwicHVpZCI6IjEwMDMyMDAyMzU3RDFCNzUiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUJvLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IloySjRGeGgtc3J6ejVwbGFZVWRHV2VaV3NISlFPeGU1WEtjWGk4TWtkNnciLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6InhsaW45Mzk5QHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieGxpbjkzOTlAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJXMDFIaFZhaTJrMkNnTmFkcU9ob0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.H4U5ei_7ncDMTKT2Ua-6V-Ti0G8GO53mmfl6z4i16EI6FhmwihFgYlkuTwk4-dIfx2ANBzRGT4VEOoRPKTNDTSk0vSFTDr3SXmYuBligbbM3R0Qh0K_NQiFtmC6e30jg4vz49hUXmBdxDTpXuwo8cFetDlgo18JtDgy9kCGpwIWhQGc_1r8Y3tLmEWGtJU3sXUGdMHiSLzeC7XZ_P0IensG02Xi2hO8wgW5oMjNsHZHK3M-8rRY92WNnkUX-WTffM7UV1Bep28RY4qHDngf5IftuSqjKh84vJk_ZM5e2TfclxmKIj1ePXtO_k1OWPWyzIXWt07Sm4EI6myCp9YWQ8g",
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
                                window.report.setPage("ReportSectioncbfa90aad9942930e592");
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
                cssClassName={"EmbedContainer"}
                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        </div>
    );
}

export default AirlineDelayCancel;
