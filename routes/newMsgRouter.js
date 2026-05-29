const express = require("express")
const newMsgFormRouter = express.Router();
const {links} = require("../db")
const { getAll, insertMessage } = require("../database/queries")


newMsgFormRouter.get("/", (req, res) =>{
  res.render("newMsg", {title: "New Message", links: links})
})

newMsgFormRouter.post("/", (req,res, next) => {
  insertMessage(req.body.message, req.body.author)
  res.redirect("/")
})



module.exports = newMsgFormRouter;