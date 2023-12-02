import Rat from "../Images/images.jpg";
import feltAlone from "../Images/feltalone.png"
import freddysCafe from "../Images/freddyscafe.png";
import Prisma from "../Images/prisma.png";
import MD from "../Images/md.png"
import errors from "../Images/211.png"
import pc from "../Images/pc.png"
import EIT1 from "../Images/EIT-1.png";
import EIT2 from "../Images/EIT-2.png";
import EIT3 from "../Images/EIT-3.png";
import SNM1 from  "../Images/SNM-1.PNG";
import SNM2 from  "../Images/SNM-2.PNG";
import SNM3 from  "../Images/SNM-3.PNG";
import TUI from "../Images/TUI.png";
import GGJ from"../Images/GGJ.png";
import MTL from "../Images/MTL.PNG";
import CGD from "../Images/CGD.png";
import ALBF from "../Images/ALBF.png";
import ALBB from "../Images/ALBB.png";
import GGJC from "../Images/GGJC.png"
import CGD1 from "../Images/CGD1.png"
import CGD2 from "../Images/CGD2.png"
import CGD3 from "../Images/CGD3.png"
import MR1 from "../Images/Shot1_Blender.png"
import MR2 from "../Images/Shot2_Blender.png"
import MR3 from "../Images/Shot3_SubstancePainter.png"
import MR4 from "../Images/Shot4_SubstancePainter.png"
import MR5 from "../Images/Shot5_SubstancePainter.png"
import MR6 from "../Images/Shot6_Turntable.gif"
import ELF1 from "../Images/shot1.png";
import ELF2 from "../Images/shot2.png";
import ELF3 from "../Images/shot3.png";
import ELF4 from "../Images/shot4.png";
import WK from "../Images/WK.png"
import PLU from "../Images/PLU.JPG"
import TM from "../Images/TM.JPG";
import SNOW from "../Images/SNOW.JPG";
import RTR from "../Images/RTR.JPG";
import OFF from "../Images/OFFICE.png"
export const GameDesign = [
    {
        name: "Miracle Daycare(In Development)",
        photo: MD,
        description:"Discover a trail of sinister secrets inside boxes.",
        link: "/miracle-daycare"
    },

    {
        name: "Prisma(2023)",
        photo: Prisma,
        description: "Dive into the chromatic realm of Prisma, solving puzzles, unveiling hidden paths, and activating " +
            "prism statues for a vivid escape!",
        link: "/prisma"},
    {
        name: "Freddy's Cafe(2023)",
        photo: freddysCafe,
        description: "Make a cup of Turkish coffee here at cozy Freddys Cafe!",
        link: "freddys-cafe"
    },
    {name: "Felt Alone, So I went For a Walk(2022)",
        photo: feltAlone,
        description: "Embark on a soul-soothing journey through a forest, unraveling memories and embracing solitude ",
        link: "/felt-alone"}
]

export const WebDesign=[
    {
        name:"Errors In Thinking(2022)",
        thumbnailPhoto:errors,
        summary:"This website aims to help you identify, challenge, and minimize your errors in thinking while " +
            "listening to music+rain and petting a virtual cat to relax!",
        photos:[EIT1,EIT2,EIT3,errors],
        skills:["JavaScript","HTML","CSS","ProCreate"],
        description: "Cognitive distortions, alias errors in thinking, are thoughts we base on our feelings about ourselves and our surroundings. They are irrational beliefs that we reinforce on ourselves as facts.\n\n"+
            "It is important to recognize and know the types of cognitive distortions because they can be really damaging to mental health and sabotage daily life." +
            "Therefore, this website aims to help you identify, challenge, and minimize your errors in thinking while listening to music+rain and petting a virtual cat to relax!\n" +
            "\n" +
            "Note: Optimized for desktops only.\n" +
            "\n" +
            "Final Project for CART 211 : Creative Computing and Network Culture"

    },
    {
        name:"How to Build A PC",
        photo: pc,
        description: "This website aims to inform users how to properly assemble a desktop PC. It features instructions " +
            "on how to install each part properly as well as how to do it safely. ",
        link:""
    }

]

export const GraphicDesign=[
    {
        name:"A Fever You Can't Sweat Out-(2023)",
        photo:ALBF,
        a:[ALBF,ALBB],
        skills:["Illustrator","PhotoShop","Procreate"],
        description:"Final submission for CART 214: My reinterpretation on Panic! At the Disco's first album, 'A Fever You Can't Sweat Out.'",

    },
    {
        name:"Say No To Media Censorship-Free(2023)",
        photo:SNM1,
        skills:["Illustrator","PhotoShop","Procreate"],
        description:"Midterm submission for CART 214: A thematic exploration on media \ncensorship through the creation " +
            "of three distinct posters,each employing \ndiverse grids while preserving essential elements. ",

    },
    {
        name:"Say No To Media Censorship-Orthogonal(2023)",
        photo:SNM2,
        skills:["Illustrator","PhotoShop","Procreate"],
        description:"Midterm submission for CART 214: A thematic exploration on media \ncensorship through the creation " +
            "of three distinct posters,each employing \ndiverse grids while preserving essential elements. ",

    },
    {
        name:"Say No To Media Censorship-Diagonal(2023)",
        photo:SNM3,
        skills:["Illustrator","PhotoShop","Procreate"],
        description:"Midterm submission for CART 214: A thematic exploration on media \ncensorship through the creation " +
            "of three distinct posters,each employing \ndiverse grids while preserving essential elements. ",

    },
    {
        name:"Concordia Game Jam Poster(2023)",
        photo:CGD1,
        a:[CGD1,CGD,CGD2,CGD3],
        skills:["Procreate"],
        description:"As the lead artist, I proudly designed the mascot, R.DIA, for the Concordia Game Dev Club. Unveiling its debut during\n" +
            "the CGD Game Jam, I depicted R.DIA poised on the moon, gazing at constellations formed like beloved classic " +
            "\ngame characters, a captivating homage to our vibrant community's shared passion." +
            "\nIllustrations & Stickers by Tuana Bicakci, Posters designed by Carleen Looney ",

    },
    {
        name:"Global Game Jam Poster(2023)",
        photo:GGJC,
        a:[GGJC,GGJ],
        skills:["Procreate"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
    {
        name:"Road To Montreal(2022)",
        photo:MTL,
        skills:["Procreate"],
        description:"Pursuing my long-held dream of studying abroad required thoughtful consideration \n" +
            "and, while the decision to relocate to Montreal was challenging, it was ultimately the right one. \n" +
            "Reflecting on this significant journey, I encapsulated my experience by making this gif.",

    },{
        name:"Tuana(2022)",
        photo:TUI,
        skills:["Procreate"],
        description:"Drawing inspiration from a personally curated color palette featuring my favorite hues, \nI drew a self-portrait with careful consideration and creative intent.",

    },

]

export const ThreeD=[
    {
        name:"Muzen Radio(2023)",
        photo:MR6,
        a:[MR1,MR2,MR3,MR4,MR5,MR6],
        skills:["Blender", "Substance Painter"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
    {
        name:"An Ordinary Elf(2023)",
        photo:ELF4,
        a:[ELF3,ELF1,ELF2,ELF4],
        skills:["Blender", "Substance Painter"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
]

export const VideoEdit=[
    {
        name:"Home(2023)",
        link:"UNizDoyx93Y",
        photo:WK,
        skills:["PremierePro", "After Effects"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    }
]

export const Music=[
    {
        name:"The Office(2023)",
        link:"Z2UUICTML0o",
        photo:OFF,
        skills:["Premiere Pro"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
    {
        name:"Snow(2023)",
        link:"RB2r0Kio1-o",
        photo:SNOW,
        skills:["Ableton"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
    {
        name:"Retrograde(2020)",
        link:"M60mQxlDhd4",
        photo:RTR,
        skills:["Ableton"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
    {
        name:"Time Machine(2020)",
        link:"-3reMUs_g5g",
        photo:TM,
        skills:["Ableton"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
    {
        name:"Pluviophile(2020)",
        link:"KbL71e1tG5c",
        photo:PLU,
        skills:["Ableton"],
        description:"As VP Creative, I brought classic video game characters together hanging out together base shaped like the club's logo in an illustration \n" +
            "for the Global Game Jam hosted by the Concordia Game Dev Club.\n" +
            "Illustrated by Tuana Bicakci, Poster designed by Kira Fountain ",

    },
]

export const UnpublishedWork=[
    {
        name:"Restoring Astera",
        photo:"",
        description:"",
        link:"",

    },
    {
        name:"Time and Space in Five Nights at Freddys",
        photo: "",
        description:"",
        link:"",

    },
    {
        name:"Beautifully tragic, tragically funny : Depression memes on TikTok",
        photo: "",
        description:"",
        link:"",

    },
    {
        name:"Lords & Leases : Board Game Prototype",
        photo: "",
        description:"",
        link:"",

    }

]
