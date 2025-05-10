
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

interface FileUploaderProps {
  title: string;
  description?: string;
  buttonText: string;
  fileType?: string;
  onFileUploaded?: (file: File) => void;
}

const FileUploader = ({ 
  title, 
  description, 
  buttonText, 
  fileType = '.p8,.json,.keystore', 
  onFileUploaded 
}: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      if (onFileUploaded) {
        onFileUploaded(selectedFile);
      }
      toast(`File "${selectedFile.name}" uploaded successfully`);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      if (onFileUploaded) {
        onFileUploaded(droppedFile);
      }
      toast(`File "${droppedFile.name}" uploaded successfully`);
    }
  };

  return (
    <Card className="bg-panel-light border-panel-border">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-gray-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className={`border-2 border-dashed rounded-lg p-4 cursor-pointer text-center transition-colors ${
            isDragging ? 'border-action bg-panel-light/50' : 'border-gray-600 hover:border-gray-500'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById(`file-upload-${title}`)?.click()}
        >
          <input
            id={`file-upload-${title}`}
            type="file"
            accept={fileType}
            onChange={handleFileChange}
            className="hidden"
          />
          
          {file ? (
            <div className="py-2">
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-2 text-sm text-gray-300 truncate">{file.name}</span>
              </div>
              <div className="mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFile(null);
                  }}
                >
                  Replace file
                </Button>
              </div>
            </div>
          ) : (
            <div className="py-8">
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mt-2 text-sm text-gray-400">{description || 'Drag and drop your file here or click to browse'}</p>
                <Button variant="ghost" className="mt-2 bg-action hover:bg-action-hover">
                  {buttonText}
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
