const Column = require("../models/column.model");
const Task = require("../models/task.model");

const createTask = async (req, res) => {
  try {
    const { title, description, columnId, categoryId } = req.body;

    const newTask = await Task.create({
      title,
      description,
      columnId,
      categoryId,
    });
    const column = await Column.findById(columnId);
    column.tasks.push(newTask._id);
    await column.save();
    res.status(201).json({ success: true, task: newTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create task",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { title, description } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      { title, description },
      { new: true }
    );

    res.status(200).json({ success: true, task: updatedTask });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to edit task",
      error: error.message,
    });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { taskId } = req.params;

    await Task.findByIdAndDelete(taskId);
    const column = await Column.findOneAndUpdate(
      { tasks: taskId },
      { $pull: { tasks: taskId } },
      { new: true }
    );

    if (!column) {
      return res
        .status(404)
        .json({ success: false, message: "Column not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete task",
      error: error.message,
    });
  }
};
const moveTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { newColumnId } = req.body;

    const task = await Task.findById(taskId);

    if (!task) {
      return res
        .status(404)
        .json({ success: false, message: "Task not found" });
    }

    const previousColumn = await Column.findOneAndUpdate(
      { tasks: taskId },
      { $pull: { tasks: taskId } },
      { new: true }
    );

    if (!previousColumn) {
      return res
        .status(404)
        .json({ success: false, message: "Previous column not found" });
    }

    task.columnId = newColumnId;
    await task.save();

    const newColumn = await Column.findByIdAndUpdate(
      newColumnId,
      { $push: { tasks: taskId } },
      { new: true }
    );

    if (!newColumn) {
      return res
        .status(404)
        .json({ success: false, message: "New column not found" });
    }

    res.status(200).json({ success: true, task });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to move task to another column",
      error: error.message,
    });
  }
};

module.exports = { createTask, updateTask, deleteTask, moveTask };
