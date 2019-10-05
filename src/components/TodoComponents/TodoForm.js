import React from "react";
import { Button, Form, Input } from "semantic-ui-react";

const TodoForm = props => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Input fluid icon={"edit"} name="task" onChange={props.handleChange} type="text" value={props.taskName} />
      <Button.Group size="large" widths="4">
        <Button content={"Add a Task"} />
        <Button.Or />
        <Button content={"Clear Finished Tasks"} onClick={props.clearTask} />
      </Button.Group>
    </Form>
  );
};

export default TodoForm;
