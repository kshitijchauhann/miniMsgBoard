const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

router.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }) )

router.post("/new", (req, res) => {

  console.log(req.body);
  let messageUser = req.body.nameText;
  let messageText = req.body.messageText;
  
  messages.push({ 
    text: messageText, 
    user: messageUser, 
    added: new Date() 
  });

  res.redirect("/");
});



module.exports = router;
