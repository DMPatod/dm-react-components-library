import React from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsFillExclamationCircleFill, BsCheckCircle } from "react-icons/bs";
import Line from "../Line";

const StatusModal = (props) => {
  const {
    appState = { messages: [], errors: [] },
    closeModal = () => {},
  } = props;

  return (
    <Modal show={appState.status !== undefined} size="lg">
      <Modal.Header style={{justifyContent: "center"}}>
        {appState.status ? <h2>Parabens</h2> : <h2>Atenção</h2>}
      </Modal.Header>
      <Modal.Body>
        <Row>
          <div
            style={{
              padding: 10,
              marginRight: 5,
              borderRight: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            {appState.status ? (
              <BsCheckCircle color="green" size={150} />
            ) : (
              <BsFillExclamationCircleFill color="red" size={150} />
            )}
          </div>
          <Col>
            <Row>
              <Col>
                <h4>Messages</h4>
              </Col>
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
                    <div>Dev: </div>
                    <Col>{JSON.stringify(err)}</Col>
                  </Row>
                ))}
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col md={{ span: 2 }}>
            <Button onClick={() => closeModal()}>Fechar</Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default StatusModal;
