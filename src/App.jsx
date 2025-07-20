import React from "react"
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/turistei-paraty" element={<HomePage />} />
        <Route path="/turistei-paraty/LoginPage" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
