import { useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./Review.module.css";
import Reviewul from "./Review-ul";
import NewReview from "./newReview";
const Review = () => {
  const [getRev,setGetRev] = useState([]);
  const [isLoading,setIsLoding] = useState(false);
  const [error,setError] = useState(null);
const fetchReviewsHandler = useCallback(async () => {
  setIsLoding(true);
  setError(null);
  try{
  const response = await fetch('https://hod-review-default-rtdb.firebaseio.com/here.json');
  if (!response.ok ){
    throw new Error ("something went wrong!");
  }
  const revData = await response.json();

  const loadedRev=[];
  for (const key in revData){
    loadedRev.push({
      id:key,
      text:revData[key].text
    })
  }

 setGetRev(loadedRev);

  }catch(error){
    setError(error.message);
  }
  setIsLoding(false);
},[]);
useEffect(() => {
fetchReviewsHandler();
},[fetchReviewsHandler]);

const reviewAddHandler = (review) => {
  setGetRev((prevReview) => prevReview.concat(review));
};

  return (
    <Card className={classes.space}> 
        <NewReview onAddNewReview={reviewAddHandler} />
        {!isLoading && <Reviewul revs={getRev}/>}
        {isLoading && <p className={classes.loading}>Loading ...</p>}
        {!isLoading && error && <p className={classes.error}>{error}</p>}
    </Card>
  );
};

export default Review;