import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Axios from "axios";
class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo_list: [],
    };
  }

  componentDidMount() {
    Axios.get("http://167.99.64.31:5039/api/todo/todolist", {
      header: { "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => {
        this.setState({ todo_list: res.data });
      })
      .catch((err) => {
        console.log("some err happen");
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xl={12} md={12}>
            <h1>This is the all todo list</h1>
          </Col>
        </Row>
        <Row>
          <Col xl={12} md={12}>
            <ListGroup as="ul">
              {this.state.todo_list.map((item, index) => {
                return (
                  <ListGroup.Item as="li">
                    <Link
                      to={`/todotask/${item.todo_no}/${item.title}`}
                    ><strong>{index + 1}</strong> {item.title}</Link>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoList;
