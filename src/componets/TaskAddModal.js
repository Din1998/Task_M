import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from 'react-bootstrap/Modal';
import '../App.css';


export default function TaskAddModal({input,setInput,todos,setTodos}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const onInputChange = (event) => {
    setInput(event.target.value)
  }


  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos,{id: uuidv4(),title:input}]);
    setInput("")
  }

  return(
    <>
       <button 
       className='createTask__actnbtn'
       
       onClick={handleShow}
       >
        + Create Task
      </button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={onFormSubmit}>
          <input
          className="task__input"
          placeholder="Write Your Task"
          value={input}
          autoFocus
          required
          onChange={onInputChange}
          type="text" />
          <Modal.Footer>
            <button
            className='add__task__btn'
            onClick={handleClose}>
              Save
            </button>
          </Modal.Footer>
        </form>
       
      </Modal>
    </>
  )
}
