import TuanaSketch from "./Images/tuanasketch.png";
import "./Home.css";
import {GameDesign, GraphicDesign, UnpublishedWork, WebDesign} from "./Components/Work";
import {Link} from "react-router-dom";
import React, {useRef, useState, useEffect} from "react";
import PopUp from "./Components/PopUp";
import Tuana from "./Images/IMG_0734.JPG";

const ITEM_WIDTH = 200;

function Home() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();
    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    };

    const [buttonPopup, setButtonPopup] = useState(false)
    const [work, setWork] = useState(0);

    return (
        <div id={"home"}>
            <div id={"main-screen"}>
                <img id={"tuana-sketch"} src={TuanaSketch} alt={"a skecth of Tuana"}/>
                <div>game dev & multimedia artist based in Montreal</div>
            </div>
            <br/><br/>
            <div id={"intro"}>
                <img style={{objectFit:"cover"}} src={Tuana} alt={""}/>
                <div>
                    Hi,my name is <span style={{color: '#729b79'}}>Tuana</span>!
                    <br/>
                    I am a Computer Science and Computation Arts student at <span style={{color: '#729b79'}}>Concordia University</span>.
                    Fueled by a fervor for pixels and lines of code, I've embarked on a thrilling journey to sculpt my
                    dreams into immersive digital experiences.
                    <br/>
                </div>
            </div>
            <br/><br/>
            <div id={"buttons-wrapper"}>
                <div style={{color: " #E8EBEA"}}>Explore all my work!</div>
                <div id="buttons">
                    <Link to={"/art"}>ART</Link>
                    <Link to={"/code"}>CODE</Link>
                    <Link to={"/other"}>OTHER</Link>
                </div>
            </div>
            <br/><br/>
            <div>
                <div className="home-container">
                    <span style={{color: '#729b79', fontSize: "2rem"}}>Recent Projects</span>
                    <div id="recent-projects">
                        {GameDesign.map((item, i) => (
                            <Link to={item.link} key={i}
                                  className={item.tag === "recent" ? "home-thumbnail" : "hidden"}>
                                <div>
                                    <img className={"thumbnail-images"} src={item.photo} alt=""/>
                                    <h3>{item.name}</h3>
                                    <div className={"thumbnail-description"}>{item.description}</div>
                                </div>

                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <br/><br/>
            <div>
                <div className="home-container">
                    <span style={{color: '#729b79', fontSize: "2rem"}}>In Development!</span>
                    <div id="recent-projects">
                        {GameDesign.map((item, i) => (
                            <Link to={item.link} key={i} className={item.tag === "indev" ? "home-thumbnail" : "hidden"}>
                                <div>
                                    <img className={"thumbnail-images"} src={item.photo} alt=""/>
                                    <h3>{item.name}</h3>
                                    <div className={"thumbnail-description"}>{item.description}</div>
                                </div>

                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <br/><br/>
            <div id={"footer"}>
                Lets get in touch!
                <br/>
                <nav id={"socials"}>
                    <a href={`mailto:${"bicakcitauan@gmail.com"}`}><i className="fa-solid fa-envelope"></i></a>
                    <a href="https://github.com/tuanabicakci"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tuana-bicakci/"><i className="fa-brands fa-linkedin"></i></a>
                </nav>
            </div>
            {/*<span style={{color: '#729b79',fontSize:"2rem"}}>GAME DESIGN</span>*/}
            {/*<div className="wrapper">*/}
            {/*    /!*<button onClick={()=>{handleScroll(-ITEM_WIDTH)}}>*!/*/}
            {/*    /!*    <i className="fa-solid fa-arrow-left" />*!/*/}
            {/*    /!*</button>*!/*/}
            {/*    <div className="container" ref={containerRef}>*/}
            {/*        <div id="game-design">*/}
            {/*            {GameDesign.map((item, i) => (*/}
            {/*                <Link to={item.link} key={i} id={"thumbnail"}>*/}
            {/*                    <img className={"thumbnail-images"} src={item.photo} alt=""/>*/}
            {/*                    <h3>{item.name}</h3>*/}
            {/*                    <div className={"description"}>{item.description}</div>*/}
            {/*                </Link>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    /!*<button onClick={()=>{handleScroll(ITEM_WIDTH)}}>*!/*/}
            {/*    /!*    <i className="fa-solid fa-arrow-right" />*!/*/}
            {/*    /!*</button>*!/*/}
            {/*</div>*/}
            {/*<span style={{color: '#729b79',fontSize:"2rem"}}>WEB DESIGN</span>*/}
            {/*<div className="wrapper">*/}
            {/*    <div className="container" ref={containerRef}>*/}
            {/*        <div id="game-design">*/}
            {/*            {WebDesign.map((item, i) => (*/}
            {/*                <div onClick={()=>{setButtonPopup(true);setWork(item)}} key={i} id={"thumbnail"}>*/}
            {/*                    <img className={"thumbnail-images"} src={item.thumbnailPhoto} alt=""/>*/}
            {/*                    <h3>{item.name}</h3>*/}
            {/*                    <div className={"description"}>{item.summary}</div>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>*/}
            {/*        <h3 className={"popup-title"}>{work.name}</h3>*/}
            {/*        <div className={"popUp-images-wrapper"}>*/}
            {/*            {work.photos && work.photos.map((item,i)=>(*/}
            {/*                <div className={"popUp-images-container"} key={i}>*/}
            {/*                    <img className={"popup-images"} src={item} alt=""/>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <div className={"skills-container"}>*/}
            {/*            Skills:*/}
            {/*            {work.skills && work.skills.map((item,i)=>(*/}
            {/*                <h4 className={"skills"} key={i}>*/}
            {/*                    {item}*/}
            {/*                </h4>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <pre style={{width:"100%"}} className={"popup-description"}>{work.description}</pre>*/}
            {/*    </PopUp>*/}
            {/*</div>*/}

            {/*<span style={{color: '#729b79',fontSize:"2rem"}}>GRAPHIC DESIGN/ILLUSTRATION</span>*/}

            {/*<div className="wrapper">*/}
            {/*    <div className="container" ref={containerRef}>*/}
            {/*        <div id="game-design">*/}
            {/*            {GraphicDesign.map((item, i) => (*/}
            {/*                <div onClick={()=>{setButtonPopup(true);setWork(item)}} key={i} id={"thumbnail"}>*/}
            {/*                    <div className="thumbnail-wrapper">*/}
            {/*                        <img className={"thumbnail-images"} src={item.thumbnailPhoto} alt=""/>*/}
            {/*                    </div>*/}
            {/*                    <h3>{item.name}</h3>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>*/}
            {/*        <h3 className={"popup-title"}>{work.name}</h3>*/}
            {/*        <div className={"popUp-images-wrapper"}>*/}
            {/*            {work.photos && work.photos.map((item,i)=>(*/}
            {/*                <div className={"popUp-images-container"} key={i}>*/}
            {/*                    <img className={"popup-images"}  src={item} alt=""/>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <div className={"skills-container"}>*/}
            {/*            Skills:*/}
            {/*            {work.skills && work.skills.map((item,i)=>(*/}
            {/*                <h4 className={"skills"} key={i}>*/}
            {/*                    {item}*/}
            {/*                </h4>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <pre className={"popup-description"}>{work.description}</pre>*/}
            {/*    </PopUp>*/}
            {/*</div>*/}
            {/*<span style={{color: '#729b79',fontSize:"2rem"}}>UNPUBLISHED WORK</span>*/}
            {/*<div className="wrapper">*/}
            {/*    /!*<button onClick={()=>{handleScroll(-ITEM_WIDTH)}}>*!/*/}
            {/*    /!*    <i className="fa-solid fa-arrow-left" />*!/*/}
            {/*    /!*</button>*!/*/}
            {/*    <div className="container" ref={containerRef}>*/}
            {/*        <div id="game-design">*/}
            {/*            {UnpublishedWork.map((item, i) => (*/}
            {/*                <Link to={item.link} key={i} id={"thumbnail"}>*/}
            {/*                    <img className={"thumbnail-images"} src={item.photo} alt=""/>*/}
            {/*                    <h3>{item.name}</h3>*/}
            {/*                    <div className={"description"}>{item.description}</div>*/}
            {/*                </Link>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    /!*<button onClick={()=>{handleScroll(ITEM_WIDTH)}}>*!/*/}
            {/*    /!*    <i className="fa-solid fa-arrow-right" />*!/*/}
            {/*    /!*</button>*!/*/}
            {/*</div>*/}


        </div>
    );
}

export default Home;