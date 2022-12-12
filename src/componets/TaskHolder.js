import '../App.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';

export default function TaskHolder({todos,setTodos,setEditTodo,editTodo}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTaskDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  // const handleUpdate = ({id}) => {
  //   const findeTodo = todos.finde((todo) => todo.id === id);
  //   setEditTodo(findeTodo);
  // }

  return(
    <div className='task__holder__wraper'>
      <div className='task__holder'>
        <p className='task__holder__title'>To do</p>
        {todos.map((todo) => (
          <li 
          className='todo__item'
          key={todo.id}
          >
            <p className='task'>{todo.title}</p>
            <button className='update__actn__btn'
              onClick={handleShow}
            >
              <FontAwesomeIcon className='actn__btn__icon' icon={faEdit} />
            </button>

            <Modal show={show} onHide={handleClose}>
              <form >
              <Modal.Header closeButton>
              <Modal.Title>Update || Delete</Modal.Title>
              </Modal.Header>

                <input
                className="task__input"
                placeholder="Write Your Task"
                // value={todo.title}
                required
                type="text" 
                />
                <button
                  className='delete__task__btn'
                  onClick={() =>handleTaskDelete(todo)}>
                    Delete
                  </button>
                  {/* <button
                  className='update__task__btn'
                  onClick={() =>handleUpdate(todo)}>
                    Update
                  </button> */}
                <Modal.Footer>
                  <button
                  className='update__task__btn'
                  onClick={handleClose}>
                    Close
                  </button>
                  
                </Modal.Footer>
              </form>
            </Modal>
          </li>
        ))

        }
      </div>
      <div className='task__holder'>
        <p className='task__holder__title'>In Progress</p>
        
      </div>
      <div className='task__holder'>
        <p className='task__holder__title'>Done</p>
       
      </div>
    </div>
    
  )
}