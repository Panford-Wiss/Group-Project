const router = require("express").Router();

// get controllers  
const {getMessages, addMessage} = require("../controllers/messages/add") // getmessages controller 

router.route("/messages").get(async (req, res) => {
   const messages = await getMessages();
   res.json(messages);
})

router.route("/messages").post(async (req, res) => {
    const message = req.body;
    console.log(message);

    addMessage(message);
    res.json({status: "ok", message})
})

module.exports = router;
