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
import substancePainterIcon from "./Images/substance-3d-painter.svg"
import wwiseIcon from "./Images/wwise-icon.png"
import {Carousel} from "react-responsive-carousel";
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import ModelShowcase from "./Components/ModelShowcase"

function DreamTeam(props) {
    return (
        <div>
            <ProjectBanner
            image={DT5}
            name={"DREAM TEAM - UBISOFT GAMELAB"}
            date={"JANUARY 2024 - APRIL 2024"}
            link={"https://github.com/DragonGawain/gamelab"}
            icons={["devicon-unity-plain",
                "devicon-csharp-line",
                "devicon-blender-original",
                "devicon-figma-plain",
                substancePainterIcon,
            wwiseIcon]}
            />
            <ProjectDescription
            description={"Dream Team reporting for duty! Nightmares have once again infiltrated the dream world to try to corrupt it and reach its core. Together, you assume the roles of elite Dream Agents, venturing deep into the sleeper's subconscious to fend off nefarious nightmares. United in purpose, you must synchronize your strategies and unique abilities to maintain the dream’s sanctity. The fate of the dream world depends on it! \n\n"+
            "This is a 3D online coop game where you must work together to defeat enemies and defend territory by combining weapons. It is an action-based fantasy game made for PC, with controller support. This is Concordia-A's submission for the 2024 Ubisoft Game Lab Competition. The conception was based around the theme “Dream” as given by the jury at the start of the competition."}
            teamMembers={[
                {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"Concept Artist, 3D Generalist, Environment Artist,Character Artist"},
                {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Gameplay Programmer, Technical Artist, 3D Artist"},
                {name:"Zaid Minhas",link:"https://github.com/ZaidMinhas",role:"AI Programmer, Network Programmer"},
                {name:"Ally Steinberg",link:"",role:"Game Designer, UI Designer/Programmer,Weapon Programmer"},
                {name:"Craig Kogan",link:"",role:"Game Designer, UI Designer/Programmer, Weapon Programmer"},
                {name:"Sarah Mucci",link:"",role:"UI Programmer, Network Programmer"}
            ]}
            />
            <ModelShowcase
            images={[DT1,DT2]}
            />
        </div>


    );
}

export default DreamTeam;