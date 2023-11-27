import React from "react" 

export default function StartButton({clickHandler}) {
    return (
        <button 
            className="start-button"
            type="button"
            onClick={clickHandler}
        >
            <span>Start</span> 
        </button>
    )
}