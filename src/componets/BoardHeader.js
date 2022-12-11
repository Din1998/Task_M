import '../App.css';
import TaskAddModal from './TaskAddModal';

export default function BoardHeader() {
  

  return(
    <div className="board__header">
      <h1 className='current__board__name'>Hellow</h1>
      <TaskAddModal />
    </div>
  )
}