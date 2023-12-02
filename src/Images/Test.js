import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CGD from "../Images/CGD.png";
import ALBF from "../Images/ALBF.png";
import ALBB from "../Images/ALBB.png";
function Test(props) {
    return (
        <div>
            <Carousel>
                <div>
                    <img src={CGD}/>

                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Test;