import '../App.css'
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import TaskCard from './TaskCard';

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
          className='todo__li'
          key={todo.id}
          >
            <TaskCard text={todo.title} handleShow={handleShow}/>
            
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              <Modal.Title>Update || Delete</Modal.Title>
              </Modal.Header>
              <form >
                <input
                className="task__input"
                placeholder="Update Your Task"
                // value={todo.title}
                required
                type="text" 
                />
               
                <Modal.Footer>
                <button
                type='submit'
                  className='delete__task__btn'
                  onClick={() =>handleTaskDelete(todo)}>
                    Delete
                  </button>
                  <button
                  className='update__task__btn'
                 >
                    Update
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