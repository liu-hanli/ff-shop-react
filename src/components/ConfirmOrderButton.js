import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function ConfirmOrderButton({ total, onConfirm }) {
  const [visible, setVisible] = useState(false)

  const handleConfirm = () => {
    onConfirm()
    setVisible(false)
  }

  return (
    <>
      <Button
        disabled={total === 0}
        variant='success'
        style={{
          width: '100%',
        }}
        onClick={() => setVisible(true)}
      >
        Make the order
      </Button>
      <Modal show={visible} onHide={() => setVisible(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to make the order?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setVisible(false)}>
            Close
          </Button>
          <Button variant='success' onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmOrderButton
