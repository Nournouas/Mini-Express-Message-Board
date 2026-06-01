const express = require("express");
const newMsgFormRouter = express.Router();
const {links} = require("../db");
const { getAll, insertMessage } = require("../database/queries");
const { body, validationResult, matchedData } = require("express-validator");


const validateMsg = [
  body("author").trim()
    .isAlpha().withMessage("Author name must only contain alphabetical letters")
    .isLength({min: 1 , max: 30}).withMessage("Author name mustn't exceed 30 characters"),
  body("message").trim()
    .isAlphanumeric().withMessage("Message can only contain letters and numbers")
    .isLength({ min: 1, max: 200 }).withMessage("Author name mustn't exceed 200 characters")
]



newMsgFormRouter.get("/", (req, res) =>{
  res.render("newMsg", {title: "New Message", links: links})
})

newMsgFormRouter.post("/", [
  validateMsg,
  (req,res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
      return res.status(400).render("newMsg", {
        title: "Error New Message", links: links, errors: errors.array()
      })
    }
    const { message, author } = matchedData(req);
    insertMessage(message, author)
    res.redirect("/")
  }
])

/*newMsgFormRouter.post("/", (req,res, next) => {
  insertMessage(req.body.message, req.body.author)
  res.redirect("/")
})*/



module.exports = newMsgFormRouter;