const Category = require("../models/category.model");

const createCategory = async (req, res) => {
  try {
    const { title } = req.body;

    const newCategory = await Category.create({ title });

    res.status(201).json({ success: true, category: newCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    await Category.findByIdAndDelete(categoryId);

    res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to delete category",
      error: error.message,
    });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch categories",
      error: error.message,
    });
  }
};

module.exports = { createCategory, getCategories, deleteCategory };
