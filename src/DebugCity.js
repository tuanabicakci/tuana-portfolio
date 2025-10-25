import substancePainterIcon from "./Images/substance-3d-painter.svg";
import ProjectBanner from "./Components/ProjectBanner";
import debugcity_1 from "./Images/DebugCity/debugcity_1.png"
import debugcity_2 from "./Images/DebugCity/debugcity_2.png"
import debugcity_3 from "./Images/DebugCity/debugcity_3.png"
import debugcity_4 from "./Images/DebugCity/debugcity_4.png"
import ProjectDescription from "./Components/ProjectDescription";
import ModelShowcase from "./Components/ModelShowcase";
import ItchEmbed from "./Components/ItchEmbed";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import React from "react";

function AcademicWeapon(){
    return(
        <div>
            <ProjectBanner
                image={debugcity_2}
                name={"DEBUG CITY - UBISOFT GAMELAB 2025 (BEST USER EXPERIENCE WINNER)"}
                date={"JANUARY 2025 - APRIL 2025"}
                link={"https://shinykiwi.itch.io/debug-city"}
                icons={["devicon-unity-plain",
                    "devicon-csharp-line",
                    "devicon-blender-original",
                    substancePainterIcon,]}
            />
            <YoutubeEmbed embedId={"msgRusxg9Wk"}/>
            <ProjectDescription
                description={(
                    <>
                        Debug City is a cooperative puzzle game created for the Ubisoft Game Lab Competition 2025, following the theme of chain reaction.                        <br />
                        <br />
                        Dive into the digital world of Debug City, where Chip and Jupi, two inseparable friends, get sucked into a computer overrun by malicious viruses. To escape this electronic nightmare, they’ll need to work together to restore order and defeat the corrupted foes.
                        <br/>
                        Use your portals strategically to redirect enemy projectiles and turn them against the viruses. Every well-planned move can trigger a spectacular chain reaction that brings you one step closer to victory.
                    </>
                )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"3D Environment Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer"},
                    {name:"Rachel Roach Robertson",link:"https://www.artstation.com/arkival",role:"2D Artist"},
                    {name:"Darrhyl Rousseau",link:"https://www.artstation.com/darrhylrousseau",role:"3D CharacterArtist"},
                    {name:"Léo Beaubien-Lemieux",link:"https://maitrepatate.itch.io/",role:"Designer"},
                    {name:"Francis Beaudy",link:"https://rubberquak.itch.io/",role:"Designer"},
                    {name:"Félix Lamarche",link:"https://itch.io/profile/flx777",role:"Programmer"},
                    {name:"Samuel Laporte",link:"https://solfrak.itch.io/",role:"Programmer"},
                    {name:"Arkil",link:"https://www.artstation.com/darrhylrousseau",role:"Sound Designer"}

                ]}
            />
            <ModelShowcase
                images={[debugcity_1,
                    debugcity_2,
                    debugcity_3,
                    debugcity_4]}
            />
            <ItchEmbed src={"https://itch.io/embed/3332042?bg_color=ffe762&amp;fg_color=222222&amp;link_color=63289e&amp;border_color=0091b8"} title={"Debug City"} />
        </div>
    )
}

export default AcademicWeapon;