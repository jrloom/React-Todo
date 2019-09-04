import React from "react";

const Todo = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <div key={task.id}>{task.task}</div>
      ))}
    </div>
  );
};

export default Todo;
