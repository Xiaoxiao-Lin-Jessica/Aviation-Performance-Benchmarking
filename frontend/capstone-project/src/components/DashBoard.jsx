import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import React from "react";
import "./DashBoard.css";

//This is test of import the PowerBI into React.

function DashBoard() {
    return (
        <PowerBIEmbed
            embedConfig={{
                type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                id: "2dff5d4d-682c-40ca-9467-53e19c44e2f8", //new power bi item = change here
                embedUrl:
                    "https://app.powerbi.com/reportEmbed?reportId=2dff5d4d-682c-40ca-9467-53e19c44e2f8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsInVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d", //new power bi item = change here
                accessToken:
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5NTA5MTMzNSwibmJmIjoxNjk1MDkxMzM1LCJleHAiOjE2OTUwOTU3MjEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFxekhaSDBlN2JIL1ZUVU14dU4zdDZVb05OcGt1c09FN2VyUHB1aTU3YTVvaWZ6K2k4Ym9BN1FXUFpmYmpDVlV1IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTGluIiwiZ2l2ZW5fbmFtZSI6IlhpYW94aWFvIiwiaXBhZGRyIjoiMjQwMzo1ODA3OjcyYzU6MDo0OThiOjQwZDoxYWEyOjcwYzgiLCJuYW1lIjoiWGlhb3hpYW8gTGluIiwib2lkIjoiOTYzZjYxYTAtMWZlNS00ZWRlLWJiMGQtOTRmNDkxNjhhZmQxIiwicHVpZCI6IjEwMDMyMDAyMzU3RDFCNzUiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUJvLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IloySjRGeGgtc3J6ejVwbGFZVWRHV2VaV3NISlFPeGU1WEtjWGk4TWtkNnciLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6InhsaW45Mzk5QHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieGxpbjkzOTlAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJMWUJUYmVhS21VeUg4elFHdXpvcEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Jl4oN1CyZ-fpfKHK1Lr_v7GzgZQJDgjahF7HDkU39cArItwC_Dyq-TvW8N3ZRI_Y1SKGbnojIpTOmUwGhyhLrjEEsi7y6qPt-mFEXv65U-u3QDshwNo1U2kcPxNmCjR5v-zl8j74LVe2ZIAHZDTbHEETDaA4kVWOY9dx5ppgZ-2oCHb_SSrttGyqYmQnFFE76GAWFDoerPHwwoSPNzfLYA5jFAYdDQHttdv8-MOkwkTOVkVjdSxJ7BIRHL1Sc4ZksvjXj6rPMxz-zWWQAG4kVR2wx_0XoSz6jYrQNgTYdSGwUoHJPTWSDPC_wdxY3q8dZQAnfj5BW8WcChch2maB6g", //new power bi item = change here
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

export default DashBoard;
