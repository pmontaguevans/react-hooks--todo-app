import React, { useState } from "react";
import TodoForm from './TodoForm';
import uuid from "uuid/v1";

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { title: "Cook dinner", id: 1 },
    { title: "Do laundry", id: 2 },
    { title: "Read up on React", id: 3 }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, { title: task, id: uuid() }]);
  };
  
  return (
    <div className="todo-list">
      <ul>
        {tasks.map(task => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
      <TodoForm addTask={addTask} /> 
    </div>
  );
};

export default TodoList;
