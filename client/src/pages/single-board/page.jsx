import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sendRequest } from "../../request-method/request";
import ColumnCard from "./components/ColumnCard";

const SingleBoard = () => {
  const { board_id } = useParams();
  const navigate = useNavigate();

  const [columns, setColumns] = useState([]);
  const [trigger, setTrigger] = useState(false);

  const deleteBoard = async () => {
    const res = await sendRequest("DELETE", `/boards/delete`, {
      boardId: board_id,
    });

    navigate("/");
  };

  const getColumns = async () => {
    const res = await sendRequest("GET", `/columns/get/${board_id}`);
    console.log(res);
    setColumns(res.data.columns);
  };

  useEffect(() => {
    getColumns();
  }, [trigger]);
  return (
    <div className="flex flex-col relative p-10 gap-10">
      <button className="btn-style bg-red-500 self-end " onClick={deleteBoard}>
        Delete Board
      </button>
      <div className="flex flex-wrap gap-5">
        {columns.length > 0 &&
          columns.map((column, i) => (
            <ColumnCard column={column} setTrigger={setTrigger} key={i} />
          ))}
      </div>
    </div>
  );
};

export default SingleBoard;
