import React from "react";
import  ReactDOM  from "react-dom";
import classes from './Fav.module.css';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose} /> 
}
const Overlay = (props) => {
    return (<div className={classes.modal} >
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
    )
}
const both = document.getElementById("overlayBack");
const Fav = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,both)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,both)}
    </React.Fragment>
}

export default Fav;