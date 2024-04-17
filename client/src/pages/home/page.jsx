import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { sendRequest } from "../../request-method/request";
import BoardCard from "./components/BoardCard";
import AddBoardPopup from "./components/AddBoardPopup";

const Home = () => {
  const { user } = useSelector((global) => global.userSlice);

  const [boards, setBoards] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [triggerState, setTriggerState] = useState(false);

  const getBoards = async () => {
    const res = await sendRequest("GET", `/boards/get/${user._id}`);
    const data = res.data;
    setBoards(data.boards);
  };
  console.log(user);
  useEffect(() => {
    getBoards();
  }, [triggerState]);
  return (
    <div className="flex flex-wrap gap-5 h-[80vh] items-center justify-center">
      {boards.map((board, i) => (
        <BoardCard board={board} key={i} />
      ))}
      <button className="text-2xl" onClick={() => setOpenPopup(true)}>
        +
      </button>
      {openPopup && (
        <AddBoardPopup
          setOpen={setOpenPopup}
          setTriggerState={setTriggerState}
          user={user}
        />
      )}
    </div>
  );
};

export default Home;
