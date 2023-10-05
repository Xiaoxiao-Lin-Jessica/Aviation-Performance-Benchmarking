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

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<UserLogin />} />
                <Route path="/" element={<Homepage />} />
                <Route path="/ForRouteOverview" element={<RouteOverview />} />
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
                {/* Add additional routes */}
            </Routes>
        </Router>
    );
}

export default App;
