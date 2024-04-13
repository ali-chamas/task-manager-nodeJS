const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const columnSchema = new Schema({
  title: { type: String, required: true },
  board: { type: Schema.Types.ObjectId, ref: "Board", required: true },
});

const Column = mongoose.model("Column", columnSchema);

module.exports = Column;
