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
          ⚠️ <strong className='text-danger'> WARNING </strong> ⚠️
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className='text-start'>
          {' '}
          ❌ This Action is <strong>Non-Reversible</strong>. Are You Sure? ❌
        </h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Maybe Not ⏏️
        </Button>
        <Button
          variant='warning'
          onClick={() => {
            onConfirm();
            props.onHide();
          }}
        >
          I'm Sure 🚮
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmModal;
