require("dotenv").config();
const express = require("express"),
  app = express(),
  { json } = require("body-parser"),
  cors = require("cors"),
  PORT = process.env.PORT || 3001,
  session = require("express-session"),
  user = require(`${__dirname}/middlewares/user`),
  route = express.Router(),
  authRoute = require(`${__dirname}/routes/authRoute`);
massive = require("massive");
stripe = require("stripe")();

app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 2 //2 days
    }
  })
);
app.use(user.createUserSession);
massive(process.env.DB_CONNECTION).then(instance => app.set("db", instance));

// app.get("/api/auth", authRoute);

app.listen(PORT, () => console.log(`Magic happens on port ${PORT}`));
