import React, { useState } from "react";
import TaskPopup from "./TaskPopup";
import AddTaskPopup from "./AddTaskPopup";
import { FaTrash } from "react-icons/fa";
const ColumnCard = ({ column, setTrigger }) => {
  const [openTask, setOpenTask] = useState();
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <div className="flex flex-col gap-4 p-5 w-[300px] max-w-[300px] h-[400px] max-h-[400px] border-2 border-gray-600/40 shadow-lg shadow-gray-600/40 ">
      <div className="flex self-center gap-10">
        <h1 className="font-bold text-lg ">{column.title}</h1>
        <div className="flex gap-2 items-center">
          <button>
            <FaTrash />
          </button>
          <button onClick={() => setOpenAdd(true)} className="text-3xl">
            +
          </button>
        </div>
      </div>
      <div className="self-start w-full flex flex-col gap-2">
        {column.tasks.map((task, i) => (
          <p
            className="p-3 border border-gray-600/40 w-full cursor-pointer hover:opacity-80"
            onClick={() => setOpenTask(task)}
          >
            {task.title}
          </p>
        ))}
      </div>
      {openTask && (
        <TaskPopup
          task={openTask}
          setOpenTask={setOpenTask}
          setTrigger={setTrigger}
        />
      )}
      {openAdd && (
        <AddTaskPopup
          setOpen={setOpenAdd}
          columnId={column._id}
          setTrigger={setTrigger}
        />
      )}
    </div>
  );
};

export default ColumnCard;
