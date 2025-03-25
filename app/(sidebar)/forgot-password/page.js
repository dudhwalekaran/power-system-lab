'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function ForgotPasswordComponent() {
  const [formData, setFormData] = useState({ newPassword: '', repeatPassword: '' });
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setMessage('Invalid or expired reset link');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.repeatPassword) {
      setMessage('Passwords do not match');
      return;
    }

    const res = await fetch('/api/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password: formData.newPassword }),
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.status === 200) {
      setTimeout(() => router.push('/login'), 2000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-4 border border-gray-300 rounded-lg"
            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Repeat Password"
            className="w-full p-4 border border-gray-300 rounded-lg mt-4"
            onChange={(e) => setFormData({ ...formData, repeatPassword: e.target.value })}
            required
          />
          <button type="submit" className="w-full bg-indigo-600 text-white p-4 mt-4 rounded-lg">
            Reset Password
          </button>
        </form>
        {message && <p className="text-center mt-4">{message}</p>}
      </div>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgotPasswordComponent />
    </Suspense>
  );
}
