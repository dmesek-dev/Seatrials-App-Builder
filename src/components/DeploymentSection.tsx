
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FileUploader from './FileUploader';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/sonner';

interface DeploymentSectionProps {
  platform: 'App Store' | 'Google Play Store';
}

const DeploymentSection = ({ platform }: DeploymentSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleDeploy = () => {
    toast(`Deployment to ${platform} initiated. Check deployment history for status.`);
  };

  return (
    <Card className="bg-panel-light border-panel-border mb-8">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div className="flex items-center space-x-2">
          {platform === 'App Store' ? (
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 12.5C16 11.12 15.44 9.94 14.5 9C14.67 8.67 14.75 8.34 14.75 8C14.75 6.97 14.47 5.57 13 4.5C12.5 4.5 12 4.6 11.5 5C11 4.6 10.5 4.5 10 4.5C8.53 5.57 8.25 6.97 8.25 8C8.25 8.34 8.33 8.67 8.5 9C7.56 9.94 7 11.12 7 12.5C7 14.38 8.19 16.5 11.25 17V14.5C11.25 14.22 11.48 14 11.75 14C12.03 14 12.25 14.22 12.25 14.5V17C15.31 16.5 16.5 14.38 16.5 12.5H16Z" fill="currentColor"/>
            </svg>
          ) : (
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M15.24 11.63L7.19995 6.63C7.02995 6.53 6.82995 6.53 6.65995 6.63C6.48995 6.73 6.37995 6.91 6.37995 7.11V17.11C6.37995 17.31 6.48995 17.49 6.65995 17.59C6.73995 17.64 6.82995 17.67 6.91995 17.67C7.00995 17.67 7.09995 17.64 7.17995 17.59L15.22 12.59C15.39 12.49 15.5 12.3 15.5 12.1C15.5 11.9 15.4 11.73 15.24 11.63Z" fill="currentColor"/>
            </svg>
          )}
          
          <CardTitle className="text-lg font-medium">{platform}</CardTitle>
        </div>
        <button 
          className="text-gray-400 hover:text-white transition-colors" 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </CardHeader>
      
      <Separator className="bg-panel-border" />
      
      {isExpanded ? (
        <>
          <CardContent className="pt-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor={`${platform}-version`} className="block text-sm font-medium text-gray-400 mb-1">
                    App Version (Version Name)
                  </label>
                  <Input 
                    id={`${platform}-version`} 
                    placeholder="1.0.0" 
                    className="bg-panel border-panel-border text-sm"
                  />
                </div>
                
                <div>
                  <label htmlFor={`${platform}-build`} className="block text-sm font-medium text-gray-400 mb-1">
                    Build Number (Version Code)
                  </label>
                  <Input 
                    id={`${platform}-build`} 
                    placeholder="1" 
                    className="bg-panel border-panel-border text-sm"
                  />
                </div>
                
                {platform === 'App Store' && (
                  <>
                    <div>
                      <label htmlFor="issuer-id" className="block text-sm font-medium text-gray-400 mb-1">
                        Issuer ID
                      </label>
                      <Input 
                        id="issuer-id" 
                        placeholder="Enter Issuer ID" 
                        className="bg-panel border-panel-border text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="app-key-id" className="block text-sm font-medium text-gray-400 mb-1">
                        Key ID
                      </label>
                      <Input 
                        id="app-key-id" 
                        placeholder="Enter Key ID" 
                        className="bg-panel border-panel-border text-sm"
                      />
                    </div>
                  </>
                )}
                
                {platform === 'Google Play Store' && (
                  <div>
                    <label htmlFor="package-name" className="block text-sm font-medium text-gray-400 mb-1">
                      Package Name
                    </label>
                    <Input 
                      id="package-name" 
                      placeholder="com.example.app" 
                      className="bg-panel border-panel-border text-sm"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-6">
                {platform === 'App Store' ? (
                  <FileUploader 
                    title="Private Key" 
                    description="Upload your .p8 private key file"
                    buttonText="Upload Private Key" 
                    fileType=".p8"
                  />
                ) : (
                  <FileUploader 
                    title="Service Account Credentials" 
                    description="Upload your Google Play service account JSON file"
                    buttonText="Upload Credentials" 
                    fileType=".json"
                  />
                )}
                
                {platform === 'App Store' && (
                  <div>
                    <label htmlFor="app-id" className="block text-sm font-medium text-gray-400 mb-1">
                      App ID
                    </label>
                    <Input 
                      id="app-id" 
                      placeholder="Enter App ID" 
                      className="bg-panel border-panel-border text-sm"
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">
                Deployment History
              </h3>
              <div className="bg-panel border border-panel-border rounded-md p-4 text-center">
                <p className="text-gray-500 text-sm">No previous deployments</p>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-end pt-2">
            <div className="flex space-x-3">
              <Button variant="outline" className="border-panel-border text-gray-300">
                Save Draft
              </Button>
              <Button onClick={handleDeploy} className="bg-action hover:bg-action-hover">
                Deploy to {platform}
              </Button>
            </div>
          </CardFooter>
        </>
      ) : (
        <CardContent className="py-4">
          <p className="text-gray-500 text-sm">App has not been deployed yet</p>
        </CardContent>
      )}
    </Card>
  );
};

export default DeploymentSection;
