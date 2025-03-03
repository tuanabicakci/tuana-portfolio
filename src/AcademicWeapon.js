import substancePainterIcon from "./Images/substance-3d-painter.svg";
import ProjectBanner from "./Components/ProjectBanner";
import academicWeaponSlide_1 from "./Images/Academic_Weapon/academic-weapon-slide_1.png"
import academicWeaponSlide_2 from "./Images/Academic_Weapon/academic-weapon-slide_2.png"
import academicWeaponSlide_3 from "./Images/Academic_Weapon/academic-weapon-slide_3.png"
import academicWeaponSlide_4 from "./Images/Academic_Weapon/academic-weapon-slide_4.png"
import ProjectDescription from "./Components/ProjectDescription";
import ModelShowcase from "./Components/ModelShowcase";

function AcademicWeapon(){
    return(
        <div>
            <ProjectBanner
                image={academicWeaponSlide_2}
                name={"ACADEMIC WEAPON"}
                date={"SEPTEMBER 2024"}
                link={"https://tuanabicakci.itch.io/academic-weapon"}
                icons={["devicon-unity-plain",
                    "devicon-csharp-line",
                    "devicon-blender-original",
                    substancePainterIcon,]}
            />
            <ProjectDescription
                description={(
                    <>
                        You're in the middle of a high-stakes exam, armed with a cheat sheet. But you're not alone: a sneaky classmate is trying to cheat off your answers, a nosy nerd is ready to snitch on you, and a strict teacher is constantly scouting the room. But fret not—you have special powers that let you make things disappear. Use your wits and abilities to survive the exam, keep your cheat sheet hidden, and outsmart both your peers and the watchful eyes of the examiners. Can you make it through without getting caught?
                        <br />
                        <br />
                        This game was made for the NAD Creative Jam 2024, within the 48 hours given. The theme for this game jam was “Disappear". All assets and code were made within the duration of the jam (except for the sound effects).
                    </>
                )}
                teamMembers={[
                    {name:"Tuana Bıçakcı",link:"https://tuanabicakci.dev/",role:"3D Generalist, Environment Artist, Character Artist"},
                    {name:"Kira Fountain",link:"https://shinykiwi.dev/",role:"Programmer, Technical Artist"},
                    {name:"Zaid Minhas",link:"https://github.com/ZaidMinhas",role:"Programmer"},

                ]}
            />
            <ModelShowcase
                images={[academicWeaponSlide_1,
                academicWeaponSlide_2,
                academicWeaponSlide_3,
                academicWeaponSlide_4]}
            />
        </div>
    )
}

export default AcademicWeapon;