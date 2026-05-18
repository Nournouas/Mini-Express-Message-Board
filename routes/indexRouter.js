const express = require("express")
const indexRouter = express.Router();
const {links} = require("../db")

indexRouter.get("/", (req, res) =>{
  res.render("index", {title: "HomePage", links: links})
})

module.exports = indexRouter;