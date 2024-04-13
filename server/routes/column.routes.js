const express = require("express");
const {
  getColumns,
  createColumn,
  updateColumn,
  deleteColumn,
} = require("../controllers/column.controller");
const router = express.Router();

router.get("/get/:boardId", getColumns);
router.post("/create", createColumn);
router.post("/update/:columnId", updateColumn);
router.delete("/delete/:columnId", deleteColumn);

module.exports = router;
