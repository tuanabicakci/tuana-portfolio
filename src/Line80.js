import line80_1 from "./Images/line80/1.png"
import line80_2 from "./Images/line80/2.png"
import line80_3 from "./Images/line80/3.png"
import line80_4 from "./Images/line80/4.png"
import line80_5 from "./Images/line80/5.png"
import line80_6 from "./Images/line80/6.png"
import line80_7 from "./Images/line80/7.png"
import line80_8 from "./Images/line80/8.png"
import line80_9 from "./Images/line80/9.png"
import line80_10 from "./Images/line80/10.png"
import line80_11 from "./Images/line80/11.png"
import line80_12 from "./Images/line80/12.png"
import line80_13 from "./Images/line80/13.png"
import line80_14 from "./Images/line80/14.png"
import line80_15 from "./Images/line80/15.png"
import line80_16 from "./Images/line80/16.png"
import line80_17 from "./Images/line80/17.png"
import ProjectDescription from "./Components/ProjectDescription";
import ProjectBanner from "./Components/ProjectBanner";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import clipStudioIcon from "./Images/clip-studio-icon.svg";
import ModelShowcase from "./Components/ModelShowcase";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ItchEmbed from "./Components/ItchEmbed";
import React from "react";

function StarlitCatch() {
    return (
        <div>
            <ProjectBanner
                image={line80_9}
                name={"LINE 80"}
                date={"OCTOBER 2025-PRESENT"}
                link={"https://shinykiwi.itch.io/line-80"}
                icons={["devicon-unity-plain",
                    "devicon-blender-original",
                    substancePainterIcon,
                ]}
            />
            <YoutubeEmbed embedId={"kuLIOm7m4LI"} />
            <ProjectDescription
                description={(
                    <>
                        Line 80  is a 3D first-person narrative game about office life and ordinary people. You play as an IT support technician, on-call for the evening shift to help the businesses of the  Technoparc with all their technology needs. Rumour has it that the biggest company in the park is going  bankrupt. Do everything you can to save your job and the jobs of your fellow workers, you’ve all got families to feed. The  bus is your best friend, use it to get around the park late at night as you explore what lies in the Technoparc.
                    </>
                )}
                teamMembers={[
                    { name: "Tuana Bıçakcı", link: "https://tuanabicakci.dev/", role: "Environment Artist" },
                    { name: "Kira Fountain", link: "https://shinykiwi.dev/", role: "Programmer" },
                    { name: "Laura Slabbert", link: "https://druidim.itch.io/", role: "Writer, Narrative Designer" }
                ]}
            />
            <ModelShowcase
                images={[line80_1,
                    line80_2,
                    line80_3,
                    line80_4,
                    line80_5,
                    line80_6,
                    line80_7,
                    line80_8,
                    line80_9,
                    line80_10,
                    line80_11,
                    line80_12,
                    line80_13,
                    line80_14,
                    line80_15,
                    line80_16,
                    line80_17,
                ]}
            />
            <ItchEmbed src={"https://itch.io/embed/3868361"} title={"Line 80"} />

        </div>
    )
}

export default StarlitCatch;
