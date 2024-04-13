const express = require("express");
const {
  getBoards,
  createBoard,
  deleteBoard,
} = require("../controllers/board.controller");
const router = express.Router();

router.get("/get/:userId", getBoards);
router.post("/create", createBoard);
router.delete("/delete", deleteBoard);

module.exports = router;
