import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import axios from "axios";

const CreateTask = () => {
  const { user } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const task = { ...data, email: user?.email, status: "to-do" };
    console.log(task);
    axios
      .post("http://localhost:5000/addTask", task)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Task added into To-Do list");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    data: allTask,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5000/addTask?email=${user?.email}`
      );
      return response.data;
    },
  });

  return (
    <div className=" px-4 mt-5 ">
      <h1 className="bg-cyan-400 py-4 px-10 mb-2 rounded-e-badge w-1/2 font-medium ">
        Today's Task
      </h1>
      <div className="grid grid-cols-3  gap-4 justify-between ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" col-span-2 h-fit bg-cyan-300 rounded-lg  shadow-lg p-14 flex flex-col gap-2 "
        >
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="title"
            className="input group focus:border-cyan-400 focus:outline-none rounded-badge "
          />
          <textarea
            {...register("description", { required: true })}
            className="textarea  h-24 focus:border-cyan-400 focus:outline-none rounded-xl "
            placeholder="description"
          ></textarea>
          <div className="grid grid-cols-2 gap-2 justify-between">
            <input
              {...register("date", { required: true })}
              type="date"
              className="input group focus:border-cyan-400 focus:outline-none rounded-badge "
            />
            <input
              {...register("time", { required: true })}
              type="time"
              className="input  focus:border-cyan-400 focus:outline-none rounded-badge "
            />
          </div>
          <select
            {...register("priority", { required: true })}
            className="input focus:border-cyan-400 focus:outline-none rounded-badge"
            required
          >
            <option disabled>Select Priority</option>
            <option value="high">High</option>
            <option value="modarate">Modarate</option>
            <option value="low">Low</option>
          </select>
          <input
            type="submit"
            value="Add task"
            className="btn text-black bg-cyan-500 border-none text-base hover:bg-black  hover:text-cyan-500 btn-primary mt-3 rounded-badge w-full"
            required
          />
        </form>
        <div className="shadow-xl rounded">
          <h1 className="rounded-t bg-cyan-300 py-4 text-center px-4 font-medium ">
            Previous Task
          </h1>
          <div className="grid grid-cols-1 gap-2 my-4 px-4 overflow-y-scroll h-96 ">
            {allTask?.map((task) => (
             <div className={`card ${task.priority=='low'? 'bg-red-300': task.priority=='modarate'? 'bg-yellow-200' : 'bg-green-300'} rounded`}>
             <div className="card-body p-5">
               <div className="flex justify-between gap-3 flex-wrap">
               <h2 className="card-title capitalize">{task.title}</h2>
                 <div className="w-2/5 px-2">
                   {task?.priority == "low" && (
                     <p className="bg-red-500 w-full rounded-badge text-center capitalize  text-white text-sm">
                       {task?.priority}
                     </p>
                   )}
                   {task?.priority == "modarate" && (
                     <p className="bg-yellow-500 w-full rounded-badge text-center capitalize  text-white text-sm">
                       {task?.priority}
                     </p>
                   )}
                   {task?.priority == "high" && (
                     <p className="bg-green-500 w-full rounded-badge text-center capitalize  text-white text-sm">
                       {task?.priority}
                     </p>
                   )}
                 </div>
               </div>
               <p>{task.description}</p>

               <div className="card-actions justify-between">
                 <div>Deadline: {task.date}</div>
                 <div>
                   {task.time} {parseInt(task.time) >= 12 ? "pm" : "am"}
                 </div>
               </div>
             </div>
           </div>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
