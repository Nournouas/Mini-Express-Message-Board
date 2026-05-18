const express = require("express")
const path = require("node:path");
const app = express();
const indexRouter = require("./routes/indexRouter");
const newMsgFormRouter = require("./routes/newMsgRouter");

//Links
const links = [
  {href: "/", text: "Home"},
  {href: "/new", text: "New Message"},
]

//EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//styles
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use("/", indexRouter);
app.use("/new", newMsgFormRouter);

const PORT = 3001;

app.listen(PORT, (err)=>{
  if (err) throw errl
  console.log("running!")
})