require("dotenv").config();
const express = require("express")
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMsgFormRouter = require("./routes/newMsgRouter");
const { body, validationResult } = require("express-validator")
const { initDB } = require("./database/populatedb");

//parsing post request
app.use(express.urlencoded({ extended: true })); // 👈 add this
app.use(express.json());         

//EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//styles
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

//routes
app.use("/new", newMsgFormRouter);
app.use("/", indexRouter);


app.listen(parseInt(process.env.PORT), (err)=>{
  if (err) throw err;
  console.log("running!")
})