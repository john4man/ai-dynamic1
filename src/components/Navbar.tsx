import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Building2 } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <MessageCircle className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">AI Business Hub</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/admin"
              className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-800 hover:bg-gray-100"
            >
              <Building2 className="h-5 w-5 inline-block mr-2" />
              Business Portal
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;