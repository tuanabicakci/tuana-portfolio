import ProjectBanner from "./Components/ProjectBanner";
import starlitCatchSlide_1 from "./Images/Starlit_Catch/starlit-catch-slide_1.png";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import clipStudioIcon from "./Images/clip-studio-icon.svg";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ProjectDescription from "./Components/ProjectDescription";
import ModelShowcase from "./Components/ModelShowcase";
import starlitCatchSlide_2 from "./Images/Starlit_Catch/starlit-catch-slide_2.png";
import starlitCatchSlide_3 from "./Images/Starlit_Catch/starlit-catch-slide_3.png";
import starlitCatchSlide_4 from "./Images/Starlit_Catch/starlit-catch-slide_4.png";
import starlitCatchSlide_5 from "./Images/Starlit_Catch/starlit-catch-slide_5.png";
import starlitCatchSlide_6 from "./Images/Starlit_Catch/starlit-catch-slide_6.png";
import starlitCatchSlide_7 from "./Images/Starlit_Catch/starlit-catch-slide_7.png";
import ItchEmbed from "./Components/ItchEmbed";
import React from "react";
import "./TFWT.css";

function TFWT() {
    return (
        <div>
            <ProjectBanner
                image={starlitCatchSlide_1}
                name={"STARLIT CATCH"}
                date={"NOVEMBER 2024"}
                link={"https://tuanabicakci.itch.io/starlit-catch"}
                icons={["devicon-unrealengine-plain",
                    "devicon-maya-plain-wordmark",
                    substancePainterIcon,

                ]}
            />
            <YoutubeEmbed embedId={"wK1vN-3PRHo"} />
            <ProjectDescription
                description={(
                    <>
                        That Forest That Wasn’t There is a real-time 3D walking simulator created in Unreal Engine 5 that explores how digital systems quietly shape our perception of the world. The experience begins in a stripped-down, abstract forest composed of primitive geometric forms, simple cubes, spheres, and flat planes that loosely suggest trees and terrain. As the player walks deeper into the landscape, the environment gradually “renders” itself: low-poly trees replace the primitives, textures and lighting fade in, and atmospheric effects begin to emerge. What starts as emptiness evolves into something vivid and convincing.
                        <br />
                        <br />
                        This evolution acts as a metaphor for an era in which human experience is structured by invisible digital infrastructures. Algorithms, data systems, especially now artificial intelligence, constantly construct and curate what we see, and enter our mental collection, influencing and reshaping the way we perceive the world.
                        <br />
                        <br />
                        With that, my goal was to “simulate” AI-image generation by stripping down the hidden layers of 3D architecture; the FBX file name, wireframes, UV maps, textures, lighting and composition.
                    </>
                )}
                teamMembers={[
                    { name: "Tuana Bıçakcı", link: "https://tuanabicakci.dev/", role: "Environment Artist, Blueprint Programmer" },

                ]}
            />
            <div id={"description-wrapper"}>
                <div className={"block"} id={"description-container"}>
                    <div>
                        <h3>
                            EARLY BLOCKOUT
                        </h3>
                        <p>
                            First I began by sculpting the landscape loosely based on the map I sketched out. I made a simple landscape material and made the water texture.
                        </p>
                        <h3>
                            MODELLING & TEXTURING
                        </h3>
                        <p>
                            I also took this opportunity to learn Maya! Then, after texturing them in Substance Painter, I imported them to Unreal Engine and created a blueprint for each. For every foliage, I also made a corresponding actor foliage. Then I sculpted the landscape more and added my models. I also made animated grass and flowers.
                        </p>
                        <h3>
                            FIGURING OUT THE PHASE CHANGE LOGIC FOR ACTOR
                        </h3>
                        <p>
                            One breakthrough was designing a single collision Blueprint that worked across all phase changes across every actor in the game. With this, I was able to reuse the same nodes to change the phases of foliage, the skybox, and sound transitions.
                        </p>
                        <h3>
                            CHANGE LANDSCAPE MATERIAL AT RUNTIME
                        </h3>
                        <p>
                            Another breakthrough was figuring out how to change the landscape at runtime, since Unreal Engine 5 doesn't allow it. I was able to do this by using a Material Parameter collection.
                        </p>

                    </div>
                </div>
            </div>
            <ModelShowcase
                images={[starlitCatchSlide_1,
                    starlitCatchSlide_2,
                    starlitCatchSlide_3,
                    starlitCatchSlide_4,
                    starlitCatchSlide_5,
                    starlitCatchSlide_6,
                    starlitCatchSlide_7]}
            />
            <ItchEmbed src={"https://itch.io/embed/3132157?bg_color=0048ba&fg_color=f7ecc5&link_color=ffb32a&border_color=373163"} title={"Starlit Catch"} />

        </div>
    )
}

export default TFWT;