import react from 'react';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from '../Homepage/Navbar';
import "../DashBoard.css";


function RouteOverview() {

    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:8080/ForRouteOverview",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",     //still need or not??
                    },
                }
            );

            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                console.log(localStorage);
                localStorage.setItem("token", responseData.token); 
                console.log(localStorage);
                navigate('/ForRouteOverview');
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
        <Navbar/>
        <PowerBIEmbed
            embedConfig={{
                type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                id: "6b16fb01-7dab-4978-9312-9ba5eaa7d28c", //new power bi item = change here
                embedUrl: "https://app.powerbi.com/reportEmbed?reportId=6b16fb01-7dab-4978-9312-9ba5eaa7d28c&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d", //new power bi item = change here
                accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5NjUxOTk2MSwibmJmIjoxNjk2NTE5OTYxLCJleHAiOjE2OTY1MjQzMDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFEUTJBMDE3bGplb1RYTzJRdDRVVGpRVHpORHhUY2F3aUI2KzdzMTB4Z0lVeHJLcHIzTkRyREVXMXNXTDFlbVV5IiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiNmE4YWU3OTAtYWRlYy00YjViLWI4ODctY2NlN2NhNDUxYTU2IiwiZmFtaWx5X25hbWUiOiJMaW4iLCJnaXZlbl9uYW1lIjoiWGlhb3hpYW8iLCJpcGFkZHIiOiIyNDAzOjU4MDc6NzJjNTowOmZjODQ6NTM0YTpkZWQ5OjdiYTYiLCJuYW1lIjoiWGlhb3hpYW8gTGluIiwib2lkIjoiOTYzZjYxYTAtMWZlNS00ZWRlLWJiMGQtOTRmNDkxNjhhZmQxIiwicHVpZCI6IjEwMDMyMDAyMzU3RDFCNzUiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUJvLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IloySjRGeGgtc3J6ejVwbGFZVWRHV2VaV3NISlFPeGU1WEtjWGk4TWtkNnciLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6InhsaW45Mzk5QHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieGxpbjkzOTlAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJjZGE2X2lwaURFU2ZDWXcxS05GckFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.mmso2UgTzT8N4NiUdXgWA7MkyrPLfhjgC5WSwH89BUybI-qgHf7SkRFBoUCPE6WsLti-831dT1YYAqwBoOhxyg3U6WH-8b73aiOP63RHgWPo6d9cVq5TU_mVAOdUhOG_a6ipHg0E93dUeDcQfkkdFxq5wuR7WjY66Db2yqODWJVVSgTgaArdgRw1ZSRx2JshKXOufDr6yzlA4LrpQkyqqq3h1NR8g97PoJUIhEagwhhtjH_jDuVoqLLMHhojd8Agg0fHrN-iqLFzhFhNaNoGIe2GxObdpA5Lud4R9UuiMytdsIYaw3jV-YRCHxjwPB1ABSOewUxNmIRahWX9xIqUrQ", //new power bi item = change here
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
        </div>

    );
}

export default RouteOverview;
