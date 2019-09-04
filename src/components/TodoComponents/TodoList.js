import React from "react";
import "./Todo.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = props => {
  return (
    <div>
      <TodoForm
        taskName={props.taskName}
        addTask={props.addTask}
        clearTask={props.clearTask}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
      <Todo tasks={props.tasks} completeTask={props.completeTask} />
    </div>
  );
};

export default TodoList;
