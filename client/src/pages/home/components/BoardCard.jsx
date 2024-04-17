import React from "react";
import { useNavigate } from "react-router-dom";

const BoardCard = ({ board }) => {
  const navigate = useNavigate();
  return (
    <div
      className="p-5 rounded-md border-2 border-gray-600/40 hover:opacity-80 cursor-pointer"
      onClick={() => navigate(`/board/${board._id}`)}
    >
      <h1>{board.title}</h1>
    </div>
  );
};

export default BoardCard;
