import React, { useState } from 'react';
import { Button } from './ui/button';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = login(username.trim(), password.trim());
    
    if (!result.success) {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50 flex items-center justify-center relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce text-pink-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {['💕', '🎂', '🎈', '🌸', '✨'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
      </div>

      <div className="max-w-md w-full mx-6 z-10">
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-pulse">🎂</div>
            <h1 className="text-4xl font-dancing-script text-pink-600 mb-2">
              Happy Birthday Surprise!
            </h1>
            <p className="text-gray-600">
              Enter your details to join the celebration
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white/50"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200 bg-white/50"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {loading ? 'Logging in...' : 'Join the Celebration 🎉'}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-purple-50 rounded-2xl">
            <p className="text-sm text-purple-600 text-center">
              <strong>For the Birthday Girl:</strong> Use special credentials<br />
              <strong>For Guests:</strong> Any username and password to leave wishes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;