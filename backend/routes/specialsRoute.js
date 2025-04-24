const express = require('express');
const specialsRouter = express.Router();
const Special = require('../models/Special');

// Fetch all specials
router.get('/list', async (req, res) => {
  try {
    const specials = await Special.find();
    res.json({ data: specials });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch specials' });
  }
});

// Add a new special
router.post('/add', async (req, res) => {
  const { name, image, price } = req.body;
  try {
    const newSpecial = new Special({ name, image, price });
    await newSpecial.save();
    res.json({ message: 'Special added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add special' });
  }
});

// Delete a special
router.delete('/delete/:id', async (req, res) => {
  try {
    await Special.findByIdAndDelete(req.params.id);
    res.json({ message: 'Special deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete special' });
  }
});

module.exports = specialsRouter;
export default specialsRouter;