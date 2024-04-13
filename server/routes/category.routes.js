const express = require("express");
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/category.controller");
const router = express.Router();

router.get("/get/", getCategories);
router.post("/create", createCategory);
router.delete("/delete/:categoryId", deleteCategory);

module.exports = router;
