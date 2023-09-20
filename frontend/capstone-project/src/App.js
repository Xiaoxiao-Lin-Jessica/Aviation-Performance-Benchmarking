import react from "react";
import UserLogin from "./components/UserLogin";
import Dashboard from "./components/DashBoard";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
