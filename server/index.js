require("dotenv").config();
const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  cors = require("cors"),
  PORT = process.env.PORT || 3001,
  stripe = require("stripe")();

app.use(json());
app.use(cors());

app.listen(PORT, () => console.log(`Magic happens on port ${PORT}`));
