import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="task" value={props.taskName} onChange={props.handleChange} />
      <button>Add Task</button>
      <button onClick={props.clearTask}>Clear Finished</button>
    </form>
  );
};

export default TodoForm;
