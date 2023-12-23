import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const DeadlineToast = ({task}) => {
  useEffect(() => {
    setupNotification(task);
  }, [task]);

  const setupNotification = (task) => {
    const { date, time } = task;
    const deadline = new Date(`${date}T${time}`);
    const currentTime = new Date();

    if (currentTime > deadline) {
        
        showNotification(task.title);
      } 
  };

  const showNotification = (taskTitle) => {
    toast(`Task Deadline Over: ${taskTitle}`)
   
  };

};

export default DeadlineToast;