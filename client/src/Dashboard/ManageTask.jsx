import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDrag, useDrop } from "react-dnd";
import DragableTask from "./DragableTask";

const ManageTask = () => {
  const { user } = useContext(AuthContext);
  const [todoStatus, setTodoStatus] = useState([]);
  const [ongoingStatus, setOngoingStatus] = useState([]);
  const [completedStatus, setCompletedStatus] = useState([]);

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

  const addItemTo = (droppedItem, targetSection) => {
    const { task } = droppedItem;
    if (allTask) {
      axios
        .patch(`http://localhost:5000/addTask/${task._id}`, {
          status: targetSection,
        })
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

  useEffect(() => {
    setTodoStatus(allTask?.filter((item) => item.status === "To-Do") || []);
    setOngoingStatus(
      allTask?.filter((item) => item.status === "Ongoing") || []
    );
    setCompletedStatus(
      allTask?.filter((item) => item.status === "Completed") || []
    );
  }, [allTask]);

  return (
    <div className="grid grid-cols-3 gap-5 justify-between m-5 ">
      <div
        className={`h-fit shadow-xl ${
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
        className={` h-fit shadow-xl ${
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
        className={` h-fit shadow-xl ${
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
  );
};

export default ManageTask;
