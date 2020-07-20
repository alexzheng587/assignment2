const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Message = new Schema(
    {
        message: { type: String, required: true },
        date: { type: Date, required: true },
        username: { type: String, required: true },
    },
);

module.exports = mongoose.model('Message', Message, 'message');