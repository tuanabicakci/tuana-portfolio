import React from 'react';
import "./Prisma.css"
import YoutubeEmbed from "./Components/YoutubeEmbed";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import process from "./Images/process.png"
import banner from "./Images/prisma.png"
import red from "./Images/red-bg.png"
import PL from "./Images/LVLPL.png";
import LVL from "./Images/level layout.png"
import SW from "./Images/colour-switching.png"
function Prisma(props) {
    return (
        <div className="page" id={"prisma"}>
            <img src={banner} alt=""/>
            <br/>
            <span style={{color: "#6D96D5"}} className={"titles"}>PRISMA</span>
            <b>November 2023</b>
            <br/>
            <div>
                A 3D platformer game where manipulating the hues of the environment reveals unseen paths and puzzles.
                Activate all three prism statues to win. This game was made for the Concordia Game Jam 2023, within the
                48 hours given. The theme was "Space in Between". All assets and code were made within the duration of
                the jam (except for the music).
            </div>
            <br/>
            <div className={"two-pictures"} style={{gap:"2rem"}}>
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
            <br/>
            <YoutubeEmbed embedId={"NjrTsQlXuV4"}/>
            <br/><br/>
            <div className={"two-pictures"}>
                <div>
                    <img style={{
                        width: "100%"
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
            <div className="two-pictures">
                <div>
                    <img style={{
                        width: "100%"
                    }} src={PL} alt=""/>
                </div>
                <div>
                    <img style={{
                        width: "100%"
                    }}  src={LVL} alt=""/>
                </div>
            </div>
            <br/><br/>
            In the end, because of the time constraints we weren’t able to fully realize the potential of the system.
            The puzzles probably felt a bit easy for players. We also received criticism on the jump feeling hard to
            control and character not being fixed on the Z axis, which we certainly anticipated would not have been
            perfectly ironed out after 48 hours.
            <br/><br/>
            <div>
                <b>Technical Aspects</b>
                <br/><br/>
                We used Unreal Engine blueprints to make this game, because blueprinting can yield a prototype very quickly, which is perfect for a game jam.
                <br/><br/><i>Mechanic highlight: Colour Switching</i>
                In the BP_ThirdPersonCharacter:
                <ul>
                    <li> On right mouse button click-></li>
                    <li>Get the first index of the colours array, set it to the temporary variable</li>
                    <li> Pop the first index out of the array and add it to the end of the array, while shifting other values</li>
                    <li> Then update the material of the back wall to be the new first index and the material of the handheld light to be the second index</li>
                    <li> Then trigger updating the widget to switch the colours visually</li>
                </ul>

            </div>
            <br/><br/>
            <img style={{
                width: "100%"
            }} src={SW} alt=""/>
            <br/><br/>
            <div style={{width:"100%"}}>
                <b>Play!</b>
                <br/><br/>
                <iframe frameBorder="0" src="https://itch.io/embed/2353137" width="100%" height="167"><a href="https://tuanabicakci.itch.io/prisma">PRISMA by tuanabicakci, kira</a></iframe>
            </div>
            <br/><br/>
            <div>
                <b>Takeaways</b>
                <br/><br/>
                Overall it was fun to try something new and out of our comfort zones, since my partner and I tend to
                make games that are heavy on narrative and physical mechanics are not a priority. If I were to do this
                game again, I would pay particular attention to the jumping mechanic and making that feel better to play.
            </div>
            <br/><br/>
            <span style={{color: "#6D96D5"}}><b>Thank you for reading!-Kira & Tuana</b></span>
            <br/><br/>
        </div>
    );
}


export default Prisma;