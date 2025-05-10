
import React from 'react';
import AppHeader from '@/components/AppHeader';
import VersionSection from '@/components/VersionSection';
import DeploymentSection from '@/components/DeploymentSection';
import { Separator } from '@/components/ui/separator';
import AppSidebar from '@/components/AppSidebar';
import { Package } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-panel text-white flex flex-col">
      <AppHeader />
      
      <div className="flex flex-grow">
        <AppSidebar />
        
        <div className="flex-1 p-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Mobile Deployment
              </h2>
              <p className="text-gray-400 text-sm mt-1">Deploy your app to the App Store and Play Store.</p>
            </div>
            
            <Separator className="mb-8 bg-panel-border" />
            
            <VersionSection />
            
            <DeploymentSection platform="App Store" />
            
            <DeploymentSection platform="Google Play Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
