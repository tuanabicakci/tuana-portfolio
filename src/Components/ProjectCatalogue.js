import React from 'react';
import "./ProjectCatalogue.css"
import {WebDesign} from "./Work";
import {Link} from "react-router-dom";

const ProjectCatalogue = ({ heading, mainIcon,icons, children, showRecent,isAccent, social, socialLink, socialIcon }) => {
    return (
        <div id="fs-wrapper" style={{backgroundColor: isAccent===true?"var(--color-secondary)":"var(--color-primary)"}}>
            <div id={"fs-container"} className="block">
                <div id="pc-header">
                    <div id="fs-title">
                        <h2><i className={mainIcon}/>{heading}</h2>
                        <p  style={{color: isAccent===true?"var(--color-primary)":"var(--color-secondary)"}}>Check out my <a href={socialLink}><i className={socialIcon}/>_{social}</a> for more!</p>
                    </div>
                    <div className="pc-icons" style={{color: isAccent===true?"var(--color-primary)":"var(--color-secondary)"}}>
                        {icons.map((icon, index) => (
                            // Check if the icon is a local image path
                            icon.endsWith('.png') || icon.endsWith('.jpg') || icon.endsWith('.jpeg') || icon.endsWith('.svg') ? (
                                <img key={index} src={icon} alt={`icon-${index}`} />
                            ) : (
                                // If it's not an image path, assume it's a class for a font-awesome or other icon
                                <i key={index} className={icon} />
                            )
                        ))}
                    </div>
                </div>
                <div id="project-thumbnail-container">
                    {children.map((item, i) => (
                        <Link to={item.link} key={i}
                              className="project-thumbnail"
                        >
                            <img src={item.photo} alt=""/>
                            <div className="thumbnail-text-wrapper">
                                <h3>{item.name}</h3>
                                <div className={"thumbnail-description"}  style={{color: isAccent===true?"var(--color-primary)":"var(--color-secondary)"}}>{item.summary}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProjectCatalogue;