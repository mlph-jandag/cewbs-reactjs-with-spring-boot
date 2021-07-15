import React from "react";
import { Button } from "react-bootstrap";

const Modal = ({ show, handler }) => {
  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={handler}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modal;
