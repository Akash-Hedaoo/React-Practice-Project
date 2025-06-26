import React from "react";
import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useContext } from "react";
import { todocontext } from "../Wrapper";

const Create = () => {
  
  const[todos, settodos]= useContext(todocontext)


  const {
    register,
    handleSubmit,
    reset,
    formState: { erros },
  } = useForm();

  const Submithandler = (data) => {
    data.iscompleted=false;
    data.id=nanoid();
    settodos([...todos,data])

    toast.success("Todo created")

    reset();
    
  };

  return (
    <div>
      <h1 className="text-center font-semibold mb-2 ">TO-DO LIST</h1>
      <form onSubmit={handleSubmit(Submithandler)}>
        <input
        {...register("title" ,{required:"title can not be empty"})}
          type="text"
          placeholder="Enter Task"
          className="rounded-md px-3 py-1 m-2 text-zinc-700"
        />
        <br />
        <button className="px-2 py-1  bg-blue-600 text-zinc-200 rounded-md text-xl mt-3 ml-2 hover:bg-blue-800">
          Create Todo
        </button>
        <br />
      </form>
    </div>
  );
};

export default Create;
