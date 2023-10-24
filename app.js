const express = require("express");
const accounts = require("./accounts");
const accountRouter = require("./api/account/routes");
const connectDB = require("./database");

const app = express();
app.use(express.json());

app.use("/api", accountRouter);

connectDB();

app.listen(8000, () => {
  console.log("App is running on port 8000");
});
