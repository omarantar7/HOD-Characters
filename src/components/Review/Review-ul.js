import Reviewli from "./Review-li";

const Reviewul = (props) => {
  return (
    <ul>
      {props.revs.map((rev) => (
        <Reviewli key={rev.id} text={rev.text} />
      ))}
    </ul>
  );
};

export default Reviewul;
