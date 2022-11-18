import React from "react";
import classes from "./Header.module.css";


const Header = (props) => {
  return(
    <div>
        <div className={classes.header} >
        <h1>HOD</h1>
        <div className={classes.heart} onClick={props.onShown} ></div>
        
        </div>
      
    </div>
  )  
}

export default Header; 