import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import StockResults from "./pages/StockResults.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<StockResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
