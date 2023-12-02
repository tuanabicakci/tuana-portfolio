import Tuana from "./Images/tuanasketch.png";
import "./Home.css";
import {GameDesign, GraphicDesign, UnpublishedWork, WebDesign} from "./Components/Work";
import {Link} from "react-router-dom";
import {useRef, useState,useEffect} from "react";
import PopUp from "./Components/PopUp";

const ITEM_WIDTH=200;
function Home() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();
    const handleScroll=(scrollAmount)=>{
        const newScrollPosition=scrollPosition+scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft=newScrollPosition;
    };

    const [buttonPopup,setButtonPopup]=useState(false)
    const [work, setWork]=useState(0);

    return (
        <div id={"home"}>
            <div id={"main-screen"}>
                <img id={"tuana-sketch"} src={Tuana} alt={"a skecth of Tuana"}/>
                <div>game dev & multimedia artist based in Montreal</div>
            </div>
            <div id={"intro"}>Hi,my name is <span style={{color: '#729b79'}}>Tuana</span>!
                <br/>
                I am a Computer Science and Computation Arts student who flew overseas from Turkey to Montreal to chase
                her dreams of becoming a game developer.
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
                <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3 className={"popup-title"}>{work.name}</h3>
                    <div className={"popUp-images-wrapper"}>
                        {work.photos && work.photos.map((item,i)=>(
                            <div className={"popUp-images-container"} key={i}>
                                <img className={"popup-images"}  src={item} alt=""/>
                            </div>
                        ))}
                    </div>
                    <div className={"skills-container"}>
                        Skills:
                        {work.skills && work.skills.map((item,i)=>(
                            <h4 className={"skills"} key={i}>
                                {item}
                            </h4>
                        ))}
                    </div>
                    <pre className={"popup-description"}>{work.description}</pre>
                </PopUp>
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
            <div id={"intro"}>
               Lets get in touch!
            </div>





        </div>
    );
}

export default Home;