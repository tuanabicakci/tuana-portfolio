import React from "react";
import ProjectBanner from "./Components/ProjectBanner";
import ProjectDescription from "./Components/ProjectDescription";
import ModelShowcase from "./Components/ModelShowcase";
import "./ItHasMyFace.css";

// ── Add your screenshots to src/Images/It_Has_My_Face/ and import them here ──
// import banner        from "./Images/It_Has_My_Face/banner.png"
// import moodboard     from "./Images/It_Has_My_Face/moodboard.png"
// import canopy        from "./Images/It_Has_My_Face/canopy.png"
// import metalBeams    from "./Images/It_Has_My_Face/metal-beams.png"
// import neonSigns     from "./Images/It_Has_My_Face/neon-signs.png"
// import vendingMachines from "./Images/It_Has_My_Face/vending-machines.png"
// import fireBarrel    from "./Images/It_Has_My_Face/fire-barrel.png"
// import generator     from "./Images/It_Has_My_Face/generator.png"
// import boxes         from "./Images/It_Has_My_Face/boxes.png"
// import benches       from "./Images/It_Has_My_Face/benches.png"
// import foodStands    from "./Images/It_Has_My_Face/food-stands.png"
// import airFilter     from "./Images/It_Has_My_Face/air-filter.png"
// import neonStreet1   from "./Images/It_Has_My_Face/neon-street-1.png"
// import neonStreet2   from "./Images/It_Has_My_Face/neon-street-2.png"
// import infirmary1    from "./Images/It_Has_My_Face/infirmary-1.png"
// import infirmary2    from "./Images/It_Has_My_Face/infirmary-2.png"
// import cafeteria1    from "./Images/It_Has_My_Face/cafeteria-1.png"
// import cafeteria2    from "./Images/It_Has_My_Face/cafeteria-2.png"
// import bossGreybox   from "./Images/It_Has_My_Face/boss-greybox.png"
// import bossFinal     from "./Images/It_Has_My_Face/boss-final.png"
// import bossShot1     from "./Images/It_Has_My_Face/boss-shot-1.png"
// import bossShot2     from "./Images/It_Has_My_Face/boss-shot-2.png"
// import bossShot3     from "./Images/It_Has_My_Face/boss-shot-3.png"
// import bossShot4     from "./Images/It_Has_My_Face/boss-shot-4.png"
// import remakeBefore1 from "./Images/It_Has_My_Face/remake-before-1.png"
// import remakeAfter1  from "./Images/It_Has_My_Face/remake-after-1.png"
// import remakeBefore2 from "./Images/It_Has_My_Face/remake-before-2.png"
// import remakeAfter2  from "./Images/It_Has_My_Face/remake-after-2.png"
// import remakeBefore3 from "./Images/It_Has_My_Face/remake-before-3.png"
// import remakeAfter3  from "./Images/It_Has_My_Face/remake-after-3.png"
// import showcase1     from "./Images/It_Has_My_Face/showcase-1.png"
// ...add more showcase images as needed

const PROPS = [
    "Canopy (remake)", "Metal Beams (remake)", "Boxes (remake)",
    "Neon Signs", "Vending Machines", "Fire Barrels",
    "Bench", "Generator", "Food Stands", "Air Filter",
];

const SECTIONS = ["Neon Street", "Infirmary", "Prison-Style Cafeteria"];

function ItHasMyFace() {
    return (
        <div>
            {/* ── BANNER ── */}
            <ProjectBanner
                image={null /* swap with: banner */}
                name={"IT HAS MY FACE"}
                date={"SUMMER 2024"}
                link={"" /* add Steam / itch link here */}
                icons={[
                    "devicon-unity-plain",
                    "devicon-blender-original",
                ]}
            />

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
                    { name: "Tuana Bıçakcı", link: "https://tuanabicakci.dev/", role: "Environment Artist (Intern)" },
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
                        <h2>10 New Props</h2>
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
                            <div className="ihmf-placeholder">[ moodboard.png ]</div>
                            <p className="ihmf-caption">Prop moodboard</p>
                        </div>

                        {/* Prop grid */}
                        <div className="ihmf-image-grid three-col" style={{ marginTop: "var(--space-m-400)" }}>
                            <div>
                                <div className="ihmf-placeholder">[ canopy.png ]</div>
                                <p className="ihmf-caption">Old vs. new canopy</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ metal-beams.png ]</div>
                                <p className="ihmf-caption">Old vs. new metal beams</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ neon-signs.png ]</div>
                                <p className="ihmf-caption">Neon signs</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ vending-machines.png ]</div>
                                <p className="ihmf-caption">Vending machines</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ fire-barrel.png ]</div>
                                <p className="ihmf-caption">Barrel with fire</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ generator.png ]</div>
                                <p className="ihmf-caption">Generator</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ boxes.png ]</div>
                                <p className="ihmf-caption">Old vs. new boxes</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ benches.png ]</div>
                                <p className="ihmf-caption">Benches</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ food-stands.png ]</div>
                                <p className="ihmf-caption">Food stands</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ air-filter.png ]</div>
                                <p className="ihmf-caption">Air filter</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── TASK 02: NEW SECTIONS ── */}
                <div className="ihmf-section ihmf-section-alt">
                    <div className="ihmf-section-inner">
                        <span className="ihmf-task-number">Task 02</span>
                        <h2>New Sections</h2>
                        <p>
                            The second task was designing and building three entirely new game sections. I presented
                            environment ideas via moodboard and the team aligned on the following settings:
                        </p>

                        <div className="ihmf-prop-tags">
                            {SECTIONS.map(s => <span key={s} className="ihmf-tag">{s}</span>)}
                        </div>

                        <div className="ihmf-image-grid two-col">
                            <div>
                                <div className="ihmf-placeholder">[ neon-street-1.png ]</div>
                                <p className="ihmf-caption">Neon street</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ neon-street-2.png ]</div>
                                <p className="ihmf-caption">Neon street — alternate angle</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ infirmary-1.png ]</div>
                                <p className="ihmf-caption">Infirmary</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ infirmary-2.png ]</div>
                                <p className="ihmf-caption">Infirmary — alternate angle</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ cafeteria-1.png ]</div>
                                <p className="ihmf-caption">Prison-style cafeteria</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ cafeteria-2.png ]</div>
                                <p className="ihmf-caption">Prison-style cafeteria — alternate angle</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── TASK 03: FINAL BOSS ARENA ── */}
                <div className="ihmf-section">
                    <div className="ihmf-section-inner">
                        <span className="ihmf-task-number">Task 03</span>
                        <h2>Final Boss Arena</h2>
                        <p>
                            I was handed a greybox by my supervisor and tasked with dressing it into a finished
                            environment for the game's last chapter. This required reading the layout intent and
                            making creative decisions about lighting, prop placement, and atmosphere.
                        </p>

                        <div className="ihmf-before-after">
                            <div>
                                <div className="ihmf-placeholder">[ boss-greybox.png ]</div>
                                <p className="ihmf-caption">Greybox from supervisor</p>
                            </div>
                            <span className="ihmf-arrow">→</span>
                            <div>
                                <div className="ihmf-placeholder">[ boss-final.png ]</div>
                                <p className="ihmf-caption">Final version</p>
                            </div>
                        </div>

                        <div className="ihmf-image-grid two-col">
                            <div className="ihmf-placeholder">[ boss-shot-1.png ]</div>
                            <div className="ihmf-placeholder">[ boss-shot-2.png ]</div>
                            <div className="ihmf-placeholder">[ boss-shot-3.png ]</div>
                            <div className="ihmf-placeholder">[ boss-shot-4.png ]</div>
                        </div>
                    </div>
                </div>

                {/* ── TASK 04: REMAKES ── */}
                <div className="ihmf-section ihmf-section-alt">
                    <div className="ihmf-section-inner">
                        <span className="ihmf-task-number">Task 04</span>
                        <h2>Remaking Existing Sections</h2>
                        <p>
                            The final task was to revisit sections already shipped in the game and bring them
                            up to the visual standard of the newer environments.
                        </p>

                        <div className="ihmf-image-grid two-col">
                            <div>
                                <div className="ihmf-placeholder">[ remake-before-1.png ]</div>
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-after-1.png ]</div>
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-before-2.png ]</div>
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-after-2.png ]</div>
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-before-3.png ]</div>
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-after-3.png ]</div>
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-before-4.png ]</div>
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-after-4.png ]</div>
                                <p className="ihmf-caption">After</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-before-5.png ]</div>
                                <p className="ihmf-caption">Before</p>
                            </div>
                            <div>
                                <div className="ihmf-placeholder">[ remake-after-5.png ]</div>
                                <p className="ihmf-caption">After</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── SKILLS GAINED ── */}
                <div className="ihmf-section">
                    <div className="ihmf-section-inner">
                        <h2>Skills Gained</h2>

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
                        <h2>Takeaway</h2>
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
