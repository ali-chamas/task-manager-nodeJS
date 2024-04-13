const Board = require("../models/board.model");

const getBoards = async (req, res) => {
  try {
    const userId = req.params.userId;

    const boards = await Board.find({ userId: userId });

    res.status(200).json({ success: true, boards });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch boards",
      error: error.message,
    });
  }
};

const createBoard = async (req, res) => {
  try {
    const { title, userId } = req.body;

    const newBoard = await Board.create({ title, userId });

    res.status(201).json({ success: true, board: newBoard });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create board",
      error: error.message,
    });
  }
};

// Delete a board
const deleteBoard = async (req, res) => {
  try {
    const { boardId } = req.body;

    const deletedBoard = await Board.findByIdAndDelete(boardId);

    if (!deletedBoard) {
      return res
        .status(404)
        .json({ success: false, message: "Board not found" });
    }

    res.status(200).json({
      success: true,
      message: "Board deleted successfully",
      deletedBoard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete board",
      error: error.message,
    });
  }
};

module.exports = { getBoards, createBoard, deleteBoard };
