import React from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Home.js"
import Art from "./Art";
import Code from "./Code";
import Games from "./Games"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import Prisma from "./Prisma";
import FreddysCafe from "./FreddysCafe";
import MiracleDaycare from "./MiracleDaycare";
import FeltAlone from "./FeltAlone";
import Footer from "./Components/Footer"
import DreamTeam from "./DreamTeam";
import StarlitCatch from "./StarlitCatch"
import AcademicWeapon from "./AcademicWeapon";
import TheSituation from "./TheSituation";
import LemonGame from "./LemonGame";
import SleepyHaven from "./SleepyHaven";
import DebugCity from "./DebugCity";
import AcademicMaster from "./AcademicMaster";
function App() {
  return (
      <Router>
          <ScrollToTop/>
              <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path={"/art"} element={<Art/>}/>
                  <Route path={"/code"} element={<Code/>}/>
                  <Route path={"/games"} element={<Games/>}/>
                    <Route path={"/prisma"} element={<Prisma/>}/>
                    <Route path={"/freddys-cafe"} element={<FreddysCafe/>}/>
                    <Route path={"/miracle-daycare"} element={<MiracleDaycare/>}/>
                    <Route path={"/felt-alone"} element={<FeltAlone/>}/>
                    <Route path={"/dream-team"} element={<DreamTeam/>}/>
                    <Route path={"/starlit-catch"} element={<StarlitCatch/>}/>
                    <Route path={"/academic-weapon"} element={<AcademicWeapon/>}/>
                    <Route path={"/the-situation"} element={<TheSituation/>}/>
                    <Route path={"/lemon-game"} element={<LemonGame/>}/>
                    <Route path={"/sleepy-haven"} element={<SleepyHaven/>}/>
                    <Route path={"/debug-city"} element={<DebugCity/>}/>
                    <Route path={"/academic-master"} element={<AcademicMaster/>}/>

              </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
