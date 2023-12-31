import React from 'react';
import MD from "./Images/md.png"
import banner from "./Images/freddyscafe.png";
import MD2 from "./Images/MD2.png"
import MD3 from "./Images/MD3.png"
import MD4 from "./Images/MD4.png"
import MD5 from "./Images/MDSCript.png"
import MD6 from "./Images/MD6.png"

import {Carousel} from "react-responsive-carousel";
import YoutubeEmbed from "./Components/YoutubeEmbed";
function MiracleDaycare(props) {
    return (
        <div className="page" id={"prisma"}>
            <img src={MD} alt=""/>
            <br/>
            <span style={{color:"#93333E"}} className={"titles"}>MIRACLE DAYCARE</span>
            <b>July 2023-Present</b>
            <br/>
            <b>CURRENTLY IN DEVELOPMENT</b>
            <div>
                A first person horror where you play as a thrift store employee, sorting through the donations of a
                closed down daycare. The design of this game focuses on narrative and environmental storytelling,
                and was a way for my dev partner and I to learn Unreal Engine 5. The game was programmed using blueprints.
                The game is still in development!
            </div>
            <div className={"credits"}>
                <div>
                    <b style={{color: "#93333E "}}>Credits</b>
                    <ul>
                        <li><a style={{color: "#24C8DC"}} href={"https://shinykiwi.dev/"}><b>Kira
                            Fountain:</b></a> Programmer, Level Designer, Artist
                        </li>
                        <li><b>Tuana Bicakci:</b> Level Designer, Programmer, Artist,</li>
                    </ul>
                </div>
                <div>
                    <b style={{color: "#93333E "}}>Tools</b>
                    <ul>
                        <li>Unreal Engine 5</li>
                        <li>Quixel</li>
                        <li>Blender</li>
                        <li>Substance Painter</li>
                    </ul>
                </div>

            </div>
            <Carousel className={"carousel"}>
            <div className={"popUp-images-container"} >
                <img className={"popup-images"} src={MD2}/>
            </div>
            <div className={"popUp-images-container"} >
                <img className={"popup-images"} src={MD}/>
            </div>
            <div className={"popUp-images-container"} >
                <img className={"popup-images"} src={MD3}/>
            </div>
            <div className={"popUp-images-container"} >
                <img className={"popup-images"} src={MD4}/>
            </div>
            <div className={"popUp-images-container"} >
                <img className={"popup-images"} src={MD5}/>
            </div>
            <div className={"popUp-images-container"} >
                <img className={"popup-images"} src={MD6}/>
            </div>

        </Carousel>
            <YoutubeEmbed embedId={"CYmCwuU_Q0c"}/>
        </div>
    );
}

export default MiracleDaycare;