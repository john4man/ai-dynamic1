import React, { useState } from 'react';
import { Settings, Save, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Affordable Rocketships',
    description: 'Making space travel accessible to everyone',
    industry: 'Aerospace',
    aiContext: `We are Affordable Rocketships, a company dedicated to making space travel accessible to everyone. 
Our product line includes:
- Economy Rocket (Starting at $999,999)
- Business Class Rocket (Starting at $2,999,999)
- First Class Rocket (Starting at $4,999,999)

Key features:
- Reusable rockets
- Eco-friendly fuel options
- Flexible payment plans
- 24/7 launch support
- Comprehensive insurance coverage`
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to save business info
    alert('Business information saved!');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Business Administration
          </h1>
          <Settings className="h-8 w-8 text-gray-400" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              value={businessInfo.name}
              onChange={(e) => setBusinessInfo({ ...businessInfo, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Description
            </label>
            <textarea
              value={businessInfo.description}
              onChange={(e) => setBusinessInfo({ ...businessInfo, description: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <input
              type="text"
              value={businessInfo.industry}
              onChange={(e) => setBusinessInfo({ ...businessInfo, industry: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              AI Context Information
            </label>
            <textarea
              value={businessInfo.aiContext}
              onChange={(e) => setBusinessInfo({ ...businessInfo, aiContext: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              rows={10}
              placeholder="Provide detailed information about your business that the AI should know..."
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 flex items-center"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Section
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center"
            >
              <Save className="h-5 w-5 mr-2" />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;