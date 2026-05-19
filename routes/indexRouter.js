const express = require("express")
const indexRouter = express.Router();
const {links, messages} = require("../db")

indexRouter.get("/", (req, res) =>{
  res.render("index", {title: "HomePage", links: links, messages: messages})
})

indexRouter.get("/:message", (req, res) =>{
  let msgID = parseInt(req.params.message)
  res.render("viewMessage", {title: "HomePage", links: links, message: messages[msgID-1]})
})

module.exports = indexRouter;