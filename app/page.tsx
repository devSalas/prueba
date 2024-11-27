'use client';

import { useState } from 'react';
import { RegistrationForm } from '@/components/registration-form';
import { CountdownTimer } from '@/components/countdown-timer';

export default function Home() {
  const [showForm, setShowForm] = useState(true);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <CountdownTimer onComplete={() => setShowForm(false)} />
        {showForm && <RegistrationForm />}
      </div>
    </main>
  );
}