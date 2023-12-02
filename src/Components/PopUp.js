import React, {useEffect} from 'react';
import "./PopUp.css";



function PopUp(props) {
    const useOverFlowHidden = () => {
        useEffect(() => {
            document.body.style.overflow = 'hidden'

            return () => {
                document.body.style.overflow = 'auto' // cleanup or run on page unmount
            }
        }, [])
    }
    return (props.trigger)?(
        <div className={"popUp"}>
            <div className="popup-inner">
                <button className="close-btn" onClick={()=>props.setTrigger(false)}>
                    <i className="fa-solid fa-x"></i>
                </button>
                {props.children}
            </div>
        </div>
    ):"";
}

export default PopUp;