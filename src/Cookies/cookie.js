import React from 'react';
import classes from './Cookie.module.css';
const Cookie = (props) => {
    return(
    <React.Fragment>
        <h3 className={classes.close} onClick={props.Quit}>x</h3>
        <div className={classes.cook}>
            <p>this site is created for HOD fans & builded using reactjs</p>
        </div>
    </React.Fragment>
    )
}

export default Cookie;