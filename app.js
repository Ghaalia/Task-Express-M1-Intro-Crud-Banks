const express = require("express");
const accounts = require("./accounts");

const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("App is running on port 8000");
});

app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

app.get("/account", (req, res) => {
  const lastElement = accounts[accounts.length - 1];
  const username = req.body;
  const newAccount = { ...username, id: lastElement.id + 1, funds: 0 };
  res.status(200).json(lastElement);
  //   return res.status(201).json(newAccount);
});
