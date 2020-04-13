require("dotenv").config();

<<<<<<< HEAD
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const configurePassport = require("./configurePassport.js");

const indexRouter = require("./routes/index");
const passportRouter = require("./routes/passportRoutes.js");

const app = express();
=======
let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

const configurePassport = require("./configurePassport.js");

let indexRouter = require("./routes/index");
let passportRouter = require("./routes/passportRoutes.js");

let app = express();
>>>>>>> afaa1a5611184e48057cbda14fd4b1c146a74208

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "front/build")));

configurePassport(app);

app.use("/", indexRouter);
app.use("/", passportRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
