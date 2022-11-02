import React, { useState } from 'react'
import Modal from './Modal';

export default function App() {

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  }

  const hideModal = () => {
    setShow(false);
  }

  return (
    <div>
      <Modal
        show={show}
        handleClose={hideModal}
      >
        Modal
        </Modal>
      <button
        type='button'
        onClick={showModal}
      >
        Open modal
      </button>
    </div>
  )
}
