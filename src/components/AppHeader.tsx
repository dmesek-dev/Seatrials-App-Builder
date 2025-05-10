
import React from 'react';

const AppHeader = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6 bg-panel-light border-b border-panel-border">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Mobile Deployment Portal</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-sm text-gray-400 hover:text-white">Documentation</button>
        <div className="h-6 w-6 rounded-full bg-action flex items-center justify-center text-white">
          <span className="text-xs">JD</span>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
