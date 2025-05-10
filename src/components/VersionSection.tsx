
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const VersionSection = () => {
  return (
    <Card className="bg-panel-light border-panel-border mb-8">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <CardTitle className="text-lg font-medium">Version</CardTitle>
        </div>
      </CardHeader>
      
      <Separator className="bg-panel-border" />
      
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="app-version" className="block text-sm font-medium text-gray-400 mb-1">
              App Version (Version Name)
            </label>
            <Input 
              id="app-version" 
              placeholder="1.0.0" 
              className="bg-panel border-panel-border text-sm"
            />
            <p className="mt-1 text-xs text-gray-500">The version displayed to users in the app stores</p>
          </div>
          
          <div>
            <label htmlFor="build-number" className="block text-sm font-medium text-gray-400 mb-1">
              Build Number (Version Code)
            </label>
            <Input 
              id="build-number" 
              placeholder="1" 
              type="number"
              className="bg-panel border-panel-border text-sm"
            />
            <p className="mt-1 text-xs text-gray-500">Incremental number used internally</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VersionSection;
