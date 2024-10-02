import React from 'react';

const Task = (props) => {
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>{props.description}</p>  
            <p>Due: {props.deadline}</p>
        </div>
    );
}

export default Task;
