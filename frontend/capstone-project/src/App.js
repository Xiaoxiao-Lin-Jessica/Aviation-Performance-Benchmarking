import React from "react";
import UserLogin from "./components/UserLogin";
import Dashboard from "./components/DashBoard";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import RouteOverview from "./components/ForRoute/RouteOverview";
import RouteDelayCancel from "./components/ForRoute/RouteDelayCancel";
import RouteBusynessSeat from "./components/ForRoute/RouteBusynessSeat";
import AirlineOverview from "./components/ForAirline/AirlineOverview";
import AirlineDelayCancel from "./components/ForAirline/AirlineDelayCancel";
import {AuthProvider, useAuth} from "./AuthContext";
export const AccessTokenContext = React.createContext();

function App() {
    let airlineAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM3NzI3NSwibmJmIjoxNjk4Mzc3Mjc1LCJleHAiOjE2OTgzODE4NTcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFraU4zVG9GVFA4MVpNK2l4OFVNbVEwRzdjb3FDcEVCcnFHT1NDc2Nlc3hiWXRRVXRwSU1BUUI3RU9PLzM4RGZ5IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYyIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJ2RzVMOUtaWXZrSzVGR2pFdjB4SUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.SBBAzpmdvZo5cD8KZVneETBv_744QaEijHyl_B5iwC3FZpAT4wc5T7UwWKQBk1gddv2MQo50CaBqxYjywQX7lSZffxWy3M20iGdSMRCRGSk9t4Rob6OJptp3frfc3SC0YN0YN6hqWhHJ1lQDrjfKgSBewe3OYtX5tEPEo3Z2Fk5nUwDzKqCNVDKkFgN8e72fdIHkr5TJVtv_CR8agt6OuHcD9yc8ZTCvt9NdRG91JQq6fay22gnvQXAA8MfFbZz1uKmzUkntk6zWHFol7ctscOZRrBn0XK0gkh33gVDvLh_5TDrhErFXwWUcu6JML5rzbDX-UInNcVNJ8V_o9Udsmw"
    let routeAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM3NzQ3MSwibmJmIjoxNjk4Mzc3NDcxLCJleHAiOjE2OTgzODIyNDksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFrcndXMnZmOWtCMU5hTjZ3VWdFSHE0NXRvR0d1L1B1UDNKVm93NklkZHB6SlgxU1pWclEzNjYrbVhtZUN5WTBPIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYwIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJCNFA5dlpnbG9rS3R1S1F3RTZoREFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.g-7n8GKRFZHai8FYsceleVGAa07Iran1vop_vqhxfft5ZJyeoN5OtYdaEhO56tEO40MCNzVQQkBHiT_bXoZkdBEncaQ0Yw7F1p8CDP9MdNwuuGJg0yOLvT_ktePn_3o6hgyfvkW0f4b-B1a6QlvqYQSt9DTl8hSWUt5DnaPYj17eSZgGr5RS6PsBO5qyBlEko70r6avaFxpAB5yk40nw_iaV6ZzZSFRUU5OlBRVZ0B6ZC90KBANrevsZyxIkSdnhZWBiXc7QWFZBp3ZrIcMesjtXl0He-cgowBfB-L-8tdZkbrsTssSBXWpr5SIUpRQVvCUntib0zCTOCFb1AVkqoQ"

    return (
        <AuthProvider>
            <AccessTokenContext.Provider value={{airlineAccessToken, routeAccessToken}}>
                <Router>
                    <Routes>
                        <Route path="/login" element={<UserLogin />} />
                        <Route path="/" element={<Homepage />} />
                        <Route path="/ForRouteOverview" element={<RouteOverview/>}/>
                        <Route path="/ForRouteDelayCancel" element={<RouteDelayCancel/>} />
                        <Route path="/ForRouteBusynessSeat" element={<RouteBusynessSeat/>} />
                        <Route path="/ForAirlineOverview" element={<AirlineOverview/>} />
                        <Route path="/ForAirlineDelayCancel" element={<AirlineDelayCancel/>} />
                        {/* Add additional routes */}
                    </Routes>
                </Router>
            </AccessTokenContext.Provider>
        </AuthProvider>
    );
}

export default App;
