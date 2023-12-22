import axios from "axios";
import React from "react";
import { useDrag } from "react-dnd";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

const DragableTask = ({ task, refetch }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "to-do",
    item: { id: task.id, task },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

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
        axios.delete(`http://localhost:5000/addTask/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            swal("Good job!", "Task has been deleted", "success");
          }
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  const HandleEdit = () => {
    console.log("edit");
  };
  return (
    <div ref={drag} className={`card  `}>
      <div
        className={`card-body p-5 rounded ${
          isDragging ? "opacity-25" : "opacity-100"
        } ${
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
              <FiEdit2 onClick={HandleEdit} className="cursor-pointer" />
              <AiOutlineDelete
                onClick={() => HandleDelete(task._id)}
                className="cursor-pointer"
              />
            </div>
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
  );
};

export default DragableTask;
