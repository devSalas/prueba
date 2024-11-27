'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

export function FileUpload() {
  const [progress] = useState(50);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">File Upload</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input type="file" className="w-full" />
        <div className="flex items-center gap-4">
          <Progress value={progress} className="w-full" />
          <span className="text-sm font-medium">{progress}%</span>
        </div>
      </CardContent>
    </Card>
  );
}