import React, { useContext } from "react";
import Button from "../UI/Button";
import classes from "./CharacterItem.module.css";
import FavContext from "../../store/context";

const CharacterItem = (props) => {
  const favCtx = useContext(FavContext);
  const addToFavHandler = () => {
    favCtx.addItem({
      id: props.id,
      name: props.name,
      image: props.image,
      descrip: props.descrip
    });
  }
  return (
    <div className={classes.items}>
      <div>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} />
        <p>{props.descrip}</p>
      </div>
      <div className={classes.button}>
        <Button onClick={addToFavHandler}>Favorite</Button>
      </div>
    </div>
  );
};

export default CharacterItem;
