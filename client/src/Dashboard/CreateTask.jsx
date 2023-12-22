import React from "react";
import { useForm } from "react-hook-form";

const CreateTask = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

  return (
    <div className="grid grid-cols-3 gap-4 justify-between px-4 mt-5">
       <div className="w-full col-span-2">
        <h1 className="bg-cyan-400 py-4 px-10 mb-2 rounded-e-badge w-1/2 font-medium ">Today's Task</h1>
       <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#22d3ee48] rounded-lg  shadow-lg p-14 flex flex-col gap-2 "
    >
      <input
       {...register("title", { required: true})}
        type="text"
        placeholder="title"
        className="input group focus:border-cyan-400 focus:outline-none rounded-badge "
      />
      <textarea
         {...register("description", { required: true})}
        className="textarea  h-24 focus:border-cyan-400 focus:outline-none rounded-xl "
        placeholder="description"
      ></textarea>
      <div className="grid grid-cols-2 gap-2 justify-between">
      <input
         {...register("date", { required: true})}
            type="date"
            className="input group focus:border-cyan-400 focus:outline-none rounded-badge "
          />
        <input
           {...register("time", { required: true})}
            type="time"
            className="input  focus:border-cyan-400 focus:outline-none rounded-badge "
          />
      </div>
      <select    {...register("priority", { required: true})} className="input focus:border-cyan-400 focus:outline-none rounded-badge" required>
        <option  disabled>
          Select Priority
        </option>
        <option value="high">High</option>
        <option value="modarate">Modarate</option>
        <option value="low">Low</option>
      </select>
      <input
            type="submit"
            value='Add task'
            className="btn text-black bg-cyan-400 border-none text-base hover:bg-black  hover:text-cyan-400 btn-primary mt-3 rounded-badge w-full"
            required
          />
    </form>
       </div>
    <div>
        
    </div>
    </div>
  );
};

export default CreateTask;
