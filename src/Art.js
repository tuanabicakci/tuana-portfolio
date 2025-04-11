import React, {useState, useEffect} from 'react';
import "./Art.css"
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {styled, css} from '@mui/system';
import {Modal as BaseModal} from '@mui/base/Modal';
import {Carousel} from 'react-responsive-carousel';
import {GraphicDesign, Music, ThreeD, VideoEdit, WebDesign} from "./Components/Work";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import ProjectCatalogue from "./Components/ProjectCatalogue";
import substancePainterIcon from "./Images/substance-3d-painter.svg";


export default function Art() {


    return (
        <div>
            <ProjectCatalogue
                mainIcon={"fa-solid fa-code"}
                heading="3D"
                icons={["devicon-blender-original",
                    substancePainterIcon,
                ]}
                children={ThreeD}
                showRecent={true}
                isAccent={false}
                social={"ArtStation"}
                socialLink={"https://github.com/tuanabicakci"}
                socialIcon={"devicon-github-original"}/>
            <ProjectCatalogue
                mainIcon={"fa-solid fa-code"}
                heading="ILLUSTRATION"
                icons={["devicon-blender-original",
                    substancePainterIcon,
                ]}
                children={GraphicDesign}
                showRecent={true}
                isAccent={true}
                social={"ArtStation"}
                socialLink={"https://github.com/tuanabicakci"}
                socialIcon={"devicon-github-original"}/>

        </div>

    );

}

