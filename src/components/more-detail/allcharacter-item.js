import React from 'react';
import classes from './allcharacter-item.module.css';

const AllcharacterItem = (props) => {
    return(
        <React.Fragment>
         <div className={classes['chars-item']}>
              <h2>{props.name}</h2>
              <div className={classes.summary}>
              <img className={classes.image} src={props.image} alt={props.name} />
             <span className={classes.descr}>{props.description}</span>
            </div>
         </div>
        </React.Fragment>
    )
}

export default AllcharacterItem;