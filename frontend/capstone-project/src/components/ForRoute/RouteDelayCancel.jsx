import react from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from "../Homepage/Navbar";
import "../DashBoard.css";

function RouteDelayCancel() {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/ForRouteDelayCancel",
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
                navigate("/ForRouteDelayCancel");
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
                className="powerbi"
                embedConfig={{
                    type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    //new power bi item id= change here
                    id: "045203b9-eb2f-4eff-9343-e9d01a150724",
                    //new power bi item URL= change here
                    embedUrl:
                        "https://app.powerbi.com/reportEmbed?reportId=045203b9-eb2f-4eff-9343-e9d01a150724&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    //new power bi item token = change here
                    accessToken:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM1Nzg5MCwibmJmIjoxNjk4MzU3ODkwLCJleHAiOjE2OTgzNjIzNDgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFUNFRmWTkwazZBUHhtK3FZNDdxbHZ2cEYrS25MdzZ5dGxuOEdxbnRBRVNMcUVVeGtydm1TV25kY3ZROUY3S2V2IiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiNmE4YWU3OTAtYWRlYy00YjViLWI4ODctY2NlN2NhNDUxYTU2IiwiZmFtaWx5X25hbWUiOiJMaW4iLCJnaXZlbl9uYW1lIjoiWGlhb3hpYW8iLCJpcGFkZHIiOiIyNDAzOjU4MDc6NzJjNTowOmU0NGQ6ODZmNTo1OWJkOjg1MmYiLCJuYW1lIjoiWGlhb3hpYW8gTGluIiwib2lkIjoiOTYzZjYxYTAtMWZlNS00ZWRlLWJiMGQtOTRmNDkxNjhhZmQxIiwicHVpZCI6IjEwMDMyMDAyMzU3RDFCNzUiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUJvLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IloySjRGeGgtc3J6ejVwbGFZVWRHV2VaV3NISlFPeGU1WEtjWGk4TWtkNnciLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6InhsaW45Mzk5QHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieGxpbjkzOTlAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJVZzdzS1JfcTkwMjFRNTdRTEVWR0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.NMAyPvQe5cWa0QnKr8qeP29vLe6rEnaQ_U8VNul6zeECSgJcpekVeUtzP-G-thPNqalHhc2uv-tA7p1wfRgPesoJT9PZU6Ga0ddfPGGUaz-1L-NfcG_eXXuVmZz6F1hpYYyeCrv7O4I06BTr3fh0WiNH6xdKSSMK0v0-seetqGMwHihF9laQEqZEOWeeP0PUOsyAOtFO69mspGDIf23xmoZoRFSnjzD8ZeGZLEeoTCgs6W3_QBYHNw4u-jX3T-5f539hvJ54DMMTS-NHONWu4tFydAHbJyb9Sqz8MhJKZ1AFq0Gq858vYZ4M57MKo1ZVZqgeMFIb2dBi6D3KYMoxbQ",
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
        </div>
    );
}

export default RouteDelayCancel;
