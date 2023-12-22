import React from 'react';
import { useDrag } from 'react-dnd';

const DragableTask = ({task}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'to-do',
        item:{id:task.id, task},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))


    return (
        <div ref={drag} className={`card ${isDragging? 'opacity-25' : 'opacity-100'} ${task.priority=='low'? 'bg-red-300': task.priority=='modarate'? 'bg-yellow-200' : 'bg-green-300'} rounded`} >
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
    );
};

export default DragableTask;