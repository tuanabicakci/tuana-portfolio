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
import STK from "../Images/Brown Doodle Company profile Presentation.png";
import RDA from "../Images/RD.A.png"
import PC1 from "../Images/PC1.png";
import PC2 from "../Images/PC2.png";
import PORT from "../Images/PORT.png"
import engl255 from "../PDFs/engl255.pdf"
import fnaf from "../Images/freddy.jpg"
import cart210 from "../Images/cart210.png"
import pdf210 from "../PDFs/cart210.pdf"
import ffar250 from "../PDFs/Restoring Astera.pdf"
import RA from "../Images/RA.png"
import cart215 from "../PDFs/cart215.pdf"
import LL from "../Images/LL.png"
import Cali from "../PDFs/CART215-Calinferno (1).pdf"
import CAL from "../Images/cali.png"
import SH from "../Images/SH.png"
import AST from "../Images/AST.png"
import dtBanner from "../Images/dtbanner.png"
import academicWeaponThumbnail from "../Images/academic-weapon-banner.png"
import starlitCatchThumbnail from "../Images/Starlit_Catch/starlit-catch-slide_1.png"
import mtlRankedThumbnail from"../Images/MTLranked/map-screenshot.png"
export const GameDesign = [
    {
        name: "Starlit Catch(2024)",
        photo:starlitCatchThumbnail,
        summary: "Relax in your cottage and enjoy a peaceful fishing adventure.",
        link: "/starlit-catch",
        tag:"recent"

    },
    {
        name: "Academic Weapon(2024)",
        photo:academicWeaponThumbnail ,
        summary: "Outsmart your classmates, dodge the teacher, and survive the exam with your disappearing powers!",
        link: "/academic-weapon",
        tag:"recent"

    },
    {
        name: "Dream Team(Ubisoft Gamelab 2024)",
        photo: dtBanner,
        summary: "Dream Team reporting for duty! Nightmares have once again infiltrated the dream world to try to corrupt it and reach its core.",
        link: "/dream-team",
        tag:"recent"
    },
    {
        name: "Miracle Daycare",
        photo: MD,
        summary:"Discover a trail of sinister secrets inside boxes.",
        link: "/miracle-daycare",

    },

    {
        name: "Prisma(2023)",
        photo: Prisma,
        summary: "Dive into the chromatic realm of Prisma, solving puzzles, unveiling hidden paths, and activating " +
            "prism statues for a vivid escape!",
        link: "/prisma" ,

    },

    {
        name: "Freddy's Cafe(2023)",
        photo: freddysCafe,
        summary: "Make a cup of Turkish coffee here at cozy Freddys Cafe!",
        link: "/freddys-cafe",

    },
    {name: "Felt Alone, So I went For a Walk(2022)",
        photo: feltAlone,
        summary: "Embark on a soul-soothing journey through a forest, unraveling memories and embracing solitude ",
        link: "/felt-alone",
    },




]

export const WebDesign=[
    {
        name:"My Portfolio (2022 - ongoing)",
        photo: PORT,
        skills:["React.js","Node.js","JavaScript","HTML","CSS"],
        summary: "My portfolio is coded and designed by me!",
        link:"",
        tag:"recent"
    },
    {
        name:"Montreal Neighbourhood Livability Index (2025)",
        photo:mtlRankedThumbnail,
        skills: ["Python", "Streamlit","HTML","CSS"],
        summary: "An interactive tool helps newcomers to Montreal choose the best neighborhood by analyzing key factors like safety, economic opportunities, and social inclusion, all powered by AI-driven data analytics.",
        link: "",
        tag:"recent"
    },
    {
        name:"Errors In Thinking(2022)",
        photo:errors,
        summary:"This website aims to help you identify, challenge, and minimize your errors in thinking while " +
            "listening to music+rain and petting a virtual cat to relax!",
        a:[EIT1,EIT2,EIT3,errors],
        skills:["JavaScript","HTML","CSS","ProCreate"],
        description: "Cognitive distortions, alias errors in thinking, are thoughts we base on our feelings about ourselves and our surroundings. They are irrational beliefs that we reinforce on ourselves as facts.\n\n"+
            "It is important to recognize and know the types of cognitive distortions because they can be really damaging to mental health and sabotage daily life." +
            "Therefore, this website aims to help you identify, challenge, and minimize your errors in thinking while listening to music+rain and petting a virtual cat to relax!\n" +
            "\n" +
            "Note: Optimized for desktops only.\n" +
            "\n" +
            "\nFinal Project for CART 211 : Creative Computing and Network Culture",
        web:"https://hybrid.concordia.ca/t_bicakc/finalproject/",
        tag:""

    },
    {
        name:"How to Build A PC (2022)",
        photo: pc,
        a:[pc,PC1,PC2],
        skills:["React.js","JavaScript","HTML","CSS"],
        summary: "This website aims to inform users how to properly assemble a desktop PC. It features instructions " +
            "on how to install each part properly as well as how to do it safely.",
        web:" https://instructions-8b8a8.web.app/",
        tag:"recent"
    }

]

export const GraphicDesign=[
    {
        name:"Astarion(2023)",
        photo:AST,
        skills:["Procreate"],
        description:"Fanart of Astarion from Baldur's Gate 3"
    },
    {
        name:"Shadowheart(2023)",
        photo:SH,
        skills:["Procreate"],
        description:"Fanart of Shadowheart from Baldur's Gate 3"
    },
    {
        name:"A Fever You Can't Sweat Out(2023)",
        photo:ALBF,
        a:[ALBF,ALBB],
        skills:["Illustrator","PhotoShop","Procreate"],
        description:"Final submission for CART 214: My reinterpretation on Panic! At the Disco's first album, 'A Fever You Can't Sweat Out.'",

    },
    {
        name:"Say No To Media Censorship(2023)",
        photo:SNM3,
        a:[SNM3,SNM1,SNM2],
        skills:["Illustrator","PhotoShop","Procreate"],
        description:"Midterm submission for CART 214: A thematic exploration on media \ncensorship through the creation " +
            "of three distinct posters,each employing \ndiverse grids while preserving essential elements. ",

    },
    {
        name:"Concordia Game Jam Poster(2023)",
        photo:CGD1,
        a:[CGD1,CGD,CGD2,CGD3,RDA,STK],
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
        summary:"Modeled by Stephane Rabattu, Texturized/Painted by Tuana Bicakci inspired from the game Borderlands by Gearbox Entertaintment",
        tag:"recent"

    },
    {
        name:"An Ordinary Elf(2023)",
        photo:ELF4,
        a:[ELF3,ELF1,ELF2,ELF4],
        skills:["Blender", "Substance Painter"],
        summary:"Sculpted by Tuana Bicakci",
        tag:"recent"

    },
]





export const UnpublishedWork=[
    {
        name:"Time and Space in Five Nights at Freddys(2023)",
        photo: fnaf,
        skills:["Game Design Research","Narrative Design Research"],
        description:"In this essay, the goal is to discuss FNAF’s narrative style and game design. Using Wei et al. " +
            "(2010) ’s ideas we will characterize FNAF's mysterious, ambiguous, non-linear narrative style with the concept of \"fuzzy temporality\" and analyze how Cawthon utilizes time and space to enhance his story and gives the player an immersive experience. With this analysis, we can understand how its unique narrative and gameplay elements of FNAF make it a fan favorite, as well as a hit in the gaming world.",
        pdf:engl255,

    },
    {
        name:"Restoring Astera(2023)",
        photo:RA,
        skills:["Game Design Research","Narrative Design Research"],
        description:"This paper delves into the emotional attachment humans develop towards sentimental objects during " +
            "life transitions, exploring restoration as a means of engaging with an object's history. Drawing inspiration from the Japanese art of Kintsugi and video games like Stardew Valley, the proposed game features a protagonist reconnecting with their roots through restoration, encouraging players to appreciate the history of their sentimental items and memories. Ultimately,highlights the therapeutic potential of interactive storytelling.",
        pdf:ffar250,

    },
    {
        name:"Lords & Leases : Board Game Prototype(2023)",
        photo:LL,
        description:"A board game prototype based on the current events on renters' strikes in Montreal. The report lays out the prototype's design intentions, materials, and rules while including an in-depth analysis of its playtest conducted at Concordia University. ",
        skills:["Game Design Research","Game Prototyping","Playtest Analyzing"],
        pdf:cart215

    },
    {
        name:"Calinferno : Board Game Prototype(2023)",
        photo: CAL,
        description:"A card game prototype created with a team based on wildfires. The report lays out the prototype's design intentions, materials, and rules while including an in-depth analysis of its playtest conducted at Concordia University. ",
        skills:["Game Design Research","Game Prototyping","Playtest Analyzing"],
        pdf:Cali,

    }, {
        name:"Beautifully tragic, tragically funny : Depression memes on TikTok(2023)",
        photo: cart210,
        skills:["New Media Studies","Media Psychology"],
        description:"Why do people communicate their feelings with humourized, aestheticized, and sometimes personal online posts? This essay discusses and explores the depression meme subculture on TikTok and justifies the reason behind the emergence of this subculture as well as its potential consequences.",
        pdf:pdf210,

    },

]
