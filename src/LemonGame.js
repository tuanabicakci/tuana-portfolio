import lemonGameSlide_1 from "./Images/The_Lemon_Game/lemon-game-slide-1.png"
import lemonGameSlide_2 from "./Images/The_Lemon_Game/lemon-game-slide-2.png"
import lemonGameSlide_3 from "./Images/The_Lemon_Game/lemon-game-slide-3.png"
import lemonGameSlide_4 from "./Images/The_Lemon_Game/lemon-game-slide-4.png"
import lemonGameSlide_5 from "./Images/The_Lemon_Game/lemon-game-slide-5.png"
import lemonGameSlide_6 from "./Images/The_Lemon_Game/lemon-game-slide-6.png"
import lemonGameSlide_7 from "./Images/The_Lemon_Game/lemon-game-slide-7.png"
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import clipStudioIcon from "./Images/clip-studio-icon.svg";
import ModelShowcase from "./Components/ModelShowcase";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ItchEmbed from "./Components/ItchEmbed";
import React from "react";

function LemonGame(){
    return(
        <div>
            <ProjectBanner
                image={lemonGameSlide_1}
                name={"LEMON GAME"}
                date={"MARCH 205"}
                link={"https://shinykiwi.itch.io/the-lemon-game"}
                icons={["devicon-unity-plain",
                    "devicon-blender-original",
                    substancePainterIcon,
                ]}
            />
            <YoutubeEmbed embedId={"TZAh0EC4t_w"}/>
            <ProjectDescription
                description={(
                    <>
                        “When life gives you lemons, make lemonade” is a proverbial phrase used to encourage positivity upon encountering negative situations, as eating a lemon raw can be unpleasant with its sour taste, whereas drinking lemonade can be a more delightful experience. For our game, we took this phrase quite literally. What if a mysterious crate of lemons showed up at your door? What would you do?
                        <br/>
                        <br/>
                        This game was started during a class teaching "Situational Game Design", in the 4 weeks given. However, we want to continue this game as there is so much more we could add, so consider this a demo of what could be! I worked as a programmer along with my amazing artist Tuana. All assets and code were made by us with the exception of most of the sound effects. This game is actively being updated on our itch.io.
                    </>
                )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"3D Generalist, Environment Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer, Technical Artist"},
                    {name:"Sam Dalwood",link:"https://linktr.ee/fauxless",role:"Composer"},
                ]}
            />
            <ModelShowcase
                images={[lemonGameSlide_1,
                    lemonGameSlide_2,
                    lemonGameSlide_3,
                    lemonGameSlide_4,
                    lemonGameSlide_5,
                    lemonGameSlide_6,
                    lemonGameSlide_7]}
            />
            <ItchEmbed src={"https://itch.io/embed/3334751?bg_color=fdf5ec&amp;fg_color=3e0808&amp;link_color=fa5c5c&amp;border_color=d0bc65"} title={"Starlit Catch"} />

        </div>
    )
}

export default LemonGame;