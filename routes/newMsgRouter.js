const express = require("express")
const newMsgFormRouter = express.Router();
const {links, messages} = require("../db")

newMsgFormRouter.get("/", (req, res) =>{
  res.render("newMsg", {title: "New Message", links: links})
})

newMsgFormRouter.post("/", (req,res, next) => {
  console.log("sending");
  messages.push({id: (messages.length + 1),text: req.body.message, user: req.body.author, added: new Date()})
  res.redirect("/")
})



module.exports = newMsgFormRouter;