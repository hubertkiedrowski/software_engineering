import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import KeyboardInputField from "./components/KeyboardInputField";
import Keyboard from "./components/keyboard";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Ueberuns from "./components/ueberUns";
import Login from "./components/login";
import Regist from "./components/regist";
import LoginErfolgreich from "./components/loginErfolgreich"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ueberuns" element={<Ueberuns />} />
        <Route exact path="/keyboard" element={<Keyboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/regist" element={<Regist />} />
        <Route exact path="/loginErfolgreich" element={<LoginErfolgreich />} />
      </Routes>
    </Router>
  );

  // apicall auf localhost:3000/user/ID
  // react fetch data
}
export default App;
