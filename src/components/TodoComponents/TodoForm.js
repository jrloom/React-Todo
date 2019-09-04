import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const TodoForm = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Input  fluid icon={"edit"} name="task" onChange={props.handleChange} type="text" value={props.taskName} />
      <Button.Group size="large" widths="6">
        <Button>Add a Task</Button>
        <Button.Or />
        <Button onClick={props.clearTask}>Clear Finished Tasks</Button>
      </Button.Group>
    </Form>
  );
};

export default TodoForm;
