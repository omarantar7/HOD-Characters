import React from "react";
import  ReactDOM  from "react-dom";
import classes from './character-root.module.css';
const Allcharacters = (props) => {
    return(
        <div className={classes.backgr}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const CharacterRoot = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Allcharacters>{props.children}</Allcharacters>,document.getElementById('characters'))}
        </React.Fragment>
    )
}

export default CharacterRoot;