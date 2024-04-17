import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sendRequest } from "../../request-method/request";
import ColumnCard from "./components/ColumnCard";
import AddColumnPopup from "./components/AddColumnPopup";

const SingleBoard = () => {
  const { board_id } = useParams();
  const navigate = useNavigate();

  const [columns, setColumns] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [draggableContainer, setDraggableContainer] = useState({});
  const [openAddColumn, setOpenAddColumn] = useState(false);

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
      <div className="w-full flex justify-between">
        <button
          className="btn-style bg-primary "
          onClick={() => setOpenAddColumn(true)}
        >
          Add column
        </button>
        <button className="btn-style bg-red-500  " onClick={deleteBoard}>
          Delete Board
        </button>
      </div>
      <div className="flex flex-wrap gap-5">
        {columns.length > 0 &&
          columns.map((column, i) => (
            <ColumnCard
              column={column}
              setTrigger={setTrigger}
              draggableContainer={draggableContainer}
              setDraggableContainer={setDraggableContainer}
              key={i}
            />
          ))}
      </div>
      {openAddColumn && (
        <AddColumnPopup
          setOpen={setOpenAddColumn}
          boardId={board_id}
          setTrigger={setTrigger}
        />
      )}
    </div>
  );
};

export default SingleBoard;
