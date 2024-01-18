import "./Home.css";
import {GameDesign} from "./Components/Work";
import {Link} from "react-router-dom";
import Tuana from "./Images/IMG_0734.JPG";


function Home() {
    return (
        <div id={"home"}>
            <div id={"intro"}>
                <img style={{objectFit:"cover"}} src={Tuana} alt={""}/>
                <div>
                    Hi,my name is <span style={{color: '#74838c'}}>Tuana</span>!
                    <br/>
                    I am a game developer and an artist based in <span style={{color: '#74838c'}}>Montreal</span>.
                    I study Computer Science and Computation Arts at <span style={{color: '#74838c'}}>Concordia University</span>.
                    <br/>
                </div>
            </div>
            <div id={"buttons-wrapper"}>
                <div>Explore all my work!</div>
                <div id="buttons">
                    <Link to={"/art"}>ART</Link>
                    <Link to={"/code"}>CODE</Link>
                    <Link to={"https://www.linkedin.com/in/tuana-bicakci/"}>ABOUT ME</Link>
                </div>
            </div>
            <br/><br/>
            <div>
                <div className="home-container">
                    <span style={{color: '#565a75', fontSize: "3vw"}}>Recent Projects</span>
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
                    </div>
                </div>
            </div>
            <br/><br/>
            <br/><br/>
        </div>
    );
}

export default Home;