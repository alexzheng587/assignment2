const express = require('express');

const MessageCtrl = require('../controller/message_ctrl');

const router = express.Router();

router.post('/message', MessageCtrl.createMessages);
router.put('/message/:id', MessageCtrl.updateMessages);
router.delete('/message/:id', MessageCtrl.deleteMessages);
router.get('/message/:id', MessageCtrl.getMessagesById);
router.get('/message', MessageCtrl.getMessages);
router.delete('/delete', MessageCtrl.deleteAll);

module.exports = router;