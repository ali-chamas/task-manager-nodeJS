import React, { useState } from "react";
import { sendRequest } from "../../../request-method/request";

const AddBoardPopup = ({ setOpen, setTriggerState, user }) => {
  const [title, setTitle] = useState("");

  const addBoard = async () => {
    const postData = {
      title: title,
      userId: user._id,
    };

    try {
      const res = await sendRequest("POST", `/boards/create`, postData);
      console.log(res);
      setTriggerState((t) => !t);
      setOpen(false);
    } catch (error) {}
  };

  return (
    <div className="popup-container">
      <div className="flex flex-col gap-4 items-center bg-purple-950 p-10 rounded-lg relative">
        <input
          type="text"
          placeholder="title"
          className="input-style"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="bg-primary btn-style" onClick={addBoard}>
          Add
        </button>
        <button
          onClick={() => setOpen(false)}
          className="absolute top-0 right-0 m-4"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default AddBoardPopup;
