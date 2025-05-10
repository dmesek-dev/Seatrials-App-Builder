
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Database } from "lucide-react";
import AppHeader from '@/components/AppHeader';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";

const awsSetupSchema = z.object({
  bucketName: z.string().min(1, "Bucket name is required"),
  awsRegion: z.string().min(1, "AWS region is required"),
  accessKeyId: z.string().min(1, "Access key ID is required"),
  secretAccessKey: z.string().min(1, "Secret access key is required"),
});

type AWSSetupValues = z.infer<typeof awsSetupSchema>;

const AWSSetup = () => {
  const form = useForm<AWSSetupValues>({
    resolver: zodResolver(awsSetupSchema),
    defaultValues: {
      bucketName: "",
      awsRegion: "us-east-1",
      accessKeyId: "",
      secretAccessKey: "",
    },
  });

  const onSubmit = (values: AWSSetupValues) => {
    console.log("AWS setup saved:", values);
    // Here you would typically save these values to your backend
  };

  return (
    <div className="min-h-screen bg-panel text-white">
      <AppHeader />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex items-center">
            <Database className="h-5 w-5 mr-2" />
            AWS Configuration
          </h2>
          <p className="text-gray-400 text-sm mt-1">Set up your AWS credentials for app resource storage.</p>
        </div>
        
        <Separator className="mb-8 bg-panel-border" />
        
        <div className="max-w-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="bucketName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>S3 Bucket Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="my-app-resources" 
                        {...field} 
                        className="bg-panel-light border-panel-border"
                      />
                    </FormControl>
                    <FormDescription className="text-gray-400">
                      The S3 bucket where your app resources will be stored.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="awsRegion"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AWS Region</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="us-east-1" 
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
                name="accessKeyId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AWS Access Key ID</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="AKIAXXXXXXXXXXXXXXXX" 
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
                name="secretAccessKey"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>AWS Secret Access Key</FormLabel>
                    <FormControl>
                      <Input 
                        type="password"
                        placeholder="••••••••••••••••••••" 
                        {...field} 
                        className="bg-panel-light border-panel-border" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="mt-4 bg-action hover:bg-action/80">Save AWS Configuration</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AWSSetup;
