const express = require("express")
const indexRouter = express.Router();
const {links} = require("../db")
const { getAll } = require("../database/queries")

indexRouter.get("/", async (req, res) =>{
  const messages = await getAll();
  res.render("index", {title: "HomePage", links: links, messages: messages})
})

indexRouter.get("/message/:id", async (req, res) => {
  let msgID = parseInt(req.params.id);
  const messages = await getAll();
  const message = messages[msgID - 1];
  if (!message) return res.status(404).send("Message not found");
  res.render("viewMessage", { title: "HomePage", links: links, message: message });
});

module.exports = indexRouter;