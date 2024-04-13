const express = require("express");
const {
  createTask,
  updateTask,
  deleteTask,
  moveTask,
} = require("../controllers/task.controller");
const router = express.Router();

router.post("/create", createTask);
router.post("/update/:taskId", updateTask);
router.delete("/delete/:taskId", deleteTask);
router.post("/move/:taskId", moveTask);

module.exports = router;
