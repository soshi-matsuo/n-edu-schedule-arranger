const express = require('express');
const router = express.Router();
const authenticateEnsurer = require('./authentication-ensurer');
const Comment = require('../models/comment');

router.post('/:scheduleId/users/:userId/comments', authenticateEnsurer, (req, res, next) => {
    const { scheduleId, userId } = req.params;
    const comment = req.body.comment;

    Comment.upsert({ scheduleId, userId, comment: comment.slice(0, 255) })
        .then(() => res.json({ status: 'OK', comment }));
});

module.exports = router;
