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

            <div className="wrapper">
                <span className={"title"}
                      style={{color: '#729b79', fontSize: "2rem"}}>GRAPHIC DESIGN/ILLUSTRATION</span>
                <div className="container">
                    {GraphicDesign.map((item, i) => (
                        <TriggerButton onClick={() => {
                            setWork(item);
                            handleOpen();
                        }} type="button" key={i}>
                            <div className="thumbnail-wrapper">
                                <img className={"thumbnail-images"} src={item.photo} alt=""/>
                                <h3>{item.name}</h3>
                            </div>
                        </TriggerButton>
                    ))}
                </div>
            </div>
            <span style={{color: '#729b79', fontSize: "2rem", marginTop: "5rem"}}>3D MODELLING/TEXTURING</span>
            <div className="wrapper">
                <div className="container">
                    {ThreeD.map((item, i) => (
                        <TriggerButton onClick={() => {
                            setWork(item);
                            handleOpen();
                        }} type="button" key={i}>
                            <div className="thumbnail-wrapper">
                                <img className={"thumbnail-images"} src={item.photo} alt=""/>
                                <h3>{item.name}</h3>
                            </div>
                        </TriggerButton>
                    ))}
                </div>
            </div>
            <span style={{color: '#729b79', fontSize: "2rem", marginTop: "5rem"}}>VIDEO EDITING</span>
            <div className="wrapper">
                <div className="container">
                    {VideoEdit.map((item, i) => (
                        <TriggerButton onClick={() => {
                            setWork(item);
                            handleOpen();
                        }} type="button" key={i}>
                            <div className="thumbnail-wrapper">
                                <img className={"thumbnail-images"} src={item.photo} alt=""/>
                                <h3>{item.name}</h3>
                            </div>
                        </TriggerButton>
                    ))}
                </div>
            </div>
            <span style={{color: '#729b79', fontSize: "2rem", marginTop: "5rem"}}>SOUND DESIGN/MUSIC</span>
            <div className="wrapper">
                <div className="container">
                    {Music.map((item, i) => (
                        <TriggerButton onClick={() => {
                            setWork(item);
                            handleOpen();
                        }} type="button" key={i}>
                            <div className="thumbnail-wrapper">
                                <img className={"thumbnail-images"} src={item.photo} alt=""/>
                                <h3>{item.name}</h3>
                            </div>
                        </TriggerButton>
                    ))}
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                slots={{backdrop: StyledBackdrop}}
            >
                <ModalContent>
                    <div>
                        {work.link ? (
                            <div className={"popUp-images-container"}>
                                <YoutubeEmbed embedId={work.link}/>
                            </div>
                        ) : (
                            <div className={"carousel-container"}>
                                {work.a ? (
                                    <Carousel className={"car"}>
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
                        )
                        }
                    </div>


                    {/*<div className={"popUp-images-container"}>*/}
                    {/*    <img className={"popup-images"} src={work.photo} alt=""/>*/}
                    {/*</div>*/}
                    <div>
                        <h3 className={"popup-title"}>{work.name}</h3>
                        <div className={"skills-container"}>
                            Skills:
                            {work.skills && work.skills.map((item, i) => (
                                <h4 className={"skills"} key={i}>
                                    {item}
                                </h4>
                            ))}
                        </div>
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
  
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const ModalContent = styled('div')(
    ({theme}) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border-radius: 8px;
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      box-shadow: 0 4px 12px ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;
      color: ${theme.palette.mode === 'dark' ? grey[50] : grey[900]};
      max-width: 90%;
      max-height: 90%;
      
      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
      }

      & .modal-description {
        margin: 0;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${theme.palette.mode === 'dark' ? grey[400] : grey[800]};
        margin-bottom: 4px;
      }
    `,
);

const TriggerButton = styled('button')(
    ({theme}) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.5rem;
      line-height: 1.5;
      padding: 8px 8px;
      border-radius: 8px;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
      color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      width: 20rem;
      height: 20rem;
      margin: .2rem;

      &:hover {
        background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
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