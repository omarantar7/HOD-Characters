import classes from './Review-li.module.css';
const Reviewli = (props) => {
return(
    <li className={classes.list}>
        <h3>{props.text}</h3>
    </li>
)
}

export default Reviewli;