import React from "react";
import "./Modal.css"


const ModalComponent = (props) => {
    if (!props.show) {
        return null
    }
    console.log(props.show)
    let bkng;
    if (props.show == "1") {
        bkng =  
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <img className="imglogo" src="logo_biosbike.png" />
        </div>
    }
    if (props.show == "2") {
        bkng = 
        <div className={`modal2 ${props.show ? 'show': ''}`} onClick={props.onClose}></div>
    }
    return (
        <div>
            {bkng}
        </div>
    )

}

export default ModalComponent