import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import ModelShowcase from "./Components/ModelShowcase";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import React from "react";
import "./HideAndSeek.css";

// Add screenshots to src/Images/Hide_And_Seek/ and import them here:
// import slide1 from "./Images/Hide_And_Seek/hide-and-seek-slide-1.png"
// import slide2 from "./Images/Hide_And_Seek/hide-and-seek-slide-2.png"
import blockout1 from "./Images/Hide_And_Seek/blockout-1.png"
import blockout2 from "./Images/Hide_And_Seek/blockout-2.png"
import modeling1 from "./Images/Hide_And_Seek/modeling-1.png"
import modeling2 from "./Images/Hide_And_Seek/modeling-2.png"
import blueprint1 from "./Images/Hide_And_Seek/blueprint-1.png"
import blueprint2 from "./Images/Hide_And_Seek/blueprint-2.png"
import landscape from "./Images/Hide_And_Seek/landscape-material.png"
import landscapeBP from "./Images/Hide_And_Seek/landscape-bp.png"
import niagara1 from "./Images/Hide_And_Seek/niagara-1.png"
import niagara2 from "./Images/Hide_And_Seek/niagara-2.png"
import phases from "./Images/Hide_And_Seek/phases-sketch.png"
import final1 from "./Images/Hide_And_Seek/final-1.png"
import final2 from "./Images/Hide_And_Seek/final-2.png"
import final3 from "./Images/Hide_And_Seek/final-3.png"
import final4 from "./Images/Hide_And_Seek/final-4.png"
import final5 from "./Images/Hide_And_Seek/final-5.png"
import final6 from "./Images/Hide_And_Seek/final-6.png"
import final7 from "./Images/Hide_And_Seek/final-7.png"
import final8 from "./Images/Hide_And_Seek/final-8.png"
import final9 from "./Images/Hide_And_Seek/final-9.png"
import final10 from "./Images/Hide_And_Seek/final-10.png"
import final11 from "./Images/Hide_And_Seek/final-11.png"
import final12 from "./Images/Hide_And_Seek/final-12.png"
import final13 from "./Images/Hide_And_Seek/final-13.png"
import final14 from "./Images/Hide_And_Seek/final-14.png"
import final15 from "./Images/Hide_And_Seek/final-15.png"
import final16 from "./Images/Hide_And_Seek/final-16.png"
import final17 from "./Images/Hide_And_Seek/final-17.png"
import final18 from "./Images/Hide_And_Seek/final-18.png"
import YoutubeEmbed from "./Components/YoutubeEmbed";

function HideAndSeek() {
    return (
        <div >
          
            <ProjectBanner
                image={final14}
                name={"THAT FOREST WASN'T THERE"}
                date={"DECEMBER 2025"}
                link={""}
                icons={[
                    "devicon-unrealengine-original",
                    "devicon-maya-plain",
                    substancePainterIcon,
                ]}
            />
            <YoutubeEmbed embedId={"ggGohy_m_Ls"}/>
            <ProjectDescription
                description={(
                    <>
                        <em>That Forest Wasn't There</em> is a real-time 3D walking simulator created in Unreal Engine 5
                        that explores how digital systems quietly shape our perception of the world. The experience begins
                        in a stripped-down, abstract forest composed of primitive geometric forms — simple cubes, spheres,
                        and flat planes that loosely suggest trees and terrain. As the player walks deeper into the
                        landscape, the environment gradually "renders" itself: low-poly trees replace the primitives,
                        textures and lighting fade in, and atmospheric effects begin to emerge. What starts as emptiness
                        evolves into something vivid and convincing.
                        <br /><br />
                        This evolution acts as a metaphor for an era in which human experience is structured by invisible
                        digital infrastructures. Algorithms, data systems, and especially artificial intelligence,
                        constantly construct and curate what we see — influencing and reshaping the way we perceive the world.
                        <br /><br />
                        The goal was to "simulate" AI-image generation by stripping down the hidden layers of 3D
                        architecture: the FBX file name, wireframes, UV maps, textures, lighting, and composition.
                        <br /><br />
                    </>
                )}
                teamMembers={[
                    { name: "Tuana Bıçakcı", link: "https://tuanabicakci.dev/", role: "Solo Developer, 3D Environment Artist" }
                ]}
            />
   <ModelShowcase
                images={[
                    final18,
                    final17,
                    final16,
                    final15,
                    final14,
                    final13,
                    final12,
                    final11,
                    final10,
                    final9,
                    final8,
                    final7,
                    final6,
                    final5,
                    final4,
                    final3,
                    final2,
                    final1,
                ]}
            />
                  <div id="has-wrapper">
            {/* EARLY BLOCKOUT */}
            <div className="has-section">
                <div className="has-section-inner">
                    <h2>EARLY BLOCKOUT</h2>
                    <p>
                        Development began by sculpting the landscape loosely based on a hand-drawn map. A simple
                        landscape material was set up alongside a water texture to establish the basic geography of the world.
                    </p>
                    <div className="has-image-grid two-col">
                       <img src={blockout1} alt="Landscape blockout in Unreal Engine" /> 
                      <img src={blockout2} alt="Hand-drawn map sketch with phases" />
                    </div>
                </div>
            </div>

            {/* MODELING AND TEXTURING */}
            <div className="has-section">
                <div className="has-section-inner">
                    <h2>MODELING AND TEXTURING</h2>
                    <p>
                        This project was also an opportunity to learn Maya. Every asset was modeled in Maya, textured in
                        Substance Painter, and imported into Unreal Engine where a blueprint was created for each. For
                        every foliage asset, a corresponding actor foliage was also made. The landscape was then sculpted
                        further and populated with the custom models. Animated grass and flowers were added as well.
                    </p>
                    <div className="has-image-grid two-row">
                     <img src={modeling1} alt="Blueprint asset grid in Unreal Engine" /> 
                     <img src={modeling2} alt="Populated landscape overview" /> 
                    </div>
                </div>
            </div>

            {/* PHASE CHANGE LOGIC */}
            <div className="has-section">
                <div className="has-section-inner">
                    <h2>PHASE CHANGE LOGIC FOR ACTORS</h2>
                    <p>
                        One breakthrough was designing a single collision Blueprint that worked across all phase changes
                        for every actor in the game. This allowed the same nodes to be reused to drive the phase
                        transitions of foliage, the skybox, and sound — keeping the system clean and scalable.
                    </p>
                    <div className="has-image-grid two-row">
                       <img src={blueprint1} alt="Collision blueprint - On Component Begin Overlap" /> 
                        <img src={blueprint2} alt="Full phase change blueprint logic" /> 
                    </div>
                </div>
            </div>

            {/* LANDSCAPE MATERIAL AT RUNTIME */}
            <div className="has-section">
                <div className="has-section-inner">
                    <h2>CHANGING LANDSCAPE MATERIAL AT RUNTIME</h2>
                    <p>
                        Another breakthrough was figuring out how to change the landscape material at runtime — something
                        Unreal Engine 5 does not support natively. The solution was to use a{" "}
                        <strong>Material Parameter Collection</strong>, which allowed the landscape material to be updated
                        dynamically as the player walked through each phase.
                    </p>
                    <p className="has-accent">
                        (This made me rip my hair out as there were no tutorials for it…)
                    </p>
                    <div className="has-image-grid two-row">
                        <img src={landscape} alt="Material Parameter Collection node graph" /> 
                         <img src={landscapeBP} alt="Landscape runtime switch blueprint" /> 
                     
                    </div>
                </div>
            </div>

            {/* FINAL TOUCHES */}
            <div className="has-section">
                <div className="has-section-inner">
                    <h2>ADDING FINAL TOUCHES</h2>
                    <p>
                        Niagara particle systems were used to add life and atmosphere to the scene — including falling
                        leaves, fireflies, fire, and smoke.
                    </p>
                    <ul>
                        <li>Fire and Smoke Niagara System tutorial</li>
                        <li>Falling Leaves Niagara System tutorial</li>
                        <li>Fireflies Niagara System tutorial</li>
                    </ul>
                    <div className="has-image-grid two-row">
                        <img src={niagara1} alt="Fire Niagara system setup" />
                        <img src={niagara2} alt="Hanging particles Niagara system" />
                    </div>
                </div>
            </div>

            {/* FINAL THOUGHTS */}
            <div className="has-section">
                <div className="has-section-inner">
                    <h2>FINAL THOUGHTS</h2>
                    <p>
                        Every aspect of the project proposal was successfully implemented. The assets fit the low-poly
                        painterly style, the color palette matches the game, and the final result captures the vibe of
                        AI-generated forest imagery. All six rendering phases were completed.
                    </p>
                    <p>
                        Technically, there is plenty left to polish. Given more time, the following would be added:
                    </p>
                    <ul>
                        <li>Proper transitions at the start and end of the experience</li>
                        <li>More collision volumes to guide the player along the intended path</li>
                        <li>Richer sound design and additional particle effects</li>
                        <li>Character and world animations</li>
                        <li>Trigger blueprints that destroy themselves once their job is done</li>
                        <li>More complex and layered lighting</li>
                    </ul>
                    <p>
                        In hindsight, outsourcing the assets and focusing on gameplay polish would have produced a more
                        technically refined experience. That said, learning Maya as part of the pipeline was a valuable
                        skill to gain — and every asset and texture in the game was made entirely from scratch.
                    </p>
                    <p>
                        This was my first Unreal Engine project and my first solo dev project. Proud of it regardless.
                    </p>

                    <div className="has-image-grid one-col" style={{ marginTop: "var(--space-m-400)" }}>
                       <img src={phases} alt="Phases of the rendering process sketch" /> 
                    </div>
                </div>
            </div>
            </div>

            {/* FINAL SCREENSHOTS */}
            
            <ModelShowcase
                images={[
                    final1,
                    final2,
                    final3,
                    final4,
                    final5,
                    final6,
                    final7,
                    final8,
                    final9,
                    final10,
                    final11,
                    final12,
                    final13,
                    final14,
                    final15,
                    final16,
                    final17,
                    final18,
                ]}
            />
        </div>
    );
}

export default HideAndSeek;
