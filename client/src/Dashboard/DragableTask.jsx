import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import toast from "react-hot-toast";

const DragableTask = ({ task, refetch }) => {

  function drag(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id); 
  }

  // delete
  const HandleDelete = (id) => {
    console.log("delete");
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://task-manager-alpha-bice.vercel.app/addTask/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              refetch();
              toast.success("Task deleted successfully");
            }
          });
      } else {
        toast("Your task is safe");
      }
    });
  };

  // edit
  const HandleEditClick = (id) => {
    document.getElementById(`my_modal_${id}`).showModal();
  };
  // modal close
  const HandleModalClose = (id) => {
    document.getElementById(`my_modal_${id}`).close();
  };

  // task update
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, id) => {
    const task = { ...data };
    console.log(id);
    console.log(task);
    axios
      .put(`https://task-manager-alpha-bice.vercel.app/addTask/${id}`, task)
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          toast.success("Task Updated successfully");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        id={`${task._id}`}
        draggable="true"
        onDragStart={drag}
        className={`card `}
      >
        <div
          className={`card-body p-5 rounded  ${
            task.priority == "low"
              ? "bg-red-300"
              : task.priority == "modarate"
              ? "bg-yellow-200"
              : "bg-green-300"
          }`}
        >
          <div className="flex justify-between gap-3 flex-wrap">
            <h2 className="card-title capitalize">{task.title}</h2>
            <div className="w-2/5 px-2">
              <div className="flex gap-2 justify-end items-center">
                <FiEdit2
                  onClick={() => HandleEditClick(task._id)}
                  className="cursor-pointer"
                />
                <AiOutlineDelete
                  onClick={() => HandleDelete(task._id)}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <p className="overflow-auto">{task.description}</p>
          <div className="card-actions justify-between">
            <div>Deadline: {task.date} </div>
            <div>
              {task.time} {parseInt(task.time) >= 12 ? "pm" : "am"}
            </div>
          </div>
        </div>
      </div>
      <dialog id={`my_modal_${task._id}`} className="modal">
        <div className="modal-box  rounded bg-cyan-300">
          <div className="mb-10">
            <button
              onClick={() => HandleModalClose(task._id)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </div>
          <form
            method="dialog"
            className=""
            onSubmit={(e) =>
              handleSubmit((data) => onSubmit(data, task._id))(e)
            }
          >
            <h1
              className=" font-bold mb-5 text-black bg-cyan-400 py-2 px-4 rounded text-center
             capitalize"
            >
              Edit: {task.title}
            </h1>
            <div className="flex flex-col gap-2 ">
              <input
                {...register("title", { required: true })}
                type="text"
                placeholder="title"
                defaultValue={task.title}
                className="input focus:border-none focus:outline-none  rounded"
              />
              <textarea
                {...register("description", { required: true })}
                className="textarea  h-24 focus:border-none  focus:outline-none  rounded"
                placeholder="description"
                defaultValue={task.description}
              ></textarea>
              <div className="grid grid-cols-2 gap-2 justify-between">
                <input
                  {...register("date", { required: true })}
                  type="date"
                  defaultValue={task.date}
                  className="input  focus:border-none focus:outline-none rounded"
                />
                <input
                  {...register("time", { required: true })}
                  type="time"
                  defaultValue={task.time}
                  className="input   focus:border-none  focus:outline-none rounded"
                />
              </div>
              <select
                {...register("priority", { required: true })}
                className="input focus:border-none focus:outline-none rounded"
                required
                defaultValue={task.priority}
              >
                <option disabled>Select Priority</option>
                <option value="high">High</option>
                <option value="modarate">Modarate</option>
                <option value="low">Low</option>
              </select>
              <input
                onClick={() => HandleModalClose(task._id)}
                type="submit"
                value="Update task"
                className="btn text-black bg-cyan-500 border-none text-base hover:bg-black rounded hover:text-cyan-500 btn-primary mt-3  w-full"
                required
              />
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DragableTask;
