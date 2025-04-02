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
                mainIcon={"fa-solid fa-code"}
                heading="SOFTWARE DEVELOPMENT"
                icons={["devicon-java-plain",
                    "devicon-javascript-plain",
                    "devicon-typescript-plain",
                    "devicon-css3-plain",
                    "devicon-html5-plain",
                    "devicon-tailwindcss-plain-wordmark",
                    "devicon-figma-plain",
                    "devicon-react-original",
                    "devicon-nextjs-original-wordmark",
                    "devicon-nodejs-plain-wordmark",
                    "devicon-mongodb-plain-wordmark",
                    "devicon-python-plain",
                    "devicon-streamlit-plain-wordmark",
                    "devicon-c-plain-wordmark"
                ]}
                children={WebDesign}
                showRecent={true}
                isAccent={false}
                social={"GitHub"}
                socialLink={"https://github.com/tuanabicakci"}
                socialIcon={"devicon-github-original"}/>
        </div>
    );
}
export default Games;