import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import KeyboardInputField from "./components/KeyboardInputField";
import Keyboard from "./components/keyboard.jsx";
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Ueberuns from './components/ueberUns.jsx';
import Login from './components/login.jsx';

function App() {
  return (

       <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/ueberuns" element={<Ueberuns />} />
            <Route exact path="/keyboard" element={<Keyboard />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </Router>
   
  );
}
export default App;
