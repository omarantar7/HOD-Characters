import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
    <div className={classes.fooyer}>
        <ul >
            <li>
                home
            </li>
            <li>
                Characters
            </li>
            <li>
                Dragons
            </li>
        </ul>
        <h3>&copy; fans</h3>   
    </div>
    )
} 

export default Footer;