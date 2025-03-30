import "./Home.css";
import {GameDesign, WebDesign,ThreeD} from "./Components/Work";
import {Socials} from "./Components/Socials";
import {Link} from "react-router-dom";
import Tuana from "./Images/about-me-pic.jpeg";
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
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(15,15,27,1) 0%, rgba(15,15,27,0) 50%, rgba(15,15,27,1) 100%)` }}/>
                <div className="content">
                    <div className={"resume"}>
                        <h2 id={"name"}>TUANA BIÇAKCI</h2>
                        <h3 id={"title"}>DEVELOPER & 3D GENERALIST</h3>
                        <a class={"resume-btn"} href={""}>MY RESUME</a>
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
                "devicon-mongodb-plain-wordmark",
                "devicon-python-plain",
                "devicon-streamlit-plain-wordmark",
                "devicon-c-plain-wordmark"
                ]}
                children={WebDesign}
                showRecent={true}
                isAccent={false}/>
            <FieldSummary
                mainIcon={"fa-solid fa-gamepad"}
                heading="GAME DEVELOPMENT"
                icons={["devicon-unrealengine-original",
                    "devicon-unity-plain",
                    "devicon-csharp-line",
                    "devicon-blender-original",
                    substancePainterIcon
                ]}
                children={GameDesign}
                showRecent={true}
                isAccent={true}/>
            <FieldSummary
                mainIcon={"fa-solid fa-code"}
                heading="3D ART"
                icons={["devicon-blender-original",
                    substancePainterIcon,
                ]}
                children={ThreeD}
                showRecent={true}
                isAccent={false}/>

            <div id="about-me-container" >
                <div id="about-me" className="block">
                    <img  id="profile-pic" src={Tuana} alt=""/>
                    <div>
                        <h2>ABOUT ME</h2>
                        <p>
                            I am a 3D environment artist and software developer based in Montreal, specializing in game and web development. My work focuses on crafting digital spaces that provoke real-life emotions and reflections. I believe environments tell stories—how objects are placed influences how players interact with the world, just as we shape and are shaped by our surroundings.
                            <br/><br/>
                            I have worked on multiple game projects, including The Lemon Game, Academic Weapon, and Starlit Catch, often collaborating with Kira Fountain. I have participated in Ubisoft Game Lab and game jams, earning a grant from Behaviour Interactive.
                            <br/><br/>
                            Beyond games, I co-founded imiGoose, an AI-driven immigration platform, and competed in the McGill Dobson Bootcamp and Cup. I have interned at Genetec and Dormakaba Americas, refining my expertise in UI/UX and software solutions.
                            <br/><br/>
                            Currently pursuing a Computer Science and Computation Arts degree at Concordia University, I continue to explore immersive and interactive digital experiences
                        </p>
                        <a className={"resume-btn"} href={""}>MY RESUME</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;