import "./Home.css";
import { GameDesign, WebDesign, ThreeD } from "./Components/Work";
import { Socials } from "./Components/Socials";
import { Link } from "react-router-dom";
import Tuana from "./Images/tuana-headshot.JPEG";
import video from "./Images/videoplayback.mp4"
import React, { useEffect, useState } from "react";
import dreamTeamThumbnail from "./Images/DT5.png"
import academicWeaponThumbnail from "./Images/Academic_Weapon/academic-weapon-slide_2.png"
import starlitCatchThumbnail from "./Images/Starlit_Catch/starlit-catch-slide_1.png"
import thesituationThumbnail from "./Images/The_Situation/the-situation-slide-2.png"
import lemonGameThumbnail from "./Images/The_Lemon_Game/lemon-game-slide-1.png"
import sleepyHavenThumbnail from "./Images/Sleepy_Haven/sleepy-haven-slide-1.png"
import debugCityThumbnail from "./Images/DebugCity/debugcity_1.png"
import academicweaponThumbnail from "./Images/AcademicMaster/academicmaster_2.png"
import itHasMyFaceThumbnail from "./Images/ItHasMyFace/IHMF_banner.png"
import itHasMyFaceThumbnailHero from "./Images/ItHasMyFace/boss-shot-1.png"
import thatForest from "./Images/Hide_And_Seek/final-17.png"
import bhvrLogo from "./Images/ItHasMyFace/bhvr-logo.png"
import nightbyteLogo from "./Images/ItHasMyFace/nightbyte-logo.png"
import FieldSummary from "./Components/FieldSummary";
import ProjectCatalogue from "./Components/ProjectCatalogue";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import resume from "./PDFs/Tuana_Bicakci_Resume.pdf"




const images = [
    itHasMyFaceThumbnailHero, thatForest, dreamTeamThumbnail, academicWeaponThumbnail,
    starlitCatchThumbnail, thesituationThumbnail, lemonGameThumbnail,
    sleepyHavenThumbnail, debugCityThumbnail, academicweaponThumbnail
];



function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true);
            }, 800); // Match this duration with the fade-out animation duration
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
            <div className="hero">
                <div
                    className={`background-div ${fade ? 'fade-in' : 'fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                />
                <div
                    className={`background-div`}
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(15,15,27,1) 0%, rgba(15,15,27,0) 50%, rgba(15,15,27,1) 100%)` }} />
                <div className="content">
                    <div className={"resume"}>
                        <h2 id={"name"}>TUANA BIÇAKCI</h2>
                        <h3 id={"title"}>DEVELOPER & ARTIST</h3>
                        <a class={"resume-btn"} href={resume}>MY RESUME</a>
                    </div>
                    <div className={"socials"}>
                        {Socials.map((item, i) => (
                            <a key={i} href={item.link}>
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            {/* ── FEATURED: IT HAS MY FACE ── */}
            <div id="ihmf-featured" style={{ backgroundImage: `url(${itHasMyFaceThumbnail})` }}>
                <div id="ihmf-featured-overlay" />
                <div
                    className="ihmf-featured-blend"
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(15,15,27,1) 0%, rgba(15,15,27,0) 20%, rgba(15,15,27,0) 80%, rgba(15,15,27,1) 100%)` }} />
                <div id="ihmf-featured-content" className="block">
                    <span id="ihmf-shipped-badge">⬡ SHIPPED TITLE</span>
                    <h2 id="ihmf-featured-title">IT HAS MY FACE</h2>
                    <div id="ihmf-featured-studios">
                        <img src={nightbyteLogo} alt="NightByte Games" className="ihmf-studio-logo" />
                        <span className="ihmf-studio-divider">×</span>
                        <img src={bhvrLogo} alt="Behaviour Interactive" className="ihmf-studio-logo" />
                    </div>
                    <p id="ihmf-featured-sub">First-person roguelite horror</p>
                    <p id="ihmf-featured-desc">
                        As Environment Artist Intern I designed 10 new props, built three new game sections,
                        dressed the final boss arena from greybox, and remade existing environments.
                    </p>
                    <div id="ihmf-featured-tags">
                        <span className="ihmf-feat-tag">Unity</span>
                        <span className="ihmf-feat-tag">Blender</span>
                        <span className="ihmf-feat-tag">Low-poly</span>
                        <span className="ihmf-feat-tag">Pixel Art Textures</span>
                        <span className="ihmf-feat-tag">Procedural Systems</span>
                    </div>
                    <div id="ihmf-featured-actions">
                        <Link to="/it-has-my-face" id="ihmf-feat-cta">View My Work →</Link>
                        <a href="https://store.steampowered.com/app/2506530/It_Has_My_Face/" target="_blank" rel="noreferrer" id="ihmf-feat-steam">Play on Steam ↗</a>
                    </div>
                </div>
            </div>

            <div>
                <ProjectCatalogue
                    mainIcon={"fa-solid fa-gamepad"}
                    heading="PROJECTS & COMPETITIONS"
                    icons={["devicon-unrealengine-original",
                        "devicon-unity-plain",
                        "devicon-csharp-line",
                        "devicon-cplusplus-plain",
                        "devicon-blender-original",
                        substancePainterIcon
                    ]}
                    children={GameDesign}
                    showRecent={true}
                    isAccent={false}
                    social={"Itch.io"}
                    socialLink={"https://tuanabicakci.itch.io/"}
                    socialIcon={"fa-brands fa-itch-io"} />
            </div>
            <div id="about-me-container" >
                <div id="about-me" className="block">
                    <img id="profile-pic" src={Tuana} alt="" />
                    <div>
                        <h2>ABOUT ME</h2>
                        <p>
                            I am a multidisciplinary 3D environment artist and software developer based in Montreal, specializing in game and web development. My work focuses on crafting digital spaces that provoke real-life emotions and reflections. I believe environments tell stories—how objects are placed influences how players interact with the world, just as we shape and are shaped by our surroundings.
                            <br /><br />
                            I recently finished my internship as an Environment Artist on <a href="https://store.steampowered.com/app/2506530/It_Has_My_Face/">It Has My Face</a>, a first-person roguelite horror game developed by <a
                                href="https://www.ithasmyface.com/">NightByte Games</a> and published by <a href="https://www.bhvr.com/">Behaviour Interactive</a>, where I designed modular environments for procedurally generated worlds and helped shape the game’s stylized low-poly, pixel-art aesthetic. I’ve also participated in the Ubisoft Game Lab and taken part in many game jams, earning a grant from Behaviour Interactive for the work I did throughout my undergrad.
                            <br /><br />
                            Having almost completed a Double Major in Computer Science and Computation Arts degree at Concordia University, I continue to explore immersive and interactive digital experiences.

                        </p>
                        <a className={"resume-btn"} href={resume}>MY RESUME</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;