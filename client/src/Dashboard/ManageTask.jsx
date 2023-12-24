import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDrag, useDrop } from "react-dnd";
import DragableTask from "./DragableTask";
import toast from "react-hot-toast";

const ManageTask = () => {
  // state
  const { user } = useContext(AuthContext);
  const [todoStatus, setTodoStatus] = useState([]);
  const [ongoingStatus, setOngoingStatus] = useState([]);
  const [completedStatus, setCompletedStatus] = useState([]);

  // tanstack query
  const {
    data: allTask,
    refetch,
    isLoading,
  } = useQuery({
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

  // drop into section
  const [{ isOver: isOverToDo }, dropToDo] = useDrop(() => ({
    accept: "to-do",
    drop: (item) => addItemTo(item, "To-Do"),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverOngoing }, dropOngoing] = useDrop(() => ({
    accept: "to-do",
    drop: (item) => addItemTo(item, "Ongoing"),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverCompleted }, dropCompleted] = useDrop(() => ({
    accept: "to-do",
    drop: (item) => addItemTo(item, "Completed"),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // drop item add
  const addItemTo = (droppedItem, targetSection) => {
    const { task } = droppedItem;
    // console.log(task)
    if (allTask) {
      axios
        .patch(
          `https://task-manager-alpha-bice.vercel.app/addTask/${task._id}`,
          {
            status: targetSection,
          }
        )
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // task filter by status
  useEffect(() => {
    setTodoStatus(allTask?.filter((item) => item.status === "To-Do") || []);
    setOngoingStatus(
      allTask?.filter((item) => item.status === "Ongoing") || []
    );
    setCompletedStatus(
      allTask?.filter((item) => item.status === "Completed") || []
    );
  }, [allTask]);

  const findMostRecentDeadline = async () => {
    const mostRecent = await allTask.find((task) => {
     return  new Date(`${task.date}T${task.time}`) < new Date();
    });

    toast(`${mostRecent.title} deadline is end. Please delete the task.`)
    console.log(mostRecent);
  };

  useEffect(() => {
    findMostRecentDeadline();
  }, [allTask]);


  return (
    <div className="overflow-x-auto">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-between m-5 ">
        <div
          className={`md:h-fit shadow-xl overflow-y-auto h-96 ${
            isOverToDo ? "bg-slate-200" : ""
          } rounded`}
          ref={dropToDo}
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
          className={` md:h-fit shadow-xl overflow-y-auto h-96${
            isOverOngoing ? "bg-slate-200" : ""
          } rounded`}
          ref={dropOngoing}
        >
          <h1 className="rounded-t  bg-cyan-400 py-4 text-center px-4 font-medium ">
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
          className={` md:h-fit shadow-xl overflow-y-auto h-96 ${
            isOverCompleted ? "bg-slate-200" : ""
          } rounded`}
          ref={dropCompleted}
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
