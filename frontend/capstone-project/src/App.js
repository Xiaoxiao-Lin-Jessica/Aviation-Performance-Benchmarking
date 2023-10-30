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
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODQwMTQzMCwibmJmIjoxNjk4NDAxNDMwLCJleHAiOjE2OTg0MDcwNjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUF1azNUdDNzUk1nZUJqcThMQld1cXQ0V1JwWllLWWlXMGhCdjBlY2o1cklQejkxNzhDWUtXNHVGaEZTTUhaRkNlIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiI4eTFrbGhjNDVrMmE5SnQ0YUJJVEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.lrXSl6-6GEtP06PfC4O0uAIqmiU6Lr-JBUFE7QCGsgwI15CTODrM5mT7X4RYS8NIVAxMcjpcTP8xt_MRLsNWtTVNv9gzBdb75p6NWTkO7Csp7Xv9061ExE6acCPNDYyinccCaZn-s2Otwvb4dfc_Goc7SKSzwj33RmkLeHvl5lEs3OOzleQkEFGf_nzWTWVMUmRA6V8zzOjkv3dWzalHkv5lP6dOkKLNUS3G9w5W0-3OtSKRamYb1YEKT2FyErIx872kSXnv2DocF6AVTixmeEastClolDhdU2xrQI1DXEyVV4TYNu34yhjrurOdF4yHe-RxEoL_6JvlCW_etCMlKA"
    let routeAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODQwMTc0OSwibmJmIjoxNjk4NDAxNzQ5LCJleHAiOjE2OTg0MDU3MzIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFvQlFvWTU5bjRvTGd0Wkp2NjAwb1RzZnFqMVpHTm5pRmpPU3hwU1p4VVZOQmdaYy9Ndy8xbmFkM0kxczc4Q2RPIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuMTMxLjE0LjM1IiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiI4c2lvYzFEQjhFcWhLNWpVTlZOa0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.OkVSCfKwebXfa_hByfwBEjyw464ly0ii2C8UE8HGjPNqayW14o-zua67GjqSPwic5E0s1ab3wBldIT-B8jXpxGJ-xMIoBl_IyZrh_RMQ_Eyd4LLr1ZCFyET7dzG9YBF6hDUFGv3_N-xVfttzS67EMW_6s5TF6DDu2q4ORIzKadYZKOMS8iiIZUkITka6yrDxZO0h_GKpjMyPYTNB-FdCe3cUuknFEWs7JZnkmGMigbknx-8HUYKlmSdexNL8nLy3DNFRqNHIwdesEmiYYK9R3_5YMfaJo2mq3CvPnMgNOwIuAOOu7vTtvjaySVcbPNg1AtYpeGmEaakayzMACQBDjg"


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
