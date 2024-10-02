import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", description: "Organize living space", deadline: "Today", done: false }
    ]
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks]; // Create a copy of the tasks
    tasks[taskIndex].done = !tasks[taskIndex].done; // Toggle the done state
    setTaskState({ tasks }); // Update the state with the modified tasks
    console.log(`${taskIndex} ${tasks[taskIndex].done}`); // Log the task index and its done status
  };

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (              
        <Task 
          title={task.title}
          description={task.description || "No description available"} // Fallback if description is empty
          deadline={task.deadline}
          key={task.id}
          done={task.done} // Pass the done status to the Task component
          markDone={() => doneHandler(index)} // Pass doneHandler as a prop
        />
      ))}
    </div>
  );
}

export default App;
