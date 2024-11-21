import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { ChatMessage } from '../types';

const VisitorChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m the AI assistant for Affordable Rocketships. How can I help you today?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // TODO: Implement actual AI API call
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        role: 'assistant',
        content: 'Thank you for your interest! Our rockets start at $999,999 for the Economy model. Would you like to know more about our different rocket classes?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 p-4">
          <div className="flex items-center space-x-3">
            <Bot className="h-8 w-8 text-white" />
            <div>
              <h2 className="text-xl font-bold text-white">
                Affordable Rocketships AI Assistant
              </h2>
              <p className="text-indigo-200">
                Ask me anything about our rockets and space travel services
              </p>
            </div>
          </div>
        </div>

        <div className="h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.role === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisitorChat;