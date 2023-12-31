import React from 'react';
import YoutubeEmbed from "./Components/YoutubeEmbed";
import {Carousel} from "react-responsive-carousel";
import banner from "./Images/freddyscafe.png"
import conceptArt from "./Images/conceptartArtboard 1.png"
import camera1 from "./Images/view.png";
import camera2 from "./Images/camera-setup.png";
import "./FreddysCafe.css"
import coffee from "./Images/turkish-coffee-initialization.png"
import cameraBP from "./Images/change-camera-views.png";
import recipe from "./Images/populating-recipe.png"
import KT1 from "./Images/KT1.jpg";
import KT2 from "./Images/KT2.jpg";
import KT3 from "./Images/KT3.png";
import KT4 from "./Images/KT4.jpg";
import S1 from "./Images/screenshot1.png"
import S2 from "./Images/screenshot2.png"
import turkishCoffee from "./Images/turkish coffee.png";
import grinder from "./Images/grinder.png";
import measure from "./Images/measure.png";

function FreddysCafe(props) {
    return (
        <div className="page" id={"prisma"}>
            <img src={banner} alt=""/>
            <br/>
            <span style={{color: "#E394B6  "}} className={"title"}>FREDDY'S CAFE</span>
            <b>November 2023</b>
            <br/>
            <br/>
            <div>
                The theme for this game jam was “Extraction”, and immediately we thought of making coffee. We didn’t
                waste time and chose to make a barista simulator. We laid out what was needed to make that happen,
                and took inspiration from the setup of the game Order Up (2008).
            </div>

            <div className={"credits"}>
                <div>
                    <b style={{color: "#E394B6 "}}>Credits</b>
                    <ul>
                        <li><a style={{color: "#24C8DC"}} href={"https://shinykiwi.dev/"}><b>Kira
                            Fountain:</b></a> Programmer, Level Designer, Artist
                        </li>
                        <li><b>Tuana Bicakci:</b> Level Designer, Programmer, Artist,</li>
                    </ul>
                </div>
                <div>
                    <b style={{color: "#E394B6 "}}>Tools</b>
                    <ul>
                        <li>Unreal Engine 5</li>
                        <li>Blender</li>
                        <li>Substance Painter</li>
                    </ul>
                </div>
            </div>
            <YoutubeEmbed embedId={"B4lJhGOMk4E"}/>
            <br/>
            <br/>
            <Carousel className={"carousel"}>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={conceptArt}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={turkishCoffee}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={grinder}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={measure}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={S1}/>
                </div>
                <div className={"popUp-images-container"} >
                    <img className={"popup-images"} src={S2}/>
                </div>
            </Carousel>
            <b>Design Choices</b>
            <br/>
            We sought to blend the dynamic intensity of Order Up (2008) with the cozy appeal found in today's popular
            games.
            To achieve this, we've built a calming ambiance with soft color palettes, a minimalist UI, and a homely
            kitchen setting bathed in warm light.
            <br/>
            <br/>
            As we navigated the delicate task of enhancing the user experience, we focused on the fluidity of gameplay
            and
            smooth camera transitions. It's our modest aspiration to craft not just a game but an immersive and tranquil
            escape.
            We prioritized smooth camera transitions and gameplay flow to provide a calm experience for players without
            frustration.
            <div className={"two-pictures"}>
                <img src={camera1} alt=""/>
                <img src={camera2} alt=""/>
            </div>
            <br/>
            <br/>
            <b>Technical Aspects</b>
            <br/>
            This was a very “UI” heavy game, since the player does not have control to move around, and movement is done
            through clicking buttons. As a result, a lot of our time was spent learning how to create UI in Unreal
            Engine
            and how to provoke events upon interaction.
            <br/>
            <br/>
            <div>
                <i style={{color: "#E394B6 "}}>Classes</i> <br/>
                <b>BP_Recipe</b>
                Name (Text) <br/>
                IngredientList (Array of BP_Ingredient) <br/>
                <br/>
                <b>BP_Ingredient</b> <br/>
                StepName (Text)<span style={{color: "#729b79"}}>// for example, “Boil”</span> <br/>
                Name (Text) <span style={{color: "#729b79"}}>// for example, “Coffee Beans”</span> <br/>
                Completed (Boolean)
                ViewTargetID (Integer)<span
                style={{color: "#729b79"}}>// which camera to switch to for that ingredient</span> <br/>
                IconImage (Texture2D)<span
                style={{color: "#729b79"}}>// the ingredient icon to go in the left panel UI</span> <br/>
                <br/>
                <b>GI_Main</b>
                <br/>
                Our custom game instance, which holds a reference to the current active ingredient and an array of
                CameraActors, referencing all the possible view targets to switch to
                <br/>
                <br/>
                <b>BP_TurkishCoffee child class of BP_Recipe</b>
                <br/>
                No variables, just initializes itself with preset specific Ingredients
                <br/><br/>
                Most of the functionality of the game was implemented in the Level Blueprint because we had to make use
                of many of the actors in the level like the cameras.
                <div className={"two-pictures"}>
                    <div>
                        <img style={{
                            width: "28vw",
                            margin: "1rem"
                        }} src={coffee} alt=""/>
                        <div style={{textAlign: "center", fontSize: "1rem"}}>BP_Turkish Coffee</div>
                    </div>
                    <div>
                        <img style={{
                            width: "28vw",
                            margin: "1rem"
                        }} src={cameraBP} alt=""/>
                        <div style={{textAlign: "center", fontSize: "1rem"}}>Camera Perspective Change</div>
                    </div>

                </div>
                <br/>

                This snapshot demonstrates when a new recipe is created, to dynamically populate the left side panel
                with the required steps based on what ingredients are necessary to create the item.
                <br/>
                <img style={{
                    width: "100%",
                    margin: "1rem"
                }} src={recipe} alt=""/>
                <br/>
                <b>Successes and Failures</b>
                <br/><br/>
                Players smoothly navigated our UI, grasping the game's goals almost effortlessly. Most of the positive
                reception was regarding our camera transitions.
                For future iterations, animations like filling cups, diversifying recipes, and introducing a subtle
                timer for added challenges can make the game more engaging and satisfying while diversifying the game
                loop.
                <br/>
                <br/>
                <b>Play!</b>
                <br/><br/>
                <iframe frameBorder="0" src="https://itch.io/embed/2364546" width="552" height="167"><a href="https://tuanabicakci.itch.io/freddys-cafe">Freddy's Cafe by tuanabicakci</a></iframe>
               <br/><br/>
                <b>Impact and Takeaways</b>
                <br/><br/>
                This project pushed us into uncharted territory with its heavy reliance on UI, a departure from our
                usual work. The challenges sparked a keen interest, and now, in future projects, we're eager to
                experiment and expand our horizons in UI design.
                <br/><br/>
                <span style={{color: "#E394B6  "}}><b>Thank you for reading!-Kira & Tuana</b></span>
                <br/><br/>
                <br/><br/>
                <Carousel className={"carousel"}>
                    <div className={"popUp-images-container"} >
                        <img className={"popup-images"} src={KT1}/>
                    </div>
                    <div className={"popUp-images-container"} >
                        <img className={"popup-images"} src={KT2}/>

                    </div>
                    <div className={"popUp-images-container"} >
                        <img className={"popup-images"} src={KT3}/>
                    </div>
                    <div className={"popUp-images-container"} >
                        <img className={"popup-images"} src={KT4}/>
                    </div>
                </Carousel>

            </div>


        </div>
    );
}

export default FreddysCafe;