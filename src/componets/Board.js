import {useState} from "react";

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
      <TaskHolder
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
    
  )
}
