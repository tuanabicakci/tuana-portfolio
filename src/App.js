import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Home.js"
import Art from "./Art";
import Code from "./Code";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Test from "./Images/Test";
import ScrollToTop from "./ScrollToTop";
import Prisma from "./Prisma";
import FreddysCafe from "./FreddysCafe";

function App() {
  return (
      <Router>
          <Navbar/>
          <ScrollToTop/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path={"/art"} element={<Art/>}/>
                  <Route path={"/code"} element={<Code/>}/>
                    <Route path={"/prisma"} element={<Prisma/>}/>
                    <Route path={"/freddys-cafe"} element={<FreddysCafe/>}/>
              </Routes>

      </Router>
  );
}

export default App;
