import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import '../App.css';


export default function TaskAddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
       <button 
       className='createTask__actnbtn'
       
       onClick={handleShow}
       >
        + Create Task
      </button>

      <Modal show={show} onHide={handleClose}>
        <input
        className="task__input"
        placeholder="Write Your Task"
        required
        type="text" />
        <Modal.Footer>
          <button
          className='add__task__btn'
          onClick={handleClose}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
