import React from "react";
import "./App.scss";
import TodoList from "./components/TodoComponents/TodoList";
import { Container, Header, Segment } from "semantic-ui-react";

const tasks = [];

for (let i = 0, len = localStorage.length; i < len; ++i) {
  tasks.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
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
    if(taskName !== '') {
    this.setState({ tasks: [...this.state.tasks, newTask] })
    localStorage.setItem(newTask.id, JSON.stringify(newTask))
    }
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
    this.state.tasks.filter(task => (task.completed ? localStorage.removeItem(task.id) : null));
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
      <Container textAlign={"center"}>
        <Segment raised textAlign={"center"}>
          <Header as="h1">Do Stuff</Header>
          <TodoList
            tasks={this.state.tasks}
            taskName={this.state.taskName}
            addTask={this.addTask}
            completeTask={this.completeTask}
            clearTask={this.clearTask}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </Segment>
      </Container>
    );
  }
}

export default App;
