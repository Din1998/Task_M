import { useDrag } from "react-dnd"
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'



export default function TaskCard({text,handleShow}) {

  

  console.log()
  return (
    <div className='todo__card'>
      <p>{text}</p>
      <button 
        className='update__actn__btn'
        onClick={handleShow}
      >
      <FontAwesomeIcon className='actn__btn__icon' icon={faEdit} />
      </button>
    </div>
  )
}