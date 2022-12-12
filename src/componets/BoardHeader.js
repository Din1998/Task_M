import '../App.css';
import TaskAddModal from './TaskAddModal';

export default function BoardHeader({input,setInput,todos,setTodos}) {
  

  return(
    <div className="board__header">
      <h5 className='current__board__name'>Every Day Task</h5>
      <TaskAddModal
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  )
}