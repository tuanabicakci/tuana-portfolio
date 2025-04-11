import React from 'react';
import "./Prisma.css"
import YoutubeEmbed from "./Components/YoutubeEmbed";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import process from "./Images/process.png"
import prismaBanner from "./Images/prisma.png"
import red from "./Images/red-bg.png"
import PL from "./Images/LVLPL.png";
import LVL from "./Images/level layout.png"
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import ModelShowcase from "./Components/ModelShowcase";
import ItchEmbed from "./Components/ItchEmbed";
function Prisma(props) {
    return (
        <div>
            <ProjectBanner
                image={prismaBanner}
                name={"PRISMA"}
                date={"NOVEMBER 2023"}
                link={"https://tuanabicakci.itch.io/prisma"}
                icons={["devicon-unrealengine-original",
                    "devicon-blender-original",
                    substancePainterIcon,]}
            />
            <YoutubeEmbed embedId={"NjrTsQlXuV4"}/>
            <ProjectDescription
                description={(
                    <>
                        A 3D platformer game where manipulating the hues of the environment reveals unseen paths and puzzles. Activate all three prism statues to win. This game was made for the Concordia Game Jam 2023, within the 48 hours given. The theme was "Space in Between". All assets and code were made within the duration of the jam (except for the music).
                    </>
                )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"Programmer, Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer, Artist"},
                ]}
            />
            <ModelShowcase
                images={[red,prismaBanner,LVL,PL]}
            />
            <ItchEmbed src={"https://itch.io/embed/2353137"} title={"PRISMA"} />

        </div>
    );
}


export default Prisma;