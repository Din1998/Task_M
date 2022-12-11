import BoardHeader from "./BoardHeader";
import TaskHolder from "./TaskHolder";


export default function Board() {

  return(
    <div className="board">
      <BoardHeader />
      <TaskHolder />
    </div>
    
  )
}