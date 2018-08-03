const express = require('express');
const actionDb = require('../../data/helpers/actionDb');

const router = express.Router();

router.post('/', async (req, res) => {
    const { description, notes, completed } = req.body;
    if (!description || !notes) return res.status(400).json({ error: 'Please provide description and notes' });
    try {
        const response = await actionDb.insert({ description, notes, completed });
        return res.status(201).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const response = await actionDb.get();
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const response = await actionDb.get(req.params.id);
        return res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;