import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Home.js"
import Art from "./Art";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Test from "./Images/Test";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route exact path="/home" element={<Home/>}/>
              <Route path={"/art"} element={<Art/>}/>
              <Route path={"/test"} element={<Test/>}/>
          </Routes>
      </Router>
  );
}

export default App;
