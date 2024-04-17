import React, { useState } from "react";
import { sendRequest } from "../../../request-method/request";

const AddColumnPopup = ({ boardId, setOpen, setTrigger }) => {
  const [title, setTitle] = useState("");

  const addColumn = async () => {
    const newColumn = {
      title: title,

      boardId: boardId,
    };
    try {
      const res = await sendRequest("POST", "/columns/create", newColumn);
      setOpen(false);
      setTrigger((t) => !t);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="popup-container">
      <div className="flex flex-col gap-5 bg-purple-950 p-10 rounded-lg items-center relative">
        <h1 className="font-bold">Add a column</h1>
        <input
          type="text"
          className="input-style"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="btn-style bg-primary" onClick={addColumn}>
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

export default AddColumnPopup;
