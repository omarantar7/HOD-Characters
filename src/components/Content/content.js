import React,{Fragment} from "react";
import Banner from "../elments/banner";
import Character from "../elments/Character";
import Review from "../Review/Review";
const Content = (props) => {
return(
    <Fragment>
       <Banner />
       <Character onLook={props.onLook}/>
       <Review />
    </Fragment>
)
}

export default Content;