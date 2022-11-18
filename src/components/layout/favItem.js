import classes from './favItem.module.css';

const FavItem = (props) => {
  

  return (
    <li className={classes['fav-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <img src={props.image} alt={props.name} />
          <span className={classes.descr}>{props.descrip}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
      </div>
    </li>
  );
};

export default FavItem;
