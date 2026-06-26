import React from "react";
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ModelShowcase from "./Components/ModelShowcase";
import "./ItHasMyFace.css";

// ── Add your screenshots to src/Images/It_Has_My_Face/ and import them here ──
// import banner        from "./Images/It_Has_My_Face/banner.png"
import moodboard from "./Images/ItHasMyFace/moodboard.png"
import canopy from "./Images/ItHasMyFace/canopy.png"
import metalBeams from "./Images/ItHasMyFace/Beams-difference.png"
import neonSigns from "./Images/ItHasMyFace/neonsigns.png"
import vendingMachines from "./Images/ItHasMyFace/vmachines1.png"
import fireBarrel from "./Images/ItHasMyFace/BarrelWFire.png"
import generator from "./Images/ItHasMyFace/generatorinengine.png"
import boxes from "./Images/ItHasMyFace/boxes.png"
import benches from "./Images/ItHasMyFace/benches.png"
import foodStands from "./Images/ItHasMyFace/food-stands.png"
import airFilter from "./Images/ItHasMyFace/air-filter.png"
import neonStreet1 from "./Images/ItHasMyFace/neon-street-1.png"
import neonStreet2 from "./Images/ItHasMyFace/neon-street-2.png"
import infirmary1 from "./Images/ItHasMyFace/infirmary-1.png"
import infirmary2 from "./Images/ItHasMyFace/infirmary-2.png"
import cafeteria1 from "./Images/ItHasMyFace/cafeteria-1.png"
import cafeteria2 from "./Images/ItHasMyFace/cafeteria-2.png"
import bossGreybox from "./Images/ItHasMyFace/boss-greybox.png"
import bossFinal from "./Images/ItHasMyFace/boss-final.png"
import bossShot1 from "./Images/ItHasMyFace/boss-shot-1.png"
import bossShot2 from "./Images/ItHasMyFace/boss-shot-2.png"
import bossShot3 from "./Images/ItHasMyFace/boss-shot-3.png"
import bossShot4 from "./Images/ItHasMyFace/boss-shot-4.png"
import bossShot5 from "./Images/ItHasMyFace/boss-shot-5.png"
import bossShot6 from "./Images/ItHasMyFace/boss-shot-6.png"
import remakeBefore1 from "./Images/ItHasMyFace/remake-before-1.png"
import remakeAfter1 from "./Images/ItHasMyFace/remake-after-1.png"
import remakeBefore2 from "./Images/ItHasMyFace/remake-before-2.png"
import remakeAfter2 from "./Images/ItHasMyFace/remake-after-2.png"
import remakeBefore3 from "./Images/ItHasMyFace/remake-before-3.png"
import remakeAfter3 from "./Images/ItHasMyFace/remake-after-3.png"
import remakeBefore4 from "./Images/ItHasMyFace/remake-before-4.png"
import remakeAfter4 from "./Images/ItHasMyFace/remake-after-4.png"
import remakeBefore5 from "./Images/ItHasMyFace/remake-before-5.png"
import remakeAfter5 from "./Images/ItHasMyFace/remake-after-5.png"
import projectBanner from "./Images/ItHasMyFace/IHMF_banner.png";
//import showcase1     from "./Images/ItHasMyFace/showcase-1.png"
// ...add more showcase images as needed

const PROPS = [
    "Canopy (remake)", "Metal Beams (remake)", "Boxes (remake)",
    "Neon Signs", "Vending Machines", "Fire Barrels",
    "Bench", "Generator", "Food Stands", "Air Filter",
];

const SECTIONS = ["Neon Street", "Infirmary", "Prison-Style Cafeteria"];

function ItHasMyFace() {
    return (
        <div className="ihmf-page">
            {/* ── BANNER ── */}
            <ProjectBanner
                image={bossShot1}
                name={"IT HAS MY FACE"}
                date={"NOVEMBER 2025 - APRIL 2026"}
                link={"https://store.steampowered.com/app/2506530/It_Has_My_Face/"}
                icons={[
                    "devicon-unity-plain",
                    "devicon-blender-original",
                ]}
            />

            {/* ── TRAILER ── */}
            <YoutubeEmbed embedId="8ZlgFKjexuk" />

            {/* ── OVERVIEW ── */}
            <ProjectDescription
                description={(
                    <>
                        <em>It Has My Face</em> is a first-person roguelite horror game developed by NightByte Games,
                        a four-person indie studio based in Istanbul, Turkey. I joined the team remotely as an
                        <strong> Environment Artist Intern</strong> — my first professional 3D environment art role
                        and my first contribution to a shipped game.
                        <br /><br />
                        Over 320+ hours I was responsible for creating new props, designing and building new game
                        sections, constructing the final boss arena from greybox, and remaking existing environments
                        to improve visual quality. Due to the indie setting I also took on cross-disciplinary technical
                        art tasks, which gave me a broader understanding of the production pipeline.
                    </>
                )}
                teamMembers={[
                    { name: "Salih Ünal", link: "https://wolderado.com/", role: "Founder & Lead Developer" },
                    { name: "Tuana Bıçakcı", link: "https://tuanabicakci.dev/", role: "Environment Artist" },
                    { name: "Samet Umut Çolak", link: "https://samethope.itch.io/", role: "Gameplay Programmer" },
                ]}
            />

            {/* ── SCREENSHOTS ── */}
            {/* Uncomment and pass your best in-game screenshots once imported:
            <ModelShowcase images={[showcase1, showcase2, showcase3]} />
            */}

            <div id="ihmf-wrapper">

                {/* ── TASK 01: 10 NEW PROPS ── */}
                <div className="ihmf-section">
                    <div className="ihmf-section-inner">
                        <span className="ihmf-task-number">Task 01</span>
                        <h2>10 NEW PROPS</h2>
                        <p>
                            The first deliverable was 10 generic, reusable props designed with procedural
                            randomization and variation in mind. I built a moodboard to gather references and
                            align expectations with the team before modelling began. Some existing props also
                            needed remakes, so those were folded into the same task.
                        </p>

                        <div className="ihmf-prop-tags">
                            {PROPS.map(p => <span key={p} className="ihmf-tag">{p}</span>)}
                        </div>

                        {/* Moodboard */}
                        <div className="ihmf-image-grid one-col">
                            <img src={moodboard} />
                            <p className="ihmf-caption">Prop moodboard</p>
                        </div>

                        {/* Prop grid */}
                        <div className="ihmf-image-grid three-col" style={{ marginTop: "var(--space-m-400)" }}>
                            <div>
                                <img src={canopy} alt="" />
                                <p className="ihmf-caption">Old vs. new canopy</p>
                            </div>
                            <div>
                                <img src={metalBeams} alt="" />
                                <p className="ihmf-caption">Old vs. new metal beams</p>
                            </div>
                            <div>
                                <img src={neonSigns} alt="" />
                                <p className="ihmf-caption">Neon signs</p>
                            </div>
                            <div>
                                <img src={vendingMachines} alt="" />
                                <p className="ihmf-caption">Vending machines</p>
                            </div>
                            <div>
                                <img src={fireBarrel} alt="" />
                                <p className="ihmf-caption">Barrel with fire</p>
                            </div>
                            <div>
                                <img src={generator} alt="" />
                                <p className="ihmf-caption">Generator</p>
                            </div>
                            <div>
                                <img src={boxes} alt="" />
                                <p className="ihmf-caption">Old vs. new boxes</p>
                            </div>
                            <div>
                                <img src={benches} alt="" />
                                <p className="ihmf-caption">Benches</p>
                            </div>
                            <div>
                                <img src={foodStands} alt="" />
                                <p className="ihmf-caption">Food stands</p>
                            </div>
                            <div>
                                <img src={airFilter} alt="" />
                                <p className="ihmf-caption">Air filter</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── TASK 02: NEW SECTIONS ── */}
                <div className="ihmf-section ihmf-section-alt">
                    <div className="ihmf-section-inner">
                        <span className="ihmf-task-number">Task 02</span>
                        <h2>NEW SECTIONS</h2>
                        <p>
                            The second task was designing and building three entirely new game sections. I presented
                            environment ideas via moodboard and the team aligned on the following settings:
                        </p>

                        <div className="ihmf-prop-tags">
                            {SECTIONS.map(s => <span key={s} className="ihmf-tag">{s}</span>)}
                        </div>

                        <div className="ihmf-image-grid two-col">
                            <div>
                                <img src={neonStreet1} alt="" />
                                <p className="ihmf-caption">Neon street</p>
                            </div>
                            <div>
                                <img src={neonStreet2} alt="" />
                                <p className="ihmf-caption">Neon street</p>
                            </div>
                            <div>
                                <img src={infirmary1} alt="" />
                                <p className="ihmf-caption">Infirmary</p>
                            </div>
                            <div>
                                <img src={infirmary2} alt="" />
                                <p className="ihmf-caption">Infirmary</p>
                            </div>
                            <div>
                                <img src={cafeteria2} alt="" />
                                <p className="ihmf-caption">Prison-style cafeteria</p>
                            </div>
                            <div>
                                <img src={cafeteria1} alt="" />
                                <p className="ihmf-caption">Prison-style cafeteria</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── TASK 03: FINAL BOSS ARENA ── */}
                <div className="ihmf-section">
                    <div className="ihmf-section-inner">
                        <span className="ihmf-task-number">Task 03</span>
                        <h2>FINAL BOSS ARENA</h2>
                        <p>
                            I was handed a greybox by my supervisor and tasked with dressing it into a finished
                            environment for the game's last chapter. This required reading the layout intent and
                            making creative decisions about lighting, prop placement, and atmosphere.
                        </p>

                        <div className="ihmf-before-after">
                            <div>
                                <img src={bossGreybox} alt="" />
                                <p className="ihmf-caption">Greybox from supervisor</p>
                            </div>
                            <span className="ihmf-arrow">→</span>
                            <div>
                                <img src={bossFinal} alt="" />
                                <p className="ihmf-caption">Final version</p>
                            </div>
                        </div>

                        <div className="ihmf-image-grid two-col">
                            <img src={bossShot1} alt="" />
                            <img src={bossShot2} alt="" />
                            <img src={bossShot3} alt="" />
                            <img src={bossShot4} alt="" />
                            <img src={bossShot5} alt="" />
                            <img src={bossShot6} alt="" />
                        </div>
                    </div>
                </div>

                {/* ── TASK 04: REMAKES ── */}
                <div className="ihmf-section ihmf-section-alt">
                    <div className="ihmf-section-inner">
                        <span className="ihmf-task-number">Task 04</span>
                        <h2>REMAKING EXISTING SECTIONS</h2>
                        <p>
                            The final task was to revisit sections already shipped in the game and bring them
                            up to the visual standard of the newer environments.
                        </p>

                        <div className="ihmf-image-grid two-col">
                            <div>
                                <img src={remakeBefore1} alt="" />
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <img src={remakeAfter1} alt="" />
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <img src={remakeBefore2} alt="" />
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <img src={remakeAfter2} alt="" />
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <img src={remakeBefore3} alt="" />
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <img src={remakeAfter3} alt="" />
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <img src={remakeBefore4} alt="" />
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <img src={remakeAfter4} alt="" />
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <img src={remakeBefore5} alt="" />
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <img src={remakeAfter5} alt="" />
                                <p className="ihmf-caption">After</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── SKILLS GAINED ── */}
                <div className="ihmf-section">
                    <div className="ihmf-section-inner">
                        <h2>SKILLS GAINED</h2>

                        <div className="ihmf-skills-grid">
                            <div className="ihmf-skill-card">
                                <h3>Technical</h3>
                                <ul>
                                    <li>Unity Built-in Render Pipeline</li>
                                    <li>Asset optimization — GPU instancing and draw call batching</li>
                                    <li>Shaders and custom shader creation</li>
                                    <li>Particle systems for environmental effects</li>
                                    <li>Integrating assets into procedural generation systems</li>
                                    <li>Reading and working alongside C# scripts in-engine</li>
                                </ul>
                            </div>
                            <div className="ihmf-skill-card">
                                <h3>Artistic</h3>
                                <ul>
                                    <li>Pixel art for 3D material representation</li>
                                    <li>Low-poly topology and clean UV unwrapping</li>
                                    <li>Adapting to an established art style without a formal style guide</li>
                                </ul>
                            </div>
                            <div className="ihmf-skill-card">
                                <h3>Conceptual</h3>
                                <ul>
                                    <li>Environmental design and player navigation</li>
                                    <li>Balancing visual quality with technical constraints</li>
                                    <li>Modular, tileable asset design for procedural systems</li>
                                    <li>Working within milestone-driven production deadlines</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── TAKEAWAY ── */}
                <div className="ihmf-section ihmf-section-alt">
                    <div className="ihmf-section-inner ihmf-takeaway">
                        <h2>TAKEAWAY</h2>
                        <p>
                            This was my first professional environment art role — working under a lead developer
                            with real milestones, deadlines, and a codebase I didn't build from scratch. Jumping
                            into an established art style confirmed the dynamic I'll face in future roles.
                        </p>
                        <p>
                            The internship left me more intentional in my design decisions, more comfortable
                            working independently in a cross-disciplinary team, and more prepared for production
                            environments in the game industry. Most importantly, it confirmed that environment
                            art is the career I want.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ItHasMyFace;
