import React from "react";
import UserLogin from "./components/UserLogin";
import Dashboard from "./components/DashBoard";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<UserLogin />} />
                <Route path="/" element={<Homepage />} />
                {/* Add additional routes */}
            </Routes>
        </Router>

);
}

export default App;
