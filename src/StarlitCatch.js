import starlitCatchSlide_1 from "./Images/Starlit_Catch/starlit-catch-slide_1.png"
import starlitCatchSlide_2 from "./Images/Starlit_Catch/starlit-catch-slide_2.png"
import starlitCatchSlide_3 from "./Images/Starlit_Catch/starlit-catch-slide_3.png"
import starlitCatchSlide_4 from "./Images/Starlit_Catch/starlit-catch-slide_4.png"
import starlitCatchSlide_5 from "./Images/Starlit_Catch/starlit-catch-slide_5.png"
import starlitCatchSlide_6 from "./Images/Starlit_Catch/starlit-catch-slide_6.png"
import starlitCatchSlide_7 from "./Images/Starlit_Catch/starlit-catch-slide_7.png"
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import clipStudioIcon from "./Images/clip-studio-icon.svg";
import ModelShowcase from "./Components/ModelShowcase";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import React from "react";

function StarlitCatch(){
    return(
        <div>
            <ProjectBanner
                image={starlitCatchSlide_1}
                name={"STARLIT CATCH"}
                date={"NOVEMBER 2024"}
                link={"https://tuanabicakci.itch.io/starlit-catch"}
                icons={["devicon-unity-plain",

                    "devicon-blender-original",
                    substancePainterIcon,
                    clipStudioIcon
                   ]}
            />
            <YoutubeEmbed embedId={"wK1vN-3PRHo"}/>
            <ProjectDescription
                description={(
            <>
                Relax in your cottage and enjoy a peaceful fishing adventure. Relax by the water, enjoy the quiet, and take your time—there’s no rush. Just cast your line and enjoy a peaceful fishing experience in the woods.
                <br />
                <br />
                This game was made for GAMERella 2024 jam within the 36 hours given. The theme for this competition was “Hearth”, and we worked in a team of 5. All assets and code were made within the duration of the jam.
            </>
            )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"3D Generalist, Environment Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer, Technical Artist"},
                    {name:"Zaid Minhas",link:"https://github.com/ZaidMinhas",role:"Programmer"},
                    {name:"Elena Osman",link:"https://www.artstation.com/lenravi",role:"2D Artist, UI Designer"},
                    {name:"Sam Dalwood",link:"https://linktr.ee/fauxless",role:"Sound Designer, Composer"},
                ]}
            />
            <ModelShowcase
                images={[starlitCatchSlide_1,
                starlitCatchSlide_2,
                starlitCatchSlide_3,
                starlitCatchSlide_4,
                starlitCatchSlide_5,
                starlitCatchSlide_6,
                starlitCatchSlide_7]}
            />

        </div>
    )
}

export default StarlitCatch;