import React from "react";
import { useForm } from "react-hook-form";

const AddFriend = ({onAddfriend}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submithandler=(data)=>{
    onAddfriend(data);
    reset();
  }

  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center gap-2.5 ">
        <h1 className="text-3xl ">Add <span className="text-violet-900 font-semibold">Buddy</span></h1>
        <form onSubmit={handleSubmit(submithandler)} className="flex flex-col justify-center items-center gap-2.5">
            <input className="px-5 py-1 w-fit h-10 bg-zinc-300 rounded-2xl text-[20px]"  type="text"{...register("name",{required:true})} placeholder="Enter your name"/>
            <input  className="px-5 py-1 w-fit h-10 bg-zinc-300 rounded-2xl text-[20px]" type="text"{...register("image",{required:true})} placeholder="link for the image" />
            <input  className="px-5 py-1 w-fit h-10 bg-zinc-300 rounded-2xl text-[20px]" type="text"{...register("stack",{required:true})} placeholder="Enter profession/skill" />
            <input  className="px-5 py-1 w-fit h-10 bg-zinc-300 rounded-2xl text-[20px]" type="text"{...register("Description",{required:true})} placeholder="Enter description" />
            <button type="submit" className="px-4 py-3 text-white bg-violet-900 rounded-3xl mt-2">Add Buddy</button>

        </form>


    </div>
  );
};

export default AddFriend;
