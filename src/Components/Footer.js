import React from 'react';
import "./Footer.css"
import {Socials} from "./Socials";

function Footer(props) {
    return (
        <div id={"footer-wrapper"}>
            <div id="footer" className={"block"}>
                <p>Lets get in touch!</p>
                <div className={"socials"}>
                    {Socials.map((item, i) => (
                        <a key={i} href={item.link}>
                            <i className={item.icon}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;