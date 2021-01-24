const express = require('express');
const router = express.Router();
const authenticateEnsurer = require('./authentication-ensurer');
const Availability = require('../models/availability');

router.post('/:scheduleId/users/:userId/candidates/:candidateId', authenticateEnsurer, (req, res, next) => {
    const { scheduleId, userId, candidateId } = req.params;
    let availability = req.body.availability;
    availability = availability ? parseInt(availability) : 0;

    Availability.upsert({ scheduleId, userId, candidateId, availability })
        .then(() => res.json({ status: 'OK', availability }));
});

module.exports = router;
