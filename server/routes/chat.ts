import express from 'express';
import { auth } from '../middleware/auth';
import { Chat } from '../models/Chat';
import { OpenAI } from 'openai';
import { Business } from '../models/Business';

const router = express.Router();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/:businessId/messages', auth, async (req, res) => {
  try {
    const { message } = req.body;
    const business = await Business.findById(req.params.businessId);
    
    if (!business) {
      return res.status(404).json({ error: 'Business not found' });
    }

    let chat = await Chat.findOne({
      businessId: business._id,
      visitorId: req.user._id
    });

    if (!chat) {
      chat = new Chat({
        businessId: business._id,
        visitorId: req.user._id,
        messages: []
      });
    }

    // Add user message
    chat.messages.push({
      role: 'user',
      content: message
    });

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for ${business.name}. Context: ${business.aiContext}`
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    // Add AI response
    chat.messages.push({
      role: 'assistant',
      content: completion.choices[0].message.content || 'Sorry, I could not process your request.'
    });

    await chat.save();
    res.json(chat.messages[chat.messages.length - 1]);
  } catch (error) {
    res.status(500).json({ error: 'Could not process message' });
  }
});

router.get('/:businessId/history', auth, async (req, res) => {
  try {
    const chat = await Chat.findOne({
      businessId: req.params.businessId,
      visitorId: req.user._id
    });
    
    res.json(chat?.messages || []);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch chat history' });
  }
});

export default router;