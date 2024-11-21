import React from 'react';
import { Link } from 'react-router-dom';
import { RocketIcon, MessageCircle, Building2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Business Communication
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with your customers through intelligent, context-aware AI conversations tailored to your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform">
          <Building2 className="h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">For Businesses</h2>
          <p className="text-gray-600 mb-6">
            Create your AI-powered customer service portal. Train your AI with your business context and let it handle customer inquiries 24/7.
          </p>
          <Link
            to="/admin"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Get Started
            <RocketIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-transform">
          <MessageCircle className="h-12 w-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">For Visitors</h2>
          <p className="text-gray-600 mb-6">
            Get instant answers to your questions. Our AI understands the business context and provides accurate, helpful responses.
          </p>
          <Link
            to="/chat/demo"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Try Demo Chat
            <MessageCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Featured Business: Affordable Rocketships
        </h2>
        <div className="flex items-center justify-center space-x-8">
          <img
            src="https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&w=600&q=80"
            alt="Rocket launch"
            className="rounded-lg w-1/3 shadow-lg"
          />
          <div className="max-w-md">
            <p className="text-gray-600 mb-4">
              Making space travel accessible to everyone. Our AI assistant can help you find the perfect rocket for your budget and needs.
            </p>
            <Link
              to="/chat/rocketships"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Chat with Rocket AI
              <RocketIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;