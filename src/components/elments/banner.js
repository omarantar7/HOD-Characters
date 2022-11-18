import React, { Fragment, useState } from "react";
import classes from "./banner.module.css";
import Button from "../UI/Button";

const Banner = () => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <Fragment>
        <div className={classes.banner}>
          <h2>HouseOfTheDragon</h2>
          <p>
            House of the Dragon is an American fantasy drama television series.
            An independent prequel to Game of Thrones 2011-2019, it is the
            second show in the franchise, created by George R. R. Martin and
            Ryan Condal for HBO. Condal and Miguel Sapochnik are the
            showrunners. Based on parts of the novel Fire & Blood,
            {show ? (
              <span>
                the series is set about 200 years before the events of Game of
                Thrones, 172 years before the birth of Daenerys Targaryen,
                descendant of the eponymous royal house, and 100 years after the
                Seven Kingdoms are united by the Targaryen Conquest. Featuring
                an ensemble cast, the show portrays the beginning of the end of
                House Targaryen, the events leading up to and covering the
                Targaryen civil war of succession, known as the "Dance of the
                Dragons".
              </span>
            ) : (
              ''
            )}
          </p>
          
            <Button className={classes.button} onClick={showHandler}>
              {!show ? 'Showmore' : 'Showless'}
            </Button>
        </div>
    
    </Fragment>
  );
};

export default Banner;
