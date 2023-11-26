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
import Navbar from './components/navbar';

function App() {
  return (
    <>
  
       <div>
       <Router>
          <Routes>
            <Route exact path="/" element={<home/>} />
            <Route exact path="/login" element={<login />} />
            <Route exact path="/ueberUns" element={<ueberuns />} />
            <Route exact path="/keyboard" element={<Keyboard />} />
          </Routes>
        </Router>
       </div>
    </>
   
  );
}
export default App;
