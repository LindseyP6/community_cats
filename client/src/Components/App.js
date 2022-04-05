import React, { useState, useEffect } from "react";
import { Routes ,Route } from 'react-router-dom';
import '../App.css';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MapContainer from './MapContainer';
import CatContainer from './CatContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

      <Route 
        exact path="/" 
        element={<MapContainer />} 
      />

      <Route 
        path="signup" 
        element={<Signup />} 
      />

      <Route 
        path="login" 
        element={<Login />} 
      />

      <Route 
        path="map" 
        element={<MapContainer />} 
      />
      
      <Route 
        path="all-cats" 
        element={<CatContainer />} 
      />

      </Routes>
    </div>
  );
}

export default App;
