import "./App.css";
import Navbar from "./componets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./componets/pages/Home";
import Contact from "./componets/pages/Contact";
import Background from "./componets/pages/Background";
import Services from "./componets/pages/Services";
import React, { Component } from "react";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/background" exact element={<Background />} />
          <Route path="/services" exact element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
