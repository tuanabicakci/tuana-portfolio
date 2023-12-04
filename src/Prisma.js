import React from 'react';
import "./Prisma.css"
import YoutubeEmbed from "./Components/YoutubeEmbed";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import process from "./Images/process.png"
import banner from "./Images/prisma.png"
import red from "./Images/red-bg.png"

function Prisma(props) {
    return (
        <div className="page" id={"prisma"}>
            <img src={banner} alt=""/>
            <br/>
            <span style={{color: "#6D96D5"}} className={"title"}>PRISMA</span>
            <b>November 2023</b>
            <br/>
            <div>
                A 3D platformer game where manipulating the hues of the environment reveals unseen paths and puzzles.
                Activate all three prism statues to win. This game was made for the Concordia Game Jam 2023, within the
                48 hours given. The theme was "Space in Between". All assets and code were made within the duration of
                the jam (except for the music).
            </div>

            <div className={"credits"}>
                <div>
                    <b style={{color: "#6D96D5"}}>Credits</b>
                    <ul>
                        <li><a style={{color: "#24C8DC"}} href={"https://shinykiwi.dev/"}><b>Kira
                            Fountain:</b></a> Programmer, Level Designer, Artist
                        </li>
                        <li><b>Tuana Bicakci:</b>Programmer, Level Designer, Artist</li>
                    </ul>
                </div>
                <div>
                    <b style={{color: "#6D96D5"}}>Tools</b>
                    <ul>
                        <li>Unreal Engine 5</li>
                        <li>Blender</li>
                        <li>Substance Painter</li>
                    </ul>
                </div>
            </div>
            <YoutubeEmbed embedId={"NjrTsQlXuV4"}/>
            <br/><br/>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "28vw",
                        margin: "2rem"
                    }} src={process} alt=""/>
                </div>
                <div>
                    <b>Development Process</b>
                    <br/><br/>
                    We started off by listing what kind of game we wanted to try making next, and since we were already
                    working
                    on another project in first person, we wanted to try out third person. We decided on some criteria:
                    <br/>
                    <ul style={{
                        margin: "2rem"
                    }}>
                        <li>3D Third person</li>
                        <li>Platformer</li>
                        <li>One Level</li>
                        <li>No story</li>
                    </ul>
                </div>
            </div>
            This helped us stay focused, and we started brainstorming ideas. We quickly chose our main mechanic, being
            the ability to change the world colours and a handheld flashlight’s colours. We only had 48 hours to make
            the game so we skipped inventing any kind of story and dived straight into development.
            <br/><br/>
            The goal of the game is simple: collect all three trophies in order to beat the level.
            <br/><br/>
            <div>
                <b>Design Choices</b>
                <br/><br/>
                We wanted to keep the graphics and user interface simple and easy to understand. We went as minimalist
                as
                possible with the colour change wheel and also the platforms and environment. The focus was meant to be
                on
                the puzzles, so we believed by keeping this part simple we could put more time into the mechanics
                instead of how the game looks.
                <br/><br/>
                <img style={{
                    width: "100%"
                }} src={red} alt=""/>
            </div>
            <br/>
            <div>
                <b>Player Experience</b>
                <br/><br/>
                The intended experience was to ideally create a challenge involving the careful use of your ability in
                the game. We wanted the player to have to strategize when they would switch colours and to anticipate
                what might happen next. Since it was a platformer, we also wanted the running and jumping to feel smooth
                and it to not be a hindrance to figuring out the puzzles. The player should not feel like they were
                cheated because of the physical mechanics, and should instead feel challenged by the complexity of the
                puzzles.
                <br/><br/>
                In the end, because of the time constraints we weren’t able to fully realize the potential of the
                system.
                The puzzles probably felt a bit easy for players. We also received criticism on the jump feeling hard to
                control and character not being fixed on the Z axis, which we certainly anticipated would not have been
                perfectly ironed out after 48 hours.

            </div>
            
        </div>
    );
}


export default Prisma;