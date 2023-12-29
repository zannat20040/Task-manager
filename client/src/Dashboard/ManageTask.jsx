import React, { useContext, useEffect,  useState } from "react";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import DragableTask from "./DragableTask";
import toast from "react-hot-toast";

const ManageTask = () => {
  // state
  const { user } = useContext(AuthContext);
  const [todoStatus, setTodoStatus] = useState([]);
  const [ongoingStatus, setOngoingStatus] = useState([]);
  const [completedStatus, setCompletedStatus] = useState([]);
  const [isDroping, setIsDroping] = useState(null);

  // tanstack query
  const {
    data: allTask,
    refetch  } = useQuery({
    queryKey: ["allTask"],
    queryFn: async () => {
      const response = await axios.get(
        `https://task-manager-alpha-bice.vercel.app/addTask?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("access-token")}`,
          },
        }
      );
      return response.data;
    },
  });



  // task filter by status
  useEffect(() => {
    setTodoStatus(allTask?.filter((item) => item.status === "To-Do") || []);
    setOngoingStatus(
      allTask?.filter((item) => item.status === "Ongoing") || []
    );
    setCompletedStatus(
      allTask?.filter((item) => item.status === "Completed") || []
    );

      // deadline find
  if(allTask){
    const mostRecent = [...allTask].reverse().find((task) =>new Date(`${task.date}T${task.time}`) < new Date());
    toast(`${mostRecent.title} deadline is end. Please delete the task.`);
  }
  
  }, [allTask]);



  // drop function
  function allowDrop(ev, drop) {
    ev.preventDefault();
    setIsDroping(drop);
  }

  function drop(ev, dropbox) {
    ev.preventDefault();
    const taskId = ev.dataTransfer.getData("text/plain");

    axios
      .patch(`https://task-manager-alpha-bice.vercel.app/addTask/${taskId}`, {
        status: dropbox,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setIsDroping(null);
  }

  return (
    <div className="overflow-x-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-between m-5 ">
        <div
          onDrop={(ev) => drop(ev, "To-Do")}
          onDragOver={(ev) => allowDrop(ev, "To-Do")}
          className={`md:h-fit shadow-xl ${
            isDroping === "To-Do" ? "bg-slate-200" : ""
          } overflow-y-auto h-96  rounded`}
        >
          <h1 className="rounded-t bg-yellow-200 py-4 text-center px-4 font-medium ">
            To-Do
          </h1>

          <div className="grid grid-cols-1 gap-2 my-4 px-4 ">
            {todoStatus?.map((task) => (
              <DragableTask
                task={task}
                key={task._id}
                refetch={refetch}
              ></DragableTask>
            ))}
          </div>
        </div>
        <div
          onDrop={(ev) => drop(ev, "Ongoing")}
          onDragOver={(ev) => allowDrop(ev, "Ongoing")}
          className={`md:h-fit shadow-xl ${
            isDroping === "Ongoing" ? "bg-slate-200" : ""
          } overflow-y-auto h-96  rounded`}
        >
          <h1 className="rounded-t bg-cyan-400 py-4 text-center px-4 font-medium ">
            Ongoing
          </h1>

          <div className="grid grid-cols-1 gap-2 my-4 px-4 ">
            {ongoingStatus?.map((task) => (
              <DragableTask
                task={task}
                key={task._id}
                refetch={refetch}
              ></DragableTask>
            ))}
          </div>
        </div>
        <div
          onDrop={(ev) => drop(ev, "Completed")}
          onDragOver={(ev) => allowDrop(ev, "Completed")}
          className={`md:h-fit shadow-xl ${
            isDroping === "Completed" ? "bg-slate-200" : ""
          } overflow-y-auto h-96  rounded`}
        >
          <h1 className="rounded-t bg-green-300 py-4 text-center px-4 font-medium ">
            Completed
          </h1>

          <div className="grid grid-cols-1 gap-2 my-4 px-4 ">
            {completedStatus?.map((task) => (
              <DragableTask
                task={task}
                key={task._id}
                refetch={refetch}
              ></DragableTask>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
