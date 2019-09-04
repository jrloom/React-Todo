import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }

  handleChange = event => {
    this.setState({ taskName: event.target.value });
  };

  handleSubmit = event => {
    this.props.addTask(event, this.state.taskName);
    this.setState({ itemName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="task" value={this.state.taskName} onChange={this.handleChange} />
        <button>Add Task</button>
        <button>Clear Task</button>
      </form>
    );
  }
}

export default TodoForm;
