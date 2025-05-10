import React from 'react';
import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import { Database } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const AWSSetup = () => {
  return (
    <div className="min-h-screen bg-panel text-white flex flex-col">
      <AppHeader />
      
      <div className="flex flex-grow">
        <AppSidebar />
        
        <div className="flex-1 p-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Database className="h-5 w-5 mr-2" />
                AWS Setup
              </h2>
              <p className="text-gray-400 text-sm mt-1">Configure your AWS credentials for app deployments.</p>
            </div>
            
            <Separator className="mb-8 bg-panel-border" />
            
            {/* AWS Setup content would go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWSSetup;
