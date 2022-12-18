import '../App.css'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import CreateClmnActBtn from "../componentLib/CreatClmnActBtn";

export default function TaskHolder({todos,setTodos,setEditTodo,editTodo}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTaskDelete = ({id}) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  console.log(todos);

  //React D&D
  const [inprog,setInProg] = useState([])
  const [done,setDone] = useState([])  

  //Create React D&D Ref
  const [{isOver},addToInprogRef] = useDrop({
    accept:"todo",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  })
  console.log(isOver)

  const [{ isOver: isTodoOver }, removeFromInProgRef] = useDrop({
    accept: "done",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{isOver: isDone},addToDoneRef] = useDrop({
    accept:"inprogress",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  })
  console.log(isDone)

  //Create D&D funtion

  const moveTodoToInProg = (todo) => {
    console.log(todo);
    setTodos((prev) => prev.filter((id,i) => todo.index !== i));
    setInProg((prev) => [...prev, todo]);
  };

  const moveTodoToDone = (todo) => {
    console.log(todo);
    setInProg((prev) => prev.filter((id,i) => todo.index !== i));
    setDone((prev) => [...prev, todo]);
  };


  const removeTodoFromInProg = (todo) => {
    setDone((prev) => prev.filter((id,i) => todo.index !== i));
    setTodos((prev) => [...prev, todo]);
  };



















  // const handleUpdate = ({id}) => {
  //   const findeTodo = todos.finde((todo) => todo.id === id);
  //   setEditTodo(findeTodo);
  // }

  return(
    <div className='task__holder__wraper'>
      <div className='task__holder'  ref={removeFromInProgRef}>
        <p className='task__holder__title'>To do</p>
        {todos.map((todo,i) => (
          <li 
          className='todo__li'
          key={todo.id}
          >
            <TaskCard 
            key={i}
            item={todo} 
            index={i}
            todoType="todo"
            onDropTodo={moveTodoToInProg}
            handleShow={handleShow}
            />
            
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
      <div className='task__holder' ref={addToInprogRef}>
        <p className='task__holder__title'>In Progress</p>
        {/*  */}
        {inprog.map((todo,i) => (
          <li 
          className='todo__li'
          key={todo.id}
          >
            <TaskCard 
            key={i}
            index={i}
            item={todo} 
            handleShow={handleShow}
            todoType="inprogress"
            onDropTodo={moveTodoToDone}

            />
            
            
          </li>
        ))
        }
      </div>
      <div className='task__holder' ref={addToDoneRef}>
        <p className='task__holder__title'>Done</p>
       {/*  */}
       {done.map((todo,i) => (
          <li 
          className='todo__li'
          key={todo.id}
          >
            <TaskCard 
            key={i}
            index={i}
            item={todo} 
            handleShow={handleShow}
            todoType="done"
            onDropTodo={removeTodoFromInProg}
            />
            
            
          </li>
        ))
       }
      </div>
      <CreateClmnActBtn />
    </div>
   
  )
}