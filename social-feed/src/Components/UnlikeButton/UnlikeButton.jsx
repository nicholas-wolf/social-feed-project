import { useState } from "react";
import { BsHandThumbsDown } from "react-icons/bs";
import "./UnlikeButton.css";


const UnlikeButton = (props) => {
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
                <button><BsHandThumbsDown/> className={buttonClass}  onClick={handleClick}>{props.BsHandThumbsDown}</button>
            </div>
        )
    }

export default UnlikeButton; 