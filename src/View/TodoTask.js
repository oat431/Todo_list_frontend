import React, { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useParams } from "react-router";
import Axios from "axios";

function TodoTask() {
  let {id,title} = useParams();
  const [taskState, setTaskState] = useState({ task: [] });

  useEffect(() => {
    Axios.get(
      `http://167.99.64.31:5039/api/todo/${id}/allTasks`,
      {
        header: { "Access-Control-Allow-Origin": "*" },
      }
    )
      .then((res) => {
        setTaskState({
          task: res.data,
        });
      })
      .catch((err) => {
        console.log("some err happen");
      });
  });

  return (
    <Container>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col xl={12} md={12}>
          <ListGroup as="ul">
            {taskState.task.map((item, index) => {
              return (
                <ListGroup.Item as="li">
                  <strong>{index + 1 + " " + item.task}</strong> {item.description}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default TodoTask;
