const messageModel = require("../../models/model_contact")

const getMessages = () => {
    return messageModel.find({}); 
}

const addMessage = (message) => {
    messageModel.create(message);
}

module.exports = {getMessages, addMessage}