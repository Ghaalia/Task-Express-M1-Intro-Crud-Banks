const accounts = require("../../accounts");

const getAllAccounts = (req, res) => {
  res.status(200).json(accounts);
};

const createAccount = (req, res) => {
  const lastElement = accounts[accounts.length - 1];
  const username = req.body;
  const newAccount = { ...username, id: lastElement.id + 1, funds: 0 };
  accounts.push(newAccount);
  return res.status(201).json(newAccount);
};

const deleteAccount = (req, res) => {
  const id = req.params.accountId;
  const account = accounts.find((account) => {
    return account.id == id;
  });

  if (!account) return res.status(404).json("account not found");

  return res.status(200).json();
};

module.exports = {
  getAllAccounts,
  createAccount,
  deleteAccount,
};
