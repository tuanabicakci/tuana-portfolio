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
import procreateIcon from "./Images/procreate_icon.png";


export default function Art() {


    return (
        <div>
            <ProjectCatalogue
                mainIcon={"fa-solid fa-cube"}
                heading="3D MODELING"
                icons={["devicon-blender-original",
                    substancePainterIcon,
                ]}
                children={ThreeD}
                showRecent={true}
                isAccent={false}
                social={"ArtStation"}
                socialLink={"https://www.artstation.com/tuanabicakci"}
                socialIcon={"fa-brands fa-artstation"}/>
            <ProjectCatalogue
                mainIcon={"fa-solid fa-code"}
                heading="ILLUSTRATION"
                icons={["devicon-photoshop-plain",
                    procreateIcon,
                ]}
                children={GraphicDesign}
                showRecent={true}
                isAccent={true}
                social={"ArtStation"}
                socialLink={"https://www.artstation.com/tuanabicakci"}
                socialIcon={"fa-brands fa-artstation"}/>

        </div>

    );

}

