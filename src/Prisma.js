import React from 'react';
import "./Prisma.css"
import YoutubeEmbed from "./Components/YoutubeEmbed";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Prisma(props) {
    return (
        <div className="page" id={"prisma"}>
            <span className={"title"}>PRISMA</span>
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
                    <b style={{color:"#729b79"}}>Credits</b>
                    <ul>
                        <li><a style={{color:"#24C8DC"}} href={"https://shinykiwi.dev/"}><b>Kira Fountain:</b></a> Programmer, Level Designer, Artist</li>
                        <li><b>Tuana Bicakci:</b>Programmer, Level Designer, Artist </li>
                    </ul>
                </div>
                <div>
                    <b style={{color:"#729b79"}}>Tools</b>
                    <ul>
                        <li>Unreal Engine 5</li>
                        <li>Blender</li>
                        <li>Substance Painter</li>
                    </ul>
                </div>
            </div>
            <YoutubeEmbed embedId={"NjrTsQlXuV4"}/>
            <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

        </div>
    );
}


export default Prisma;