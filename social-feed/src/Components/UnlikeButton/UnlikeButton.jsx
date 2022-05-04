import { useState } from "react";
import { BsHandThumbsDown } from "react-icons/bs";
import "./UnlikeButton.css";


const UnlikeButton = () => {
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
                <button className={buttonClass}  onClick={handleClick}>
                    <BsHandThumbsDown/>
                </button>
            </div>
        )
    }

export default UnlikeButton; 