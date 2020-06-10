import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import Line from "../Line";
import 'bootstrap/dist/css/bootstrap.min.css';

const StatusModal = (props) => {
  const {
    appState = { messages: [], errors: [] },
    closeModal = () => {},
  } = props;

  return (
    <Modal show={appState.status !== undefined} size="lg">
      <Modal.Header>
        {appState.status ? "Good Message" : "Bad Message"}
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col>{appState.status ? "Good Icon" : "Bad Icon"}</Col>
          <Col>
            <Row>
              <Col>Messages</Col>
              <Line />
            </Row>
            <Row>
              {appState.messages.map((item, index) => (
                <Row key={index}>
                  <Col>{item}</Col>
                </Row>
              ))}
              {process.env.NODE_ENV !== "production" &&
                appState.errors.map((err, index) => (
                  <Row key={index}>
                    <Col>DEV</Col>
                    <Col>{JSON.stringify(err)}</Col>
                  </Row>
                ))}
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col md={{ span: 2, offset: 10 }}>
            <Button onClick={() => closeModal()}>Fechar</Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default StatusModal;
