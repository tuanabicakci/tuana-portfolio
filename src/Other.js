import React, {useState} from 'react';
import {GameDesign, UnpublishedWork, WebDesign} from "./Components/Work";
import {Link} from "react-router-dom";
import YoutubeEmbed from "./Components/YoutubeEmbed";
import {Carousel} from "react-responsive-carousel";
import clsx from "clsx";
import PropTypes from "prop-types";
import {css, styled} from "@mui/system";
import {Modal as BaseModal} from "@mui/base/Modal/Modal";
import Code from "./Code";
import "./Other.css"

function Other(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [work, setWork] = useState(0);
    return (

            <div className={"page"}>
                <div className={"page"}>
                    <span style={{color: '#729b79', fontSize: "2rem"}}>UNPUBLISHED WORK</span>
                    <div className="wrapper">
                        <div className="container">
                            {UnpublishedWork.map((item, i) => (
                                <TriggerButton className={"other-thumbnail"} onClick={() => {
                                    setWork(item);
                                    handleOpen();
                                }} type="button" key={i}>
                                    <a style={{textDecoration:"none",color:"#000"}} href={item.pdf} className="thumbnail-wrapper">
                                        <img className={"other-image"} src={item.photo} alt=""/>
                                        <h3 style={{color: '#729b79'}}>{item.name}</h3>
                                        <br/>
                                        Abstract:
                                        <div style={{fontWeight:"normal"}}>{item.description}</div>
                                        <br/>
                                        <div className={"skills-container"}>
                                            {item.skills && item.skills.map((item, i) => (
                                                <h4 className={"skills"} key={i}>
                                                    {item}
                                                </h4>
                                            ))}
                                        </div>
                                    </a>
                                </TriggerButton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

    );
}
const Backdrop = React.forwardRef((props, ref) => {
    const {open, className, ...other} = props;
    return (
        <div
            className={clsx({'MuiBackdrop-open': open}, className)}
            ref={ref}
            {...other}
        />
    );
});

Backdrop.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool,
};

const blue = {
    200: '#99CCFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0066CC',
};

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const TriggerButton = styled('button')(
    ({theme}) => css`
      font-family: "indivisible", sans-serif;
      font-weight: bold;
      font-style: normal;
      padding: .7rem;
      //width: 25rem;
      //height: 23rem;
      background: rgba(255, 255, 255, 0.7);
      border-radius: .3rem;
      color: #333333;
      margin: 1rem;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
        // color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);


      &:hover {
        background:  rgba(255,255,255,0.5);
        border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
      }

      &:active {
        background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
      }

      &:focus-visible {
        box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
        outline: none;
      }
    `,
);

export default Other;