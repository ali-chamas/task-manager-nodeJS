import React from "react";

const TaskPopup = ({ task }) => {
  return (
    <div className="popup-container">
      <div className="bg-purple-950  rounded-lg p-10 flex flex-col gap-5 items-center">
        <h1 className="font-bold text-lg">{task.title}</h1>
        <p>{task.description}</p>
        <p>
          <b>category</b>:{task.category}
        </p>
      </div>
    </div>
  );
};

export default TaskPopup;
