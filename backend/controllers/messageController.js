const Message = require("../models/messageModel");
const Conversation = require("../models/conversationModel");

const sendMessage = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const { message } = req.body;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        members: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      //conversation.lastMessage = message;
      //conversation.lastMessageDate = newMessage.createdAt;
      conversation.messages.push(newMessage._id);
    }

    //await conversation.save();
    //await newMessage.save();
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);

  } catch (error) {
    console.error("Error in sendMessage controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = sendMessage;