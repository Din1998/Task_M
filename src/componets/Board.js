import {useState} from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import BoardHeader from "./BoardHeader";
import TaskHolder from "./TaskHolder";


export default function Board() {

  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  const [editTodo,setEditTodo] = useState(null)

  return(
    <div className="board">
      <BoardHeader
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <DndProvider backend={HTML5Backend}>
        <TaskHolder
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </DndProvider>
     
    </div>
    
  )
}
