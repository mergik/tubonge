const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    members:[
        {
            type: mongoose.Schema.Types.Array,
            ref: 'User',
        }
    ],
    messages:[
        {
            type: mongoose.Schema.Types.Array,
            ref: 'Message',
            default: []
        }
    ]
}, { timestamps: true });

const Conversation = mongoose.model('Conversation', conversationSchema);
module.exports = Conversation;