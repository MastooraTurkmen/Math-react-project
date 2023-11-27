import React from "react"

export default function GetNewProblemButton({clickHandler, disabled}) {
    return (
        <button 
            type="button" 
            className="new-problem-button" 
            onClick={clickHandler}
            disabled={disabled}
        >
            <span>New Problem</span>
        </button>
    )
}