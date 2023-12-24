import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import axios from "axios";
import { FaCircle } from "react-icons/fa";
import DragableTask from "./DragableTask";

const CreateTask = () => {
  // context
  const { user } = useContext(AuthContext);

  // create task form 
  const { register, handleSubmit } = useForm();

  // task created
  const onSubmit = (data) => {
    const task = { ...data, email: user?.email, status: "To-Do" };
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

  // get data by email
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between items-center">
        <h1 className="bg-cyan-400 py-4 px-10 mb-2 rounded w-72 font-medium ">
          Add Today's Task
        </h1>
        <div className="sm:flex gap-2  mb-5 hidden justify-end ">
          <h1 className="flex gap-1 items-center text-cyan-400 ">
            High <FaCircle className="text-green-300" />
          </h1>
          <h1 className="flex gap-1 items-center text-cyan-400  ">
            Modarate <FaCircle className="text-yellow-300" />
          </h1>
          <h1 className="flex gap-1 items-center text-cyan-400 ">
            Low <FaCircle className="text-red-300" />
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-y-4 md:gap-4 justify-between ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" col-span-2 h-fit bg-cyan-300 rounded  shadow-lg p-5 md:p-14 flex flex-col gap-2 "
        >
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="title"
            className="input focus:border-none focus:outline-none  rounded"
          />
          <textarea
            {...register("description", { required: true })}
            className="textarea  h-24 focus:border-none  focus:outline-none  rounded"
            placeholder="description"
          ></textarea>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-between">
            <input
              {...register("date", { required: true })}
              type="date"
              className="input  focus:border-none focus:outline-none rounded"
            />
            <input
              {...register("time", { required: true })}
              type="time"
              className="input   focus:border-none  focus:outline-none rounded"
            />
          </div>
          <select
            {...register("priority", { required: true })}
            className="input focus:border-none focus:outline-none rounded"
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
            className="btn text-black bg-cyan-500 border-none text-base hover:bg-black rounded hover:text-cyan-500 btn-primary mt-3  w-full"
            required
          />
        </form>
        <div>
        <div className="flex gap-2 justify-start mb-5 sm:hidden ">
          <h1 className="flex gap-1 items-center text-cyan-400 ">
            High <FaCircle className="text-green-300" />
          </h1>
          <h1 className="flex gap-1 items-center text-cyan-400  ">
            Modarate <FaCircle className="text-yellow-300" />
          </h1>
          <h1 className="flex gap-1 items-center text-cyan-400 ">
            Low <FaCircle className="text-red-300" />
          </h1>
        </div>
        <div className="shadow-xl rounded">
          <h1 className="rounded-t bg-cyan-300 py-4 text-center px-4 font-medium ">
            Previous Added Task
          </h1>
          <div className="grid grid-cols-1 gap-2 my-4 px-4 overflow-y-scroll h-96 ">
            {allTask?.map((task) => (
              <div className={`card rounded`}>
                <DragableTask
                  task={task}
                  key={task._id}
                  refetch={refetch}
                ></DragableTask>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
