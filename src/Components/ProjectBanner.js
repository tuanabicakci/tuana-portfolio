import React from 'react';
import "./ProjectBanner.css"

const ProjectBanner = ({ image, name,date, link,icons }) => {
    return(
        <div id="background" style={{backgroundImage: `url(${image})`}}>
            <div id="overlay"></div>
            <div className="block" id={"hero-container"}>
                <h2>{name}</h2>
                <span>{date}</span>
                <br/>
                <a href={link} target={"_blank"}>PLAY</a>
                <br/>
                <div className="icons">
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
        </div>

    )
}

export default ProjectBanner;