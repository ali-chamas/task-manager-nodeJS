const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  column: { type: Schema.Types.ObjectId, ref: "Column", required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;