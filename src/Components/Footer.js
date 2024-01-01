import React from 'react';
import "./Footer.css"

function Footer(props) {
    return (
        <div id={"footer"}>
            Lets get in touch!
            <br/>
            <nav id={"socials"}>
                <a href={`mailto:bicakcitauan@gmail.com`}><i className="fa-solid fa-envelope"></i></a>
                <a href="https://github.com/tuanabicakci"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/tuana-bicakci/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://www.artstation.com/tuanabicakci"><i className="fa-brands fa-artstation"></i></a>
                <a href="https://tuanabicakci.itch.io/"><i className="fa-brands fa-itch-io"></i></a>
            </nav>
        </div>
    );
}

export default Footer;