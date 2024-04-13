const express = require("express");
const { connect } = require("./config/db.config");
const authRouter = require("./routes/auth.routes");
const boardRouter = require("./routes/board.routes");
const columnRouter = require("./routes/column.routes");
const taskRouter = require("./routes/task.routes");
const categoryRouter = require("./routes/category.routes");
const app = express();
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT;

app.use("/auth", authRouter);
app.use("/boards", boardRouter);
app.use("/columns", columnRouter);
app.use("/tasks", taskRouter);
app.use("/categories", categoryRouter);

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Server is listining on port ${PORT}`);
  connect();
});
