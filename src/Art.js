import React, {useState, useEffect} from 'react';
import "./Art.css"
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {styled, css} from '@mui/system';
import {Modal as BaseModal} from '@mui/base/Modal';
import {Carousel} from 'react-responsive-carousel';
import {GraphicDesign, Music, ThreeD, VideoEdit} from "./Components/Work";
import YoutubeEmbed from "./Components/YoutubeEmbed";

export default function Art() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [work, setWork] = useState(0);

    return (
        <div className={"page"}>
            Check out my <a href="">ArtStation</a> account to see my work in high quality!
            <span style={{color: '#565a75', fontSize: "2.5vw"}}>GRAPHIC DESIGN/ILLUSTRATION</span>
                <div className="container">
                    {GraphicDesign.map((item, i) => (
                        <TriggerButton onClick={() => {
                            setWork(item);
                            handleOpen();
                        }} type="button" key={i}>
                                <img className={"thumbnail-images"} src={item.photo} alt=""/>
                                <h3 className={"thumbnail-text-wrapper"}>{item.name}</h3>
                        </TriggerButton>
                    ))}
                </div>
            <span style={{color: '#565a75',fontSize:"2.5vw",marginTop:"1rem"}}>3D MODELLING/TEXTURING</span>
            <div className="container">
                {ThreeD.map((item, i) => (
                    <TriggerButton onClick={() => {
                        setWork(item);
                        handleOpen();
                    }} type="button" key={i}>
                        <img className={"thumbnail-images"} src={item.photo} alt=""/>
                        <h3 className={"thumbnail-text-wrapper"}>{item.name}</h3>
                    </TriggerButton>
                ))}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                slots={{backdrop: StyledBackdrop}}
            >
                <ModalContent>
                        <div>
                            {work.a ? (
                                <Carousel className={"carousel"}>
                                    {work.a && work.a.map((item, i) => (
                                        <div className={"popUp-images-container"} key={i}>
                                            <img className={"popup-images"} src={item} alt=""/>
                                        </div>
                                    ))}
                                </Carousel>
                            ) : (
                                <div className={"popUp-images-container"}>
                                    <img className={"popup-images"} src={work.photo} alt=""/>
                                </div>
                            )}
                        </div>

                    {/*<div className={"popUp-images-container"}>*/}
                    {/*    <img className={"popup-images"} src={work.photo} alt=""/>*/}
                    {/*</div>*/}
                    <h3 className={"popup-title"}>{work.name}</h3>
                    <div className={"skills-container"}>
                        Skills:
                        {work.skills && work.skills.map((item, i) => (
                            <h4 className={"skills"} key={i}>
                                {item}
                            </h4>
                        ))}
                    </div>
                    <div className="description-container">
                        <pre className={"popup-description"}>{work.description}</pre>
                    </div>
                </ModalContent>
            </Modal>



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

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  max-height: 50%;
  margin: auto;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.7);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({theme}) => css`
      font-family: "indivisible", sans-serif;
      font-weight: bold;
      font-style: normal;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow-y: scroll;
      background: rgb(86, 90, 117);
      background: linear-gradient(180deg, #282d3c 50%, rgb(2, 6, 12) 80%);
      padding: 24px;
      color: #E8EBEA;
      height: 90vh;

      & .modal-title {
        line-height: 1.5rem;
        margin: 0 0 8px;
      }

      & .modal-description {
        line-height: 1.5rem;
        font-weight: 400;
        color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
        margin: 0 0 4px;
      }

      @media only screen and (max-width: 800px) {
        min-width: 80vw;
      }
    `,
);

const TriggerButton = styled('button')(
    ({theme}) => css`
      width: 25rem;
      height: 23rem;
      background-size: contain;
      position: relative;
      text-align: center;
      text-decoration: none;
      color: #E8EBEA;
      transition: ease-in 0.3s;
      background: rgba(255, 255, 255, 0.7);
      margin: 1rem;
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: none;

      &:hover {
        -webkit-box-shadow: 0px 0px 39px -6px rgba(246,145,151,1);
        -moz-box-shadow: 0px 0px 39px -6px rgba(246,145,151,1);
        box-shadow: 0px 0px 39px -6px rgba(246,145,151,1);
      }
      
      @media only screen and (max-width: 965px){
      width: 10rem;
        height: 10rem;
    } @media only screen and (max-width: 550px){
      width: 7rem;
        height: 7rem;
    }





    `,
);