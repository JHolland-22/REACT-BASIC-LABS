// Task.js
import React from 'react';

const Task = (props) => {
    return (
        <div className="card" style={{ backgroundColor: props.done ? 'lightgrey' : '#5bb4c4' }}>
            <p className="title">{props.title}</p>
            <p>{props.description}</p>
            <p>Due: {props.deadline}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button> {/* Button to mark as done */}
        </div>
    );
}

export default Task;
