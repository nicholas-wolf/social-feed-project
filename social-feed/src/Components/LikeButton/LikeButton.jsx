import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import "./LikeButton.css";


const LikeButton = (props) => {
    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive")
        }
    }

        return (
            <div>
                <button><BsHandThumbsUp/> className={buttonClass}  onClick={handleClick}>{props.message}</button>
            </div>
        )
    }

export default LikeButton; 