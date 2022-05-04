import { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import "./LikeButton.css";


const LikeButton = () => {
    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){
        if(buttonClass === "inactive"){
            setButtonClass("likeActive");
        }
        else{
            setButtonClass("inactive")
        }
    }

        return (
            <div>
                <button className={buttonClass}  onClick={handleClick}>
                    <BsHandThumbsUp/> 
                </button>
            </div>
        )
    }

export default LikeButton; 