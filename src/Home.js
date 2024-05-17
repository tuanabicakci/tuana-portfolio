import "./Home.css";
import {GameDesign, WebDesign} from "./Components/Work";
import {Link} from "react-router-dom";
import Tuana from "./Images/IMG_0734.JPG";
import PT from "./Images/substance-3d-painter.png";
import video from "./Images/videoplayback.mp4"
import {useEffect, useState} from "react";
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
        <div id={"home"}>
            <div className="outer-div">
                <div
                    className={`background-div ${fade ? 'fade-in' : 'fade-out'}`}
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                />
                <div className="content">
                    <h2 id={"name"}>TUANA BICAKCI</h2>
                    <h3 id={"title"}>GAME DEVELOPER / WEB DEVELOPER / 3D GENERALIST</h3>
                </div>
            </div>
            <h2 className={"section-titles"}>SKILLS</h2>
            <hr className={'line'}/>
            <ul id={"buttons-wrapper"}>
                <li><i className="devicon-unrealengine-original-wordmark"></i></li>
                <li><i className="devicon-unity-plain-wordmark"/></li>
                <li><i className="devicon-csharp-line"/></li>
                <li><i className="devicon-blender-original-wordmark"/></li>
                <li><img src={PT} alt=""/></li>
                <li><i className="devicon-java-plain"/></li>
                <li><i className="devicon-javascript-plain"/></li>
                <li><i className="devicon-typescript-plain"/></li>
                <li><i className="devicon-css3-plain"/></li>
                <li><i className="devicon-html5-plain"/></li>
                <li><i className="devicon-tailwindcss-plain-wordmark"/></li>
                <li><i className="devicon-figma-plain"/></li>
                <li></li>
                <li><i className="devicon-react-original"/></li>
                <li><i className="devicon-nextjs-original-wordmark"/></li>
                <li><i className="devicon-nodejs-plain-wordmark"/></li>
                <li><i className="devicon-mongodb-plain-wordmark"/></li>
            </ul>
            <h2 className={"section-titles"}>RECENT PROJECTS</h2>
            <hr className={'line'} />
                <div className="home-container">
                    <div className="recent-projects">
                        {GameDesign.map((item, i) => (
                            <Link to={item.link} key={i}
                                  className={item.tag === "recent" ? "home-thumbnail" : "hidden"}
                            >
                                <img src={item.photo} alt=""/>
                                <div className="thumbnail-text-wrapper">
                                    <h3>{item.name}</h3>
                                    <div className={"thumbnail-description"}>{item.description}</div>
                                </div>
                            </Link>
                        ))}
                        {WebDesign.map((item, i) => (
                            <Link to={item.link} key={i}
                                  className={item.tag === "recent" ? "home-thumbnail" : "hidden"}
                            >
                                <img src={item.photo} alt=""/>
                                <div className="thumbnail-text-wrapper">
                                    <h3>{item.name}</h3>
                                    <div className={"thumbnail-description"}>{item.description}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
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