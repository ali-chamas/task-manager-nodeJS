import React from "react";
import { sendRequest } from "../../../request-method/request";

const TaskPopup = ({ task, setOpenTask, setTrigger }) => {
  const deleteTask = async () => {
    try {
      const res = await sendRequest("DELETE", `/tasks/delete/${task._id}`);
      setOpenTask();
      setTrigger((t) => !t);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="popup-container">
      <div className="bg-purple-950  rounded-lg p-10 flex flex-col gap-5 items-center relative">
        <h1 className="font-bold text-lg">{task.title}</h1>
        <p>{task.description}</p>
        <button className="btn-style bg-red-500" onClick={deleteTask}>
          delete
        </button>
        <button
          className="absolute top-0 right-0 m-5"
          onClick={() => setOpenTask(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TaskPopup;
