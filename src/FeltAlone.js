import React from 'react';
import MD from "./Images/md.png";
import {Carousel} from "react-responsive-carousel";
import MD2 from "./Images/MD2.png";
import MD3 from "./Images/MD3.png";
import MD4 from "./Images/MD4.png";
import MD5 from "./Images/MDSCript.png";
import MD6 from "./Images/MD6.png";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import feltAlone from "./Images/feltalone.png"
import FA1 from "./Images/FA1.png"
import FA2 from "./Images/FA2.png"
import FA3 from "./Images/FA3.png"
import FA4 from "./Images/FA4.png"

function FeltAlone(props) {
    return (
        <div className="page" id={"prisma"}>
            <img src={feltAlone} alt=""/>
            <br/>
            <span style={{color:"#7B6BAA"}} className={"titles"}>FELT ALONE, SO I WENT FOR A WALK</span>
            <b>September 2022</b>
            <br/>
            <div>
                Felt alone, so I went for a walk is a game about feeling better and reminiscing. Take a walk through the
                forest, discover your past and keep your flame close!  Take the time to explore and ponder what there
                once was and was not in this narrative (short & unfinished) game.
            </div>
            <br/>
            <div className={"two-pictures"}>
                <div>
                    <b style={{color: "#7B6BAA "}}>Credits</b>
                    <ul>
                        <li><a style={{color: "#24C8DC"}} href={"https://shinykiwi.dev/"}><b>Kira
                            Fountain:</b></a>Artist
                        </li>
                        <li><b>Tuana Bicakci:</b>Artist</li>
                        <li><a style={{color: "#24C8DC"}} href={"https://www.linkedin.com/in/elijah-mon/"}><b>Elijah Mon:</b></a>Programmer</li>
                        <li><a style={{color: "#24C8DC"}} href={"https://www.linkedin.com/in/benjamin-nera-308240232/"}><b>Benjamin Nera:</b></a>Game Designer</li>
                        <li><a style={{color: "#24C8DC"}} href={"https://percynguyen7.github.io/portfolio/"}><b>Percy Nguyen:</b></a>Game Designer</li>
                    </ul>
                </div>
                <div>
                    <b style={{color: "#93333E "}}>Tools</b>
                    <ul>
                        <li>Unity</li>
                        <li>Procreate</li>
                    </ul>
                </div>

            </div>
            <Carousel className={"carousel"}>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={FA1}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={FA2}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={FA4}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={FA3}/>
                </div>

            </Carousel>
            <b>Play!</b>
            <br/>
            <iframe frameBorder="0" src="https://itch.io/embed/1748918" width="100%" height="167"><a href="https://shinykiwi.itch.io/felt-alone-so-i-went-for-a-walk">Felt alone, so I went for a walk by kira, PipeFlowWizard, tuanabicakci</a></iframe>
        </div>
    );
}

export default FeltAlone;