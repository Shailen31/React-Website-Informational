import './App.css';
import Navbar from './componets/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './componets/pages/Home';
import React, { Component } from 'react'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
