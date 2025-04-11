import React, {useState} from 'react';
import YoutubeEmbed from "./Components/YoutubeEmbed";
import {Carousel} from "react-responsive-carousel";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {styled, css} from '@mui/system';
import {Modal as BaseModal} from '@mui/base/Modal';
import {GameDesign, WebDesign} from "./Components/Work";
import {Link} from "react-router-dom";
import substancePainterIcon from "./Images/substance-3d-painter.svg";
import ProjectCatalogue from "./Components/ProjectCatalogue";

function Games() {
    return (
        <div>
            <ProjectCatalogue
                mainIcon={"fa-solid fa-gamepad"}
                heading="GAME DEVELOPMENT"
                icons={["devicon-unrealengine-original",
                    "devicon-unity-plain",
                    "devicon-csharp-line",
                    "devicon-blender-original",
                    substancePainterIcon
                ]}
                children={GameDesign}
                showRecent={true}
                isAccent={false}
                social={"Itch.io"}
                socialLink={"https://tuanabicakci.itch.io/"}
                socialIcon={"fa-brands fa-itch-io"}/>
        </div>
    );
}
export default Games;