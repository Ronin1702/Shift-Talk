import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function ConfirmModal({ onConfirm, ...props }) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          ⚠️ Warning ⚠️
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> ❌ Deleting Will Be Non-reversible, Are You Sure? ❌</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Cancel
        </Button>
        <Button
          variant='primary'
          onClick={() => {
            onConfirm();
            props.onHide();
          }}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
