import React from "react";
import "./Todo.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Container, Segment } from "semantic-ui-react";

const TodoList = props => {
  return (
    <Container>
      <Segment className="formArea" raised>
        <TodoForm
          taskName={props.taskName}
          addTask={props.addTask}
          clearTask={props.clearTask}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
        />
      </Segment>
      <Segment raised>
        <Todo tasks={props.tasks} completeTask={props.completeTask} />
      </Segment>
    </Container>
  );
};

export default TodoList;
