import React from "react";

const Task = (props) => {
  const priorityStyles = {
    low: { color: 'yellow' },    
    medium: { color: 'orange' },  
    high: { color: 'red' }        
  };

  return (
    <div className="card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>Due: {props.deadline}</p>
      <p style={priorityStyles[props.priority]}>Priority: {props.priority.charAt(0).toUpperCase() + props.priority.slice(1)}</p> {/* Display the priority */}
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
