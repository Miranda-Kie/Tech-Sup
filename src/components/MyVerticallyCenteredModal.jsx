import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark btn-lg hover" onClick={props.onHide} >Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
 export default MyVerticallyCenteredModal;