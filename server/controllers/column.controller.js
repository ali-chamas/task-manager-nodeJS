const Column = require("../models/column.model");
const Task = require("../models/task.model");

const getColumns = async (req, res) => {
  try {
    const { boardId } = req.params;

    const columns = await Column.find({ boardId }).populate("tasks");

    res.status(200).json({ success: true, columns: columns });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch columns with tasks",
      error: error.message,
    });
  }
};

const createColumn = async (req, res) => {
  try {
    const { title, boardId } = req.body;

    const newColumn = await Column.create({ title, boardId });

    res.status(201).json({ success: true, column: newColumn });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create column",
      error: error.message,
    });
  }
};
const deleteColumn = async (req, res) => {
  try {
    const { columnId } = req.params;

    const deletedColumn = await Column.findByIdAndDelete(columnId);
    await Task.deleteMany({ columnId });

    if (!deletedColumn) {
      return res
        .status(404)
        .json({ success: false, message: "Column not found" });
    }

    res.status(200).json({
      success: true,
      message: "Column deleted successfully",
      deletedColumn,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete column",
      error: error.message,
    });
  }
};

const updateColumn = async (req, res) => {
  try {
    const { columnId } = req.params;
    const { title } = req.body;

    const updatedColumn = await Column.findByIdAndUpdate(
      columnId,
      { title },
      { new: true }
    );

    if (!updatedColumn) {
      return res
        .status(404)
        .json({ success: false, message: "Column not found" });
    }

    res.status(200).json({
      success: true,
      message: "Column title updated successfully",
      column: updatedColumn,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update column title",
      error: error.message,
    });
  }
};

module.exports = { getColumns, createColumn, updateColumn, deleteColumn };
