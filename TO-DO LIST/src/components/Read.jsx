import React, { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";


const Read = () => {

  const[todos, settodos]= useContext(todocontext)
  
 
  const deletehandler = (id, todos) => {
    settodos(todos.filter((todo) => id !== todo.id));
    toast.error("Todo deleted!")
  
  };
  const rendertodos = todos.map((todo) => {
    return (
      <li key={todo.id} className="mb-1">
        {todo.title} |{" "}
        <button
          className="px-2 py-1 bg-red-500 hover:bg-red-600 text-zinc-200 rounded-full text-xs"
          onClick={() => deletehandler(todo.id, todos)}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <h1 className="mt-5 pl-2">Pending todos</h1>
      <br />
      <ol className="list-decimal ml-6">{rendertodos} </ol>
    </div>
  );
};

export default Read;
