import React from 'react';
import "./ProjectDescription.css"

const ProjectDescription=({description,teamMembers})=>{
    return(
        <div id={"description-wrapper"}>
            <div className={"block"} id={"description-container"}>
                <div>{description}</div>
                <div>
                    <h3>TEAM</h3>
                    <ul>
                        {teamMembers.map((teamMember, index) => (
                            <li key={index}>
                                <a href={teamMember.link} target={"_blank"}>
                                    {teamMember.name}
                                </a> : {teamMember.role}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default ProjectDescription;