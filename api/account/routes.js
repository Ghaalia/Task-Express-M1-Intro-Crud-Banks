const express = require("express");
const {
  getAllAccounts,
  createAccount,
  deleteAccount,
} = require("./controllers");
const router = express.Router();

router.get("/accounts", getAllAccounts);

router.post("/accounts", createAccount);

router.delete("/accounts/:accountId/", deleteAccount);

module.exports = router;
