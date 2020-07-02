const Message = require('../models/message_model');

createMessages = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a message',
        })
    }

    const message = new Message(body);

    if (!message) {
        return res.status(400).json({ success: false, error: 'You must provide a message' })
    }

    message
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: message,
                message: 'Message created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Message not created!',
            })
        })
};

updateMessages = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Message.findOne({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Message not found!',
            })
        }
        message.message = body.message;
        message.date = body.date;
        message.username = body.username;
        message
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: message._id,
                    message: 'Message updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Message not updated!',
                })
            })
    })
};

deleteMessages = async (req, res) => {
    await Message.findOneAndDelete({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!message) {
            return res
                .status(404)
                .json({ success: false, error: `Message not found` })
        }

        return res.status(200).json({ success: true, data: message })
    }).catch(err => console.log(err))
};

getMessagesById = async (req, res) => {
    await Message.findOne({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: message })
    }).catch(err => console.log(err))
};

getMessages = async (req, res) => {
    await Message.find({}, (err, message) => {
        console.log(message);
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!message.length) {
            return res
                .status(404)
                .json({ success: false, error: `Jahannah` })
        }
        return res.status(200).json({ success: true, data: message })
    }).catch(err => console.log(err))
};

module.exports = {
    createMessages,
    updateMessages,
    deleteMessages,
    getMessages,
    getMessagesById,
}