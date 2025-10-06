const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();


// @route   GET /api/feedback
// @desc    Get all feedback
router.get("/", async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;



// @desc    Submit feedback
router.post('/', async (req, res) => {
    try {
        const { name, email, feedback } = req.body;

        if (!name || !email || !feedback) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newFeedback = new Feedback({ name, email, feedback });
        await newFeedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
