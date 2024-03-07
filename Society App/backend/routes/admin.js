const express = require("express");
const router = express.Router();
const db = require("../db");
const utils = require("../utils");
const crypto = require("crypto-js");

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log(req.body)

  if (!email || !password) {
    return res.status(400).send({ message: "Please provide the email and password" });
  }

  const statement = "SELECT id, name, email, password FROM admin WHERE email = ? AND password = ?";

  const encryptedPassword = String(crypto.SHA256(password));
  console.log(encryptedPassword)

  db.execute(statement, [email, encryptedPassword], (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res.status(500).send(utils.createErrorResponse("Internal Server Error"));
    }

    console.log(results); // Log the results for debugging purposes

    if (results.length === 0) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    const user = results[0];
    res.send(utils.createSuccessResponse({ name: user.name }));
  });
});

module.exports = router;

