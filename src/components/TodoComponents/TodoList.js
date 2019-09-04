import React from "react";
import "./Todo.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = props => {
  return (
    <div>
      <TodoForm taskName={props.taskName} addTask={props.addTask} handleChange={props.handleChange} handleSubmit={props.handleSubmit} />
      <Todo tasks={props.tasks} completeTask={props.completeTask} />
    </div>
  );
};

export default TodoList;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
