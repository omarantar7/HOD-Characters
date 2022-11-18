import { useContext } from "react";
import Fav from "../UI/Fav";
import FavItem from "./favItem";
import classes from "./FavoritCart.module.css";
import FavContext from "../../store/context";
const FavoriteCart = (props) => {
  const favCtx = useContext(FavContext);
  const hasItem = favCtx.items.length === 0;
  const favItemRemoveHandler = (id) => {
    favCtx.removeItem(id);
  };

  const favItems = (
    <ul>
      {favCtx.items.map((item) => (
        <FavItem
          key={item.id}
          name={item.name}
          image={item.image}
          descrip={item.descrip}
          onRemove={favItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Fav onClose={props.onClose}>
      {!hasItem ? (
        <div className={classes.cartitems}>{favItems}</div>
      ) : (
        <p className={classes.ff}>You dont have a favorite character</p>
      )}
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fav>
  );
};

export default FavoriteCart;
