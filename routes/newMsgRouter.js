const express = require("express")
const newMsgFormRouter = express.Router();
const {links} = require("../db")

newMsgFormRouter.get("/", (req, res) =>{
  res.render("newMsg", {title: "New Message", links: links})
})

module.exports = newMsgFormRouter;