import React from "react";

const Title = (props) => {
    return (
        <div className="header">
            <h1>Task board</h1>
            <p>Number of tasks is: {props.counter}</p>
        </div>
    )
}

export default Title;
