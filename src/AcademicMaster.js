import academicweapon_1 from "./Images/AcademicMaster/academicmaster_1.png"
import academicweapon_2 from "./Images/AcademicMaster/academicmaster_2.png"
import academicweapon_3 from "./Images/AcademicMaster/academicmaster_3.png"
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import clipStudioIcon from "./Images/clip-studio-icon.svg";
import ModelShowcase from "./Components/ModelShowcase";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ItchEmbed from "./Components/ItchEmbed";
import React from "react";

function StarlitCatch(){
    return(
        <div>
            <ProjectBanner
                image={academicweapon_2}
                name={"ACADEMIC MASTER(WINNER OF 'BEST THEME')"}
                date={"MAY 2025"}
                link={"hhttps://shinykiwi.itch.io/academic-master"}
                icons={["devicon-unity-plain",
                    "devicon-blender-original",
                    substancePainterIcon,
                ]}
            />
            <YoutubeEmbed embedId={"aKjj56al998"}/>
            <ProjectDescription
                description={(
                    <>
                        You are a science teacher teaching your first class. Interact with students while class in is session to get Focus Points. Buy upgrades for your classroom to increase engagement and comprehension. Beware of the options that might increase burnout and have other negative effects. Use your best judgement and learn from your students!<br />
                        <br />
                        This game was made for Universite de Montreal Scientific Game 2025 jam within the 24 hours given. The theme for this competition was “Behaviorism and constructivism”, and we worked in a team of 4. All assets and code were made within the duration of the jam.
                    </>
                )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"3D Generalist, Environment Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer, Technical Artist"},
                    {name:"Zaid Minhas",link:"https://github.com/ZaidMinhas",role:"Programmer"},
                    {name:"Nicolas Boyer",link:"https://nicolasboyer.itch.io/",role:"Audio Designer, Programmer"},
                ]}
            />
            <ModelShowcase
                images={[academicweapon_1,
                    academicweapon_2,
                    academicweapon_3]}
            />
            <ItchEmbed src={"https://itch.io/embed/3530694?bg_color=fcf7ed&amp;fg_color=222222&amp;link_color=239115&amp;border_color=663636"} title={"Starlit Catch"} />

        </div>
    )
}

export default StarlitCatch;