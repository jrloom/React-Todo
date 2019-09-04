import React from "react";
import TodoList from "./components/TodoComponents/TodoList";

const tasks = [
  {
    task: "Make task list",
    id: 1,
    completed: false
  },
  {
    task: "Do Stuff",
    id: 2,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = { tasks, taskName: "" };
  }

  addTask = (event, taskName) => {
    event.preventDefault();
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({ tasks: [...this.state.tasks, newTask] });
  };

  completeTask = taskID => {
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskID) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    });
  };

  clearTask = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    });
  };

  handleChange = event => {
    this.setState({ taskName: event.target.value });
  };

  handleSubmit = event => {
    this.addTask(event, this.state.taskName);
    this.setState({ taskName: "" });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Do Stuff</h1>
          <TodoList
            tasks={this.state.tasks}
            taskName={this.state.taskName}
            addTask={this.addTask}
            completeTask={this.completeTask}
            clearTask={this.clearTask}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
