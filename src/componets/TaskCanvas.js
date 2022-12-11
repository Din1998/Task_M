
import Drawer from "./Drawer";
import '../App.css'
import Board from "./Board";

export default function Taskcanvas() {

  return(
    <div className="task__canvas">
    <Drawer/>
    <Board />
    </div>
  )
}