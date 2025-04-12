import sleepyHavenSlide_1 from "./Images/Sleepy_Haven/sleepy-haven-slide-1.png"
import sleepyHavenSlide_2 from "./Images/Sleepy_Haven/sleepy-haven-slide-2.png"
import sleepyHavenSlide_3 from "./Images/Sleepy_Haven/sleepy-haven-slide-3.png"
import sleepyHavenSlide_4 from "./Images/Sleepy_Haven/sleepy-haven-slide-4.png"
import sleepyHavenSlide_5 from "./Images/Sleepy_Haven/sleepy-haven-slide-5.png"
import sleepyHavenSlide_6 from "./Images/Sleepy_Haven/sleepy-haven-slide-6.png"
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import clipStudioIcon from "./Images/clip-studio-icon.svg";
import ModelShowcase from "./Components/ModelShowcase";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ItchEmbed from "./Components/ItchEmbed";
import React from "react";
import sleepyHaven from "./SleepyHaven";

function SleepyHaven(){
    return(
        <div>
            <ProjectBanner
                image={sleepyHavenSlide_1}
                name={"SLEEPY HAVEN HOTEL"}
                date={"DECEMBER 2024"}
                link={"https://shinykiwi.itch.io/sleepy-haven-hotel"}
                icons={["devicon-unity-plain",
                    "devicon-blender-original",
                    substancePainterIcon,
                ]}
            />
            <YoutubeEmbed embedId={"atQ5E4fiPbo"}/>
            <ProjectDescription
                description={(
                    <>
                        Welcome to the Sleepy Haven Hotel, a place where folks go for the best getaway you can find in the nation. And by that, I mean literally. Get to know the guests, and by the end of your shift deliver them their new identities. You must be very certain when choosing who gets what new identity, no mistakes will be tolerated here at the Hotel. Deliver coffee, clean up the hotel, eavesdrop, and use your persuasive conversation skills to get to know the guests.
                    </>
                )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"3D Generalist, Environment Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer, Technical Artist"}
                ]}
            />
            <ModelShowcase
                images={[sleepyHavenSlide_1,
                    sleepyHavenSlide_2,
                    sleepyHavenSlide_3,
                    sleepyHavenSlide_4,
                    sleepyHavenSlide_5,
                    sleepyHavenSlide_6,
                    ]}
            />
            <ItchEmbed src={"https://itch.io/embed/3161412?bg_color=1b1b1b&amp;fg_color=faf0c7&amp;link_color=faf0c7&amp;border_color=ae9d9d"} title={"Sleepy Haven Hotel"} />

        </div>
    )
}

export default SleepyHaven;