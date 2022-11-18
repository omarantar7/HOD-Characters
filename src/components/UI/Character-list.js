import classes from './Character-list.module.css';

const CharacterList = (props) => {
    return(
    <section className={`${classes.all} ${props.className}`}>
        {props.children}
    </section>
    )
}

export default CharacterList;