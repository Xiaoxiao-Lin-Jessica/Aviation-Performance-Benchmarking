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
                    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5NDY4NzYwMCwibmJmIjoxNjk0Njg3NjAwLCJleHAiOjE2OTQ2OTIyMDEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFRdHFOZTM4NWVQVUlXM2tkTXZTWTJuNHFrK3ZPOXVsL1pja3kvR2NKT0pQTENKZVdCQk84WGN6aHYyVjZ5bGhSIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiTGluIiwiZ2l2ZW5fbmFtZSI6IlhpYW94aWFvIiwiaXBhZGRyIjoiMjQwMzo1ODA3OjcyYzU6MDphMGQzOjQ5NjM6ZTc4Mjo5ZWQ2IiwibmFtZSI6IlhpYW94aWFvIExpbiIsIm9pZCI6Ijk2M2Y2MWEwLTFmZTUtNGVkZS1iYjBkLTk0ZjQ5MTY4YWZkMSIsInB1aWQiOiIxMDAzMjAwMjM1N0QxQjc1IiwicmgiOiIwLkFRb0FwenZwZTRKRTBFbWxFbnhvR0FsdU13a0FBQUFBQUFBQXdBQUFBQUFBQUFBS0FCby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJaMko0RnhoLXNyeno1cGxhWVVkR1dlWldzSEpRT3hlNVhLY1hpOE1rZDZ3IiwidGlkIjoiN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzIiwidW5pcXVlX25hbWUiOiJ4bGluOTM5OUB1bmkuc3lkbmV5LmVkdS5hdSIsInVwbiI6InhsaW45Mzk5QHVuaS5zeWRuZXkuZWR1LmF1IiwidXRpIjoiWHdNN2IxOGpYMFM1YmNDUHBwd3ZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.qmziuS6mO87Q1s8Xph_w5FpORUaJt1KiMsQus2UK4XcTtK9WEyo0bbx3gglBtJpfSsEXND29zParGIY8i1E1Sa9PvbJjd95g-UjjheQCTHJs6CikSUSSmM5iM-l7AU8K0LcsIhB6CtCEtAHSjFVZOKUetGdh_qbA9x-xlrJYaQGHeL05LizVFzjeOpANX8jync18Q97V9SwVgxCbLB0ttdbs-8hxtagLAqcic7T0Mh1Xse5r3-KbWSX8XONe8eevusyKaGfPlYNh8j5Bkjs7ml2axSz32C5CAdPBPyvuOBizLZxEFWE44hU6_z4PThx6S8fRLFJCgDGv2Jc9P5hcnQ", //new power bi item = change here
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
