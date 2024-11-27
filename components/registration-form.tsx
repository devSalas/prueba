'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast({
          title: 'Registration successful!',
          description: 'Your information has been saved.',
        });
        window.location.href = '/upload';
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to register. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-4">
            <Button type="submit" className="w-full">
              Register
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}