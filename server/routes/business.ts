import express from 'express';
import { auth } from '../middleware/auth';
import { Business } from '../models/Business';

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const business = new Business({
      ...req.body,
      owner: req.user._id
    });
    await business.save();
    res.status(201).json(business);
  } catch (error) {
    res.status(400).json({ error: 'Could not create business' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }
    res.json(business);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

router.patch('/:id', auth, async (req, res) => {
  try {
    const business = await Business.findOne({
      _id: req.params.id,
      owner: req.user._id
    });

    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }

    Object.assign(business, req.body);
    await business.save();
    res.json(business);
  } catch (error) {
    res.status(400).json({ error: 'Could not update business' });
  }
});

export default router;