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
      <Navbar/>
        <Router>
          <Routes>
            {/* <Route exact path="/" element={<home />} />
            <Route exact path="/login" element={< />} />
            <Route exact path="/ueberUns" element={< />} />
            <Route exact path="/login" element={< />} /> */}

            <Route exact path="/keyboard" element={<Keyboard />} />
          </Routes>
        </Router>
    </>
   
  );
}
export default App;
