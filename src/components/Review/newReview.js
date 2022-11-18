import { useState } from "react";
import RevForm from "./Review-form";
const NewReview = (props) => {
    const [isLoading,setIsLoading] = useState(false);
    const sendingReviewHandler = async (review) => {
        setIsLoading(true);
        const response = await fetch('https://hod-review-default-rtdb.firebaseio.com/here.json',{
          method:'POST',
          body:JSON.stringify({text:review}),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const revData = await response.json();
        
        const generatedId = revData.name;
        const createdTask = { id: generatedId, text: review };
  
        props.onAddNewReview(createdTask);
        setIsLoading(false);
    }

    return(
        <RevForm onAddReview={sendingReviewHandler} Loading={isLoading} />
    )
}

export default NewReview