require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
/*
var indexRouter = require("./routes/index");
var databaseRouter = require("./routes/database");
var servicesRouter = require("./routes/services");
var transactionRouter = require("./routes/transaction");
*/
const portalDbConnection = require("./models/connections/portal.js");
var User = portalDbConnection.model("User");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

var app = express();

// DB Connection - New
var mongoose = require("mongoose");
const mongoDB = process.env.MONGODB_URI;
mongoose.set("strictQuery", false);
mongoose
  .connect(mongoDB, { dbName: "portal" })
  .then(() => {
    console.log("MongoDB connected…");
  })
  .catch((err) => console.log(err)); // mongoose
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
// Ended DB Stuff - New

app.listen(3001, () => console.log("Listening on Port 3001"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// New Passport stuff
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // passwords match! log user in
          return done(null, user);
        } else {
          // passwords do not match!
          return done(null, false, { message: "Incorrect password" });
        }
      });
    } catch (err) {
      return done(err);
    }
  })
);

//done

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

// New DeserializeUser
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

// End Passport stuff
var indexRouter = require("./routes/index");
var transactionRouter = require("./routes/transaction");
var databaseRouter = require("./routes/database");
var servicesRouter = require("./routes/services/index");
var repairsRouter = require("./routes/services/repairs/index");
var appleRouter = require("./routes/services/repairs/apple/index");
var sonyRouter = require("./routes/services/repairs/sony/index");
var oneplusRouter = require("./routes/services/repairs/oneplus/index");
var motorolaRouter = require("./routes/services/repairs/motorola/index");
var nintendoRouter = require("./routes/services/repairs/nintendo/index");
var LGRouter = require("./routes/services/repairs/lg/index");

// Routes
app.use("/", indexRouter);
app.use("/", transactionRouter);
app.use("/", databaseRouter);
app.use("/", servicesRouter);
app.use("/", repairsRouter);
app.use("/", appleRouter);
app.use("/", sonyRouter);
app.use("/", oneplusRouter);
app.use("/", motorolaRouter);
app.use("/", nintendoRouter);
app.use("/", LGRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error" });
});

module.exports = app;
