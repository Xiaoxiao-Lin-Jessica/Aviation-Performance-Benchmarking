import react from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Navbar from "../Homepage/Navbar";
import "../PowerBIStyle.css";
import { AccessTokenContext } from "../../App";
import { useContext } from "react";

function AustralianMap() {

    const { mapAccessToken } = useContext(AccessTokenContext);
    return (
        <div>
            <Navbar />
            <PowerBIEmbed
                className="powerbi"
                embedConfig={{
                    type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    //new power bi item id= change here
                    id: "5560b482-6de1-49e1-b24d-9e799027c309",
                    //new power bi item URL= change here
                    embedUrl:
                        "https://app.powerbi.com/reportEmbed?reportId=5560b482-6de1-49e1-b24d-9e799027c309&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    //new power bi item token = change here
                    accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODY4MjQ2OSwibmJmIjoxNjk4NjgyNDY5LCJleHAiOjE2OTg2ODgxNDUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFhbTFPU0lPSG1KSmcySnV2ZjFRSjJCMzI3Q0FQN3daYXFQTVpMQ3g2NEZHdk8zYlRVeEJXcW9mNHhQMEdSVUJQIiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiNmE4YWU3OTAtYWRlYy00YjViLWI4ODctY2NlN2NhNDUxYTU2IiwiZmFtaWx5X25hbWUiOiJMaW4iLCJnaXZlbl9uYW1lIjoiWGlhb3hpYW8iLCJpcGFkZHIiOiIyNDAzOjU4MDc6NzJjNTowOjhkMjc6ZjdlZTo0MWNjOjNkYzUiLCJuYW1lIjoiWGlhb3hpYW8gTGluIiwib2lkIjoiOTYzZjYxYTAtMWZlNS00ZWRlLWJiMGQtOTRmNDkxNjhhZmQxIiwicHVpZCI6IjEwMDMyMDAyMzU3RDFCNzUiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUJvLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IloySjRGeGgtc3J6ejVwbGFZVWRHV2VaV3NISlFPeGU1WEtjWGk4TWtkNnciLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6InhsaW45Mzk5QHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieGxpbjkzOTlAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJTNFpQVk9MRGcwdTFNNXdjYnFVaEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.cZCzN4nLaK-r88LtRybQerPP-f6Xx3ryuUYLfTePVPROLETyvL4zcI3s0P8IAEdQu0f2dfAdeQHFpHvIIf0kUOQwGDRbqePXriLIjczDHXdPn8-_flXN_6Ev9jmPrwuDWjP39I9lte_NwJOhHzx2BsA2XVnUxSNFySwDIRBbMoD2vLs9s9BJlVsNEYJm-RGxD_2rrCnidjb-XYJ7QWWKCNXq0SrT9LSUyoLNH8SGz_4CIucXB4t0h3BkUNIol3IT7yw-T-3Txr4jJKm0cyaBD5DcCKnZrGV-K03Si6adpmqz6GM120D7HsE8JFsWr6iJZK9raIRZ6dzL79pAmoxeiQ"
                    ,
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
                                window.report.getPages().then((pages) => {
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

export default AustralianMap;
