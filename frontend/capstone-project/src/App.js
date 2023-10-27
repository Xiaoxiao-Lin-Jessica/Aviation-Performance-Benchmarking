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
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM3MzAxMiwibmJmIjoxNjk4MzczMDEyLCJleHAiOjE2OTgzNzc4MTUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFJOTZhQ0VBTXBqMjRtRzNnRlJmRVIzWXI4bUpUZ0VkNkszSjlJVjZLaGFjRW1wd1pRUGhOZzNCQmtwNVl6dS9nIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYxIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJXaVl4TVA0NXBVNm1DQ0d5MTlOY0FBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Pxdyiyf57PDnrTKJLY66ntBMpPjM-0632QdpQgoE2Hsn_6bjyFEjabKfPkaxg1Oy-r3rR-PO30UqqNgjp1DbrH8ytLYfB78IhW_phFP6yrV1mA8XI0bNoAbMMrLpky7SewQdyJZu6lKO1_k_vDD86G98F1AQ0nUJFKGQni70e5qdljB05wVbeaQclfCbNBsx5BC_QFVbFs8kGe3sNR6oCK58DEuBrWdW7pVbr3wnFmqQQ6dbZWc0OLW_P9vQbnmWy9E4HIw_WIUfZrHV5CfSzoHLHb4ImAmFEuPrJH29kdcGYMNvj6ScMehxXCUHAtZQQ0NNROWgMWoNCJcs99nRgg"
    let routeAccessToken =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvN2JlOTNiYTctNDQ4Mi00OWQwLWE1MTItN2M2ODE4MDk2ZTMzLyIsImlhdCI6MTY5ODM3MjQwNiwibmJmIjoxNjk4MzcyNDA2LCJleHAiOjE2OTgzNzgwMTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VUFBQUFkbldvMmpXdE9ZWFVOekRGZUhSaUtXKzlhY0lyT3NGR3phZFY2cWsrZmZmU0hhWkJCQ1Y4emFFOUVLY3o1dkh1IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiWm91IiwiZ2l2ZW5fbmFtZSI6IllhbmciLCJpcGFkZHIiOiIxMDMuNjYuMTMyLjYwIiwibmFtZSI6IllhbmcgWm91Iiwib2lkIjoiYjdhZDhjYzAtNDA3My00YmIyLTliYTEtNWY3MDI4YTA1YzNlIiwicHVpZCI6IjEwMDMyMDAyNDA1QzI1OTQiLCJyaCI6IjAuQVFvQXB6dnBlNEpFMEVtbEVueG9HQWx1TXdrQUFBQUFBQUFBd0FBQUFBQUFBQUFLQUZRLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6ImoyT3lMZ0psYnI3VEhyZjBrRUtZMWtMcVBmeDhPLUs2OEZodzBPNlBIRkEiLCJ0aWQiOiI3YmU5M2JhNy00NDgyLTQ5ZDAtYTUxMi03YzY4MTgwOTZlMzMiLCJ1bmlxdWVfbmFtZSI6Inl6b3U5MDczQHVuaS5zeWRuZXkuZWR1LmF1IiwidXBuIjoieXpvdTkwNzNAdW5pLnN5ZG5leS5lZHUuYXUiLCJ1dGkiOiJkQnJ0QV9PMXowcWE5ckVCSHAxVEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.duGzpwxJdm8lARvSXAjB-8Lh74RJFXwaXglQF9Qe0u7STpj4s98DjbSqXsaX03L7558XUoX4HhbeRhM61lxVtcfBU1XAE5aAWKYALrWlNzPPz1-VrP78JRZioVA7NpDrQia68g0Q43R8y8MEluM9ZkK1jk3qJU1rBrnWBdzqY4nxiuiA8NR2_wGvO_DvbzDfxRgRY87w3msw9NlVL4jjN8iBA8hQIaKM90w8nKy5LvHnyURoODeP3flJZv1smyzcvzC8QOIdtvfir99yv9QDRBC2-fkpd4a4e61mMxgDof0SG4PPFwMoSGLkPSEm9LhNbR5Xvjtu7sZXtYdYP3qEZg"


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
