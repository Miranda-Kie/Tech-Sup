import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
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
          {/* //<h4>Centered Modal</h4> */}
          <p>
            {props.description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button class="btn btn-dark btn-lg hover" onClick={props.onHide} >Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
 export default MyVerticallyCenteredModal;