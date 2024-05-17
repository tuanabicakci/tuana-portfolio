import React from 'react';
import banner from "./Images/freddyscafe.png";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import sketch from "./Images/initial sketches.png";
import iterations from "./Images/iterations.png";
import cpalette from "./Images/cpalette.png";
import initialModel from "./Images/image8.png";
import mixamo from "./Images/image75.png";
import dogca from "./Images/image77.png";
import catca from "./Images/image84.png";
import dogf from "./Images/image2.png";
import dogb from "./Images/image60.png";
import catb from "./Images/image24.png";
import catf from "./Images/image52.png";
import dtbanner from "./Images/dtbanner.png"
import blaster from "./Images/image35.png"
import blasterca from "./Images/image43.png"
import hammer from "./Images/image53.png"
import hammerca from "./Images/image31.png"
import flamethrowerca from "./Images/image76.png"
import flamethrower from "./Images/image61.png"
import grenade from "./Images/image55.png"
import grenadeca from "./Images/image28.png"
import DT1 from "./Images/DT1.png";
import DT2 from "./Images/DT2.png";
import DT3 from "./Images/DT3.png";
import DT4 from "./Images/DT4.png";
import DT5 from "./Images/DT5.png";
import DT6 from "./Images/DT6.png";
import DT7 from "./Images/DT7.png";
import DT8 from "./Images/DT8.png";
import DT9 from "./Images/DT9.png";
import {Carousel} from "react-responsive-carousel";

function DreamTeam(props) {
    return (
        <div className="page" id={"prisma"}>
            <img src={dtbanner} alt=""/>
            <br/>
            <span style={{color: "#FDFFB4  "}} className={"titles"}>DREAM TEAM(UBISOFT GAMELAB 2024)</span>
            <b>JANUARY 2024 - APRIL 2024</b>
            <br/>
            <br/>
            <div>
                Dream Team reporting for duty! Nightmares have once again infiltrated the dream world to try to corrupt
                it and reach its core. Together, you assume the roles of elite Dream Agents, venturing deep into the
                sleeper's subconscious to fend off nefarious nightmares. United in purpose, you must synchronize your
                strategies and unique abilities to maintain the dream’s sanctity. The fate of the dream world depends on it!
            </div>
            <br/>
            <div className={"two-pictures"}>
                <div>
                    <b style={{color: "#FDFFB4 "}}>Credits</b>
                    <ul>
                        <li><b>Tuana Bicakci:</b> Concept Artist, 3D Generalist, Environment Artist, <br/>Character Artist</li>
                        <li><a style={{color: "#24C8DC"}} href={"https://shinykiwi.dev/"}><b>Kira
                            Fountain:</b></a> Gameplay Programmer, Technical Artist, 3D Artist
                        </li>
                        <li><a style={{color: "#24C8DC"}} href={""}><b>Ally Steinberg:</b></a> Game Designer, UI Designer/Programmer,
                            <br/>Weapon Programmer
                        </li>
                        <li><a style={{color: "#24C8DC"}} href={"https://github.com/ZaidMinhas"}><b>Zaid Minhas:</b></a> AI Programmer, Network Programmer
                        </li>
                        <li><a style={{color: "#24C8DC"}} href={""}><b>Craig Kogan:</b></a> Game Designer, UI Designer/Programmer,
                            <br/>Weapon Programmer
                        </li>
                        <li><a style={{color: "#24C8DC"}} href={""}><b>Sarah Mucci:</b></a> UI Programmer, Network Programmer
                        </li>
                        <li><a style={{color: "#24C8DC"}} href={""}><b>Jake Meleras:</b></a> Sound Designer, Composer
                        </li>

                    </ul>
                </div>
                <div>
                    <b style={{color: "#FDFFB4 "}}>Tools</b>
                    <ul>
                        <li>Unity/C#</li>
                        <li>Blender</li>
                        <li>Substance Painter</li>
                        <li>Wwise</li>
                        <li>Procreate</li>
                        <li>Mixamo</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
            <br/>
            <YoutubeEmbed embedId={"vb92z58KZeE"}/>
            <br/>
            <br/>
            <br/>
            <div className={"two-pictures"}>
                <div>
                    <b>Character Design</b>
                    <br/>
                    Upon establishing our inspirations for the game, I began working on designing the characters and deciding
                    the color palette. Our characters were dream agents controlling dark and light energy.
                    The first idea that came to my mind was a cat for the dark energy player and a girl for the
                    light energy player.
                    <br/>
                    However, our faculty mentor Popa advised us not to use a child character as it can seem uncanny.
                    Therefore, I scrapped the child character and continued working on the cat. I wanted to have a
                    spooky but bright and fun color palette. Consequently, I settled on dark purples for the primary
                    colors while using bright pink, green, and yellow for accent colors upon many iterations.

                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={sketch} alt=""/>
                    <div style={{textAlign: "center", fontSize: "1rem"}}>Initial Sketch</div>
                </div>
            </div>
            <img style={{
                width: "100%",
                margin: "1rem"
            }} src={iterations} alt=""/>
            <img style={{
                width: "100%",
                margin: "1rem"
            }} src={cpalette} alt=""/>
            <div style={{textAlign: "center", fontSize: "1rem"}}>Color Palette</div>
            <br/><br/>
            For the second player, I decided to make it a dog to play into the black cat and golden retriever dynamic.
            However, before that, I decided to model the cat player since I would change the head if the other player
            were to be a dog. After I modeled it, I tried to animate it using Mixamo, although there were a lot of issues with the model.
           <br/><br/>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={initialModel} alt=""/>
                    <div style={{textAlign: "center", fontSize: "1rem"}}>Initial Model</div>
                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={mixamo} alt=""/>
                    <div style={{textAlign: "center", fontSize: "1rem"}}>Model with Mixamo animations</div>
                </div>
            </div>
            <br/><br/>
            Even though the model was simple due to lousy modeling on my part and Mixamo’s automated rigging system the animations looked highly janky. We had two options: Redesign to make a simpler model or rig and animate manually. Due to time constraints we decided the former would be best. Consequently, I redesigned the character and designed the dog character as well.
           <br/><br/>
            <img style={{
                width: "100%",
                margin: "1rem"
            }} src={dogca} alt=""/>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={dogf} alt=""/>

                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={dogb} alt=""/>
                </div>
            </div><img style={{
            width: "100%",
            margin: "1rem"
        }} src={catca} alt=""/>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={catf} alt=""/>

                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={catb} alt=""/>
                </div>
            </div>
            <br/><br/>
            Because I had to simplify the characters regarding detail in 3D I had to make up for it with their details in 2D. Thus, I ensured they had unique suits with cool designs and patterns on their front and back.
            <br/><br/>
            <b>Weapon Design</b>
            For the weapon designs, because the game is supposed to be E10+, I tried to keep them toy-like. My main inspirations were water guns and Nerf guns. The color palettes and symbols on the weapons match their corresponding characters. Our other 3D Artist Kira Fountain modelled the weapons and I textured them.
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={blasterca} alt=""/>

                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={blaster} alt=""/>
                </div>
            </div>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={flamethrowerca} alt=""/>

                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={flamethrower} alt=""/>
                </div>
            </div>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={hammerca} alt=""/>

                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={hammer} alt=""/>
                </div>
            </div>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={grenadeca} alt=""/>

                </div>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "1rem"
                    }} src={grenade} alt=""/>
                </div>
            </div>
            <br/><br/>
            <b>Environment Design</b>
            For the environment I envisioned an abandoned yet mystical dwelling surrounded by lush vegetation and natural elements, adorned with vintage furniture.
            <Carousel className={"carousel"}>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT1}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT2}/>

                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT3}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT4}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT5}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT6}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT7}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT8}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={DT9}/>
                </div>
            </Carousel>
        </div>


    );
}

export default DreamTeam;