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
import FieldSummary from "./Components/FieldSummary";

function Code() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [work, setWork] = useState(0);
    return (
        <div className={"page"}>
            <FieldSummary
                mainIcon={""}
                heading="GAME DEVELOPMENT"
                icons={["devicon-unrealengine-original",
                    "devicon-unity-plain",
                    "devicon-csharp-line",
                    "devicon-blender-original",
                    substancePainterIcon
                ]}
                children={GameDesign}
                showRecent={false}/>
            <div style={{color: '#E8EBEA', fontSize: "1.5vw"}} > Check out my  <a style={{color:"#f69197"}}  href="https://tuanabicakci.itch.io/"><i className="fa-brands fa-itch-io"></i>Itch.io</a> page to play the games!</div>
        </div>
    );
}
export default Code;