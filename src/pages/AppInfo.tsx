import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Palette } from "lucide-react"; // Added missing import
import AppHeader from '@/components/AppHeader';
import AppSidebar from '@/components/AppSidebar';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const appInfoSchema = z.object({
  appName: z.string().min(1, "App name is required"),
  primaryColor: z.string().min(1, "Primary color is required"),
  bundleId: z.string().min(1, "Bundle ID is required"),
  appVersion: z.string().min(1, "App version is required"),
});

type AppInfoValues = z.infer<typeof appInfoSchema>;

const AppInfo = () => {
  const form = useForm<AppInfoValues>({
    resolver: zodResolver(appInfoSchema),
    defaultValues: {
      appName: "",
      primaryColor: "#9b87f5",
      bundleId: "com.company.app",
      appVersion: "1.0.0",
    },
  });

  const onSubmit = (values: AppInfoValues) => {
    console.log("App info saved:", values);
    // Here you would typically save these values to your backend
  };

  return (
    <div className="min-h-screen bg-panel text-white flex flex-col">
      <AppHeader />
      
      <div className="flex flex-grow">
        <AppSidebar />
        
        <div className="flex-1 p-8">
          <div className="container mx-auto max-w-6xl">
            <div className="mb-6">
              <h2 className="text-xl font-semibold flex items-center">
                <Palette className="h-5 w-5 mr-2" />
                App Information
              </h2>
              <p className="text-gray-400 text-sm mt-1">Configure basic information about your application.</p>
            </div>
            
            <Separator className="mb-8 bg-panel-border" />
            
            <div className="max-w-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="appName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>App Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your app name" 
                            {...field} 
                            className="bg-panel-light border-panel-border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="primaryColor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Primary Color</FormLabel>
                        <div className="flex space-x-3">
                          <FormControl>
                            <Input 
                              type="text" 
                              {...field} 
                              className="bg-panel-light border-panel-border" 
                            />
                          </FormControl>
                          <div className="w-10 h-10 rounded-md border border-panel-border" style={{ backgroundColor: form.watch('primaryColor') }}></div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="bundleId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bundle ID / Package Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="com.company.appname" 
                            {...field} 
                            className="bg-panel-light border-panel-border" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="appVersion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>App Version</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="1.0.0" 
                            {...field} 
                            className="bg-panel-light border-panel-border" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="mt-4 bg-action hover:bg-action/80">Save App Information</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInfo;
