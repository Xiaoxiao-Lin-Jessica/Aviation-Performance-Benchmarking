// Importing required dependencies and components.
import React from "react";
import UserLogin from "./components/UserLogin";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import RouteOverview from "./components/ForRoute/RouteOverview";
import RouteDelayCancel from "./components/ForRoute/RouteDelayCancel";
import RouteBusynessSeat from "./components/ForRoute/RouteBusynessSeat";
import AirlineOverview from "./components/ForAirline/AirlineOverview";
import AirlineDelayCancel from "./components/ForAirline/AirlineDelayCancel";
import AustralianMap from "./components/Map/AustralianMap";
import { AuthProvider, useAuth } from "./AuthContext";

// Context for access tokens related to different components
export const AccessTokenContext = React.createContext();

function App() {
    //All Power BI report access tokens are here, modify and replace them if needed.
    let airlineAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODg4OTY4MCwibmJmIjoxNjk4ODg5NjgwLCJleHAiOjE2OTg4OTQwNzksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFTQWFPckJzK1o2ZHY4TzNONXFNdU5tTVdwbHcvdlk3NTNlZnJjZXE5cUxMRURLRExwbFM0SHdudVRLZW9kK29TIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYxIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiItbWt5RlczaFRVZTFZZDh2bXM1bkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.wR31X4P6fOfaBsB_Y7_FQ8QItSslix2IE6fvFC_2gGPCOqMTOt6olrGNc6NaE8tDs9QHCfe50puWB6JDS9gKeKsar7BTD5pxvaVxnwXug01f8O3CR36jLk04SnSSpWHZJ8Da2l4o1lqbGWkRxsKr7wPaT-RoqGdbdq_4-1G2UyZ0rxXCiN9wDYmC9C151ET0Z3qUw970vGYv4xOSjy7elyJ18EovLP2xMtoPngrcN9vbBRXBRwM7PJbSnGWWFEX-CJT4XkZflYvfgss-tK17mRjmaMLr6y5MNs7-O0H9WP7ZXqxIPp2WJR4bC7DIbBn7CXQrQ7bLxQc91Fsc7Cip5w";
    let routeAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODg4ODQwMSwibmJmIjoxNjk4ODg4NDAxLCJleHAiOjE2OTg4OTI2ODQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFNYXJTaGNRU1RPTkswMFI0UTBYc1IxaFFwWnlzM1ZTOFdIWW9UZUczRzJWczFjL2IxUU1JQmdLRklWbDNLV0tmIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYyIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJPMFJlbWRaZVQwV25NUE5iZC05ZUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.C8NN11DWFNllMur1wCmtEYDRo4ZrhJFFXzZg30o_kLXRWA_IMGa0CB98BSuwUFGh6iqPUS_T6IjAq-HETU-1AS7hKkVP0Xaafoa8DgdOb7W-sRMCcK5agOFBTn7TantTBWsOgtpfDGmOie2buihGpQNNzdi3B0UqW2nXP_TycjsfsINl7QEEaFKqFPf5mkT0Mtw3y8Tti_Y48NI54k_AOTmGsgUH5ziUvijLtP1xxyqr4iHkgUm9sfu5ki4O2ijpmPxX7f823Z_rOmy5Gn1ukf79HUr4Zmbx0se-atHvDB6bzOd4-JbRGa5O85MVw6MWfoFecDtmDZNEXBcI_pEAMQ";
    let mapAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODg4OTg1OCwibmJmIjoxNjk4ODg5ODU4LCJleHAiOjE2OTg4OTQ2NzAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFrcndXMnZmOWtCMU5hTjZ3VWdFSHE0NXRvR0d1L1B1UDNKVm93NklkZHB6SlgxU1pWclEzNjYrbVhtZUN5WTBPIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYwIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJMT0FaU0FCbmgwR1NqenlyX0lsMkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.MSVWliILpj7C61DzkNxLXJnuaj2m7-PFDW8Zha89fXnOIpTKGQKtELgWaWONw6IAyxYPSPO1fUzuX_w7RcLJZnSffBOK9MJ6vVXj4ip1Hv2qh6pOmG0vPRF1Hw_35SSSsyFothknppNDAQxGVGtll0RcAjhtb5wznkVaorihL9itRxbQzql4IKLS9IdaJyltz-sCxP5YnWKGH1ii4EK_LzJubVd3Oc7vxAzrmufn5pHb6tnjb84p-Y1FpHRDlXUCTr9O7eU-P3MiWdaqCMxePEYenE74e2kAyQsB5SJVMTmAyz8dHQXbfd35tLmYYfsy7ewb9zbSXLW14mV0D0d2gA";

    return (
        //Provide authentication context to children components
        <AuthProvider>
            
            {/*Provide access tokens context to children components*/}
            <AccessTokenContext.Provider
                value={{ airlineAccessToken, routeAccessToken, mapAccessToken }}
            >
                {/* Set up routing for the application */}
                <Router>
                    <Routes>
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/" element={<Homepage />} />
                        <Route
                            path="/ForRouteOverview"
                            element={<RouteOverview />}
                        />
                        <Route
                            path="/ForRouteDelayCancel"
                            element={<RouteDelayCancel />}
                        />
                        <Route
                            path="/ForRouteBusynessSeat"
                            element={<RouteBusynessSeat />}
                        />
                        <Route
                            path="/ForAirlineOverview"
                            element={<AirlineOverview />}
                        />
                        <Route
                            path="/ForAirlineDelayCancel"
                            element={<AirlineDelayCancel />}
                        />
                        <Route path="/Map" element={<AustralianMap />} />
                    </Routes>
                </Router>
            </AccessTokenContext.Provider>
        </AuthProvider>
    );
}

export default App;
