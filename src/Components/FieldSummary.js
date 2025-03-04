import React from 'react';
import "./FieldSummary.css"
import {WebDesign} from "./Work";
import {Link} from "react-router-dom";

const FieldSummary = ({ heading, mainIcon,icons, children, showRecent,bgColor }) => {
    return (
        <div id="fs-wrapper" style={{backgroundColor:bgColor}}>
            <div id={"fs-container"} className="block">
                <div id="fs-header">
                    <div>
                        <i className={mainIcon}></i>
                        <h2>{heading}</h2>
                    </div>
                    <div className="icons">
                        {icons.map((icon, index) => (
                            <i key={index} className={icon}/>
                        ))}
                    </div>
                </div>
                <div id="project-thumbnail-container">
                    {children.map((item, i) => (
                    <Link to={item.link} key={i}
                          className={showRecent===true?(item.tag === "recent" ? "project-thumbnail" : "hidden"):"project-thumbnail"}
                     >
                        <img src={item.photo} alt=""/>
                        <div className="thumbnail-text-wrapper">
                            <h3>{item.name}</h3>
                            <div className={"thumbnail-description"}>{item.summary}</div>
                        </div>
                    </Link>
                    ))}
                </div>
                <div id="see-more">See More <i className="fa-solid fa-arrow-right"></i></div>
            </div>

        </div>
    );
};

export default FieldSummary;