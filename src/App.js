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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = { tasks };
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

  completeTask = taskID => {};

  clearTask = event => {};

  render() {
    return (
      <div className="App">
        <div>
          <h1>Do Stuff</h1>
          <TodoList tasks={this.state.tasks} addTask={this.addTask} />
        </div>
      </div>
    );
  }
}

export default App;
