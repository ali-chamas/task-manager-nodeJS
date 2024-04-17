import React, { useState } from "react";
import { sendRequest } from "../../../request-method/request";

const AddTaskPopup = ({ setOpen, columnId, setTrigger }) => {
  const [task, setTask] = useState({ title: "", desc: "" });

  const addTask = async () => {
    const newtask = {
      title: task.title,
      description: task.desc,
      columnId: columnId,
    };
    try {
      const res = await sendRequest("POST", "/tasks/create", newtask);
      setOpen(false);
      setTrigger((t) => !t);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="popup-container">
      <div className="flex flex-col gap-5 bg-purple-950 p-10 rounded-lg items-center relative">
        <h1 className="font-bold">Add a task</h1>
        <input
          type="text"
          className="input-style"
          placeholder="title"
          onChange={(e) => setTask((t) => ({ ...t, title: e.target.value }))}
        />
        <input
          type="text"
          className="input-style"
          placeholder="desc"
          onChange={(e) => setTask((t) => ({ ...t, desc: e.target.value }))}
        />
        <button className="btn-style bg-primary" onClick={addTask}>
          Add
        </button>

        <button
          className="absolute top-0 right-0 m-5"
          onClick={() => setOpen(false)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default AddTaskPopup;
