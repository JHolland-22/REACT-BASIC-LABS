import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", description: "Organize the living room", deadline: "Today" } // Added description
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
        <Task 
          key={task.id}  // Ensure each task has a unique key
          title={task.title}
          description={task.description || "No description available"}  // Fallback if description is missing
          deadline={task.deadline}
        />
      ))}
    </div>
  );
}

export default App;
