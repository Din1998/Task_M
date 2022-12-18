import { useDrag } from "react-dnd"
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'



export default function TaskCard({item,index,handleShow,todoType,onDropTodo}) {

  const [{idDrugging},dragRef] = useDrag({
    type: todoType,
    item: () => ({...item,index}),
    end: (item,monitor) => {
      const dropResult = monitor.getDropResult();
      if(item && dropResult) {
        onDropTodo(item)
      }
     },
     collect: (monitor) => ({
      isDrugging: monitor.isDragging()
     })
  })

  console.log()
  return (
    <div className='todo__card' ref={dragRef}>
      <p>{item.title}</p>
      <button 
        className='update__actn__btn'
        onClick={handleShow}
      >
      <FontAwesomeIcon className='actn__btn__icon' icon={faEdit} />
      </button>
    </div>
  )
}