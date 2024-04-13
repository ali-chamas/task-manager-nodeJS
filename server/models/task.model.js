const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  columnId: { type: Schema.Types.ObjectId, ref: "Column", required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category", required: false },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
