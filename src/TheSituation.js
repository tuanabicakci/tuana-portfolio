import thesituationSlide_1 from "./Images/The_Situation/the-situation-slide-1.png"
import thesituationSlide_2 from "./Images/The_Situation/the-situation-slide-2.png"
import thesituationSlide_3 from "./Images/The_Situation/the-situation-slide-3.png"
import thesituationSlide_4 from "./Images/The_Situation/the-situation-slide-4.png"
import thesituationSlide_5 from "./Images/The_Situation/the-situation-slide-5.png"
import thesituationSlide_6 from "./Images/The_Situation/the-situation-slide-6.png"
import thesituationSlide_7 from "./Images/The_Situation/the-situation-slide-7.png"
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import clipStudioIcon from "./Images/clip-studio-icon.svg";
import ModelShowcase from "./Components/ModelShowcase";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ItchEmbed from "./Components/ItchEmbed";
import React from "react";

function TheSituation(){
    return(
        <div>
            <ProjectBanner
                image={thesituationSlide_2 }
                name={"THE SITUATION"}
                date={"APRIL 2025"}
                link={"https://shinykiwi.itch.io/the-situation"}
                icons={["devicon-unity-plain",
                    "devicon-blender-original",
                    substancePainterIcon,
                ]}
            />
            <YoutubeEmbed embedId={"JfHMwA89m-s"}/>
            <ProjectDescription
                description={(
                    <>
                        You are a student at Konkordia University taking the CARD 415: Game Studio class, and for your game design assignment, you need to create a unique game situation. Look around the classroom to find a good situation.
                        <br />
                        <br />
                        This game was created during the game development course CART 415 at Concordia University. Throughout the course, we referred to a book called Situational Game Design by Brian Upton. This game is based on that book, which outlines the 6 heuristics of situational game design. So shoutout to Brian Upton for his concepts that guided us in the making of this game (both in literal content of the game and in game design).
                    </>
                )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"3D Generalist, Environment Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer, Technical Artist"},
                ]}
            />
            <ModelShowcase
                images={[thesituationSlide_1,
                    thesituationSlide_2,
                    thesituationSlide_3,
                    thesituationSlide_4,
                    thesituationSlide_5,
                    thesituationSlide_6,
                    thesituationSlide_7]}
            />
            <ItchEmbed src={"https://itch.io/embed/3459849?bg_color=F4F2EC&amp;fg_color=222222&amp;link_color=587eb8&amp;border_color=404a50"} title={"The Situation"} />

        </div>
    )
}

export default TheSituation;