import React from "react";
import { Card } from "semantic-ui-react";

const Todo = props => {
  return (
    <Card.Group centered itemsPerRow={1}>
      {props.tasks.map(task => (
        <Card raised key={task.id} className={`item${task.completed ? " completed" : ""}`} onClick={() => props.completeTask(task.id)}>
          <span className={`${task.completed ? "strike" : ""}`}>
            <span className={`${task.completed ? "complete" : ""}`}>{task.task}</span>
          </span>
        </Card>
      ))}
    </Card.Group>
  );
};

export default Todo;
