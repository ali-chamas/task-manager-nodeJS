const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const columnSchema = new Schema({
  title: { type: String, required: true },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

const Column = mongoose.model("Column", columnSchema);

module.exports = { Column };
