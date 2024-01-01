import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Home.js"
import Art from "./Art";
import Code from "./Code";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Prisma from "./Prisma";
import FreddysCafe from "./FreddysCafe";
import MiracleDaycare from "./MiracleDaycare";
import Other from "./Other";
import FeltAlone from "./FeltAlone";

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
                    <Route path={"/miracle-daycare"} element={<MiracleDaycare/>}/>
                    <Route path={"/felt-alone"} element={<FeltAlone/>}/>
              </Routes>

      </Router>
  );
}

export default App;
