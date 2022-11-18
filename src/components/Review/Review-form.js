import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './Review-form.module.css';
import { useRef, useState } from "react";
const RevForm = (props) => {
  const revRef = useRef('');
  const [isValid,setIsValid] = useState(false);
  const [isTouched,setIsTouched] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();

    setIsTouched(true);

    
    const text = revRef.current.value;
    if(text.trim() === ''){
      setIsValid(false)
      return;
     }
    setIsValid(true);
   props.onAddReview(text);

   revRef.current.value='';

  }
  const reviewInputIsInvalid= !isValid && isTouched;
  
return(
    <Card>
    <h1>
    Review
  </h1>
    <form onSubmit={submitHandler} className={classes[ reviewInputIsInvalid ? 'formm'&&'invalid' : 'formm']}>
      <input ref={revRef} type="text"  id="text"  placeholder="Review" />
      <Button > {props.Loading ? 'Posting ...' : 'ReView'}</Button>
    </form>
    {reviewInputIsInvalid && <p className={classes['error-text']}>Review must not be empty!.</p>}
    </Card>
)
}

export default RevForm;