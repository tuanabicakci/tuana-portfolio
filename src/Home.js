import "./Home.css";
import {GameDesign, WebDesign} from "./Components/Work";
import {Socials} from "./Components/Socials";
import {Link} from "react-router-dom";
import Tuana from "./Images/IMG_0734.JPG";
import video from "./Images/videoplayback.mp4"
import React, {useEffect, useState} from "react";
import DT1 from "./Images/DT1.png";
import DT2 from "./Images/DT2.png";
import DT3 from "./Images/DT3.png";
import DT5 from "./Images/DT5.png";
import DT6 from "./Images/DT6.png";
import DT7 from "./Images/DT7.png";
import DT8 from "./Images/DT8.png";
import DT9 from "./Images/DT9.png";
import red from "./Images/red-bg.png"
import S2 from "./Images/screenshot2.png"
import resume from "./PDFs/TuanaBicakci_CV05.pdf"
import FieldSummary from "./Components/FieldSummary";
import substancePainterIcon from "./Images/substance-3d-painter.svg";

const images = [
    DT1,DT2,DT3,DT5,red,S2,DT6,DT7,DT8,DT9
];



function Home() {
    const [currentImageIndex, setCurrentImageIndex]=useState(0);
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
                    style={{ backgroundImage: `linear-gradient(0deg, rgba(15,15,27,1) 0%, rgba(0,212,255,0) 100%)` }}/>
                <div className="content">
                    <div className={"resume"}>
                        <h2 id={"name"}>TUANA BIÇAKCI</h2>
                        <h3 id={"title"}>DEVELOPER & 3D GENERALIST</h3>
                        <a id={"resume-btn"} href={""}>MY RESUME</a>
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
            <div className="outer-div">

            </div>
            <FieldSummary
                mainIcon={"fa-solid fa-code"}
                heading="SOFTWARE DEVELOPMENT"
                icons={["devicon-java-plain",
                "devicon-javascript-plain",
                "devicon-typescript-plain",
                "devicon-css3-plain",
                "devicon-html5-plain",
                "devicon-tailwindcss-plain-wordmark",
                "devicon-figma-plain",
                "devicon-react-original",
                "devicon-nextjs-original-wordmark",
                 "devicon-nodejs-plain-wordmark",
                    "devicon-mongodb-plain-wordmark"
                ]}
                children={WebDesign}
                showRecent={true}/>
            <FieldSummary
                mainIcon={""}
                heading="GAME DEVELOPMENT"
                icons={["devicon-unrealengine-original",
                    "devicon-unity-plain",
                    "devicon-csharp-line",
                    "devicon-blender-original",
                    substancePainterIcon
                ]}
                children={GameDesign}
                showRecent={true}
                bgColor={"rgba(250,168,246,0.15)"}/>
            <h2 className={"section-titles"}>ABOUT ME</h2>
            <hr className={'line'}/>
            <div className="about-me-container">
                <div className="about-me">
                    <img  id="profile-pic" src={Tuana} alt=""/>
                    <br/><br/>
                    I'm a Bachelor of Computer Science and Computation Arts student at Concordia University.
                    Through coursework and projects, I've mastered Object-Oriented Programming, Data Structures,
                    3D Production, and Game Design. Engaging in game jams like Concordia Game Jam, Gamerella, and Ubisoft Gamelab,
                    I've gained proficiency in Unreal Engine 5, Unity, C#, Blender, and Substance Painter.
                    <br/><br/>
                    My portfolio, featuring projects like "Errors In Thinking" and "Web-Based PC Assembly Guide,"
                    highlights my Front-end Development skills with HTML, CSS, JavaScript, React.js, and TypeScript.
                    Actively contributing to projects like Dream Team, PRISMA, Freddy's Cafe, I've demonstrated prowess as a Programmer, Level Designer, and Artist.
                    <br/><br/>
                    Currently interning as a Digital Marketing Intern at dormakaba, I'm sharpening my Front-end
                    Development and Website Maintenance abilities with WordPress, Elementor, and Contentful.
                    Additionally, I've recently joined the team of the horror game project, WaxHeart, as a
                    3D Environment/Texture Artist, further enriching my portfolio with immersive game environments.
                    <br/><br/>
                    <a href={resume}>
                        <button id={'cv-button'}>DOWNLOAD MY CV</button>
                    </a>
                </div>
            </div>
            <br/><br/>
            <br/><br/>
        </div>
    );
}

export default Home;