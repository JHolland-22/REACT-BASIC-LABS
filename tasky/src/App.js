import React, { useState } from 'react';
import './App.css';
import Task from './components/Task';
import AddTaskForm from './components/Forum'; 
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", done: false, priority: "high" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false, priority: "medium" },
      { id: 3, title: "Tidy up", description: "Organize living space", deadline: "Today", done: false, priority: "low" }
    ]
  });

  const [formState, setFormState] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "" 
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({ tasks });
  };

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({ tasks });
  };

  const formChangeHandler = (event) => {
    const { name, value } = event.target; 
    setFormState((prevState) => ({
      ...prevState,
      [name]: value 
    }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = { ...formState, id: uuidv4() }; 

    tasks.push(form); 
    setTaskState({ tasks }); 
    setFormState({ title: "", description: "", deadline: "", priority: "" }); 
  };

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => (
        <Task 
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)}
          deleteTask={() => deleteHandler(index)}
          priority={task.priority} 
        />
      ))}
      <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}

export default App;
