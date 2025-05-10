
import React from 'react';
import AppHeader from '@/components/AppHeader';
import VersionSection from '@/components/VersionSection';
import DeploymentSection from '@/components/DeploymentSection';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen bg-panel text-white">
      <AppHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
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
  );
};

export default Index;
