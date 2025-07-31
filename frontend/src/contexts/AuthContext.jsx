import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const savedUser = localStorage.getItem('birthday_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Simple authentication logic
    if (username === 'Khusu' && password === 'Khusu') {
      const userData = {
        username: 'Khusu',
        type: 'birthday_girl',
        name: 'Khushi'
      };
      setUser(userData);
      localStorage.setItem('birthday_user', JSON.stringify(userData));
      return { success: true, user: userData };
    } else if (username && password) {
      // Any other username/password combination becomes a guest
      const userData = {
        username: username,
        type: 'guest',
        name: username
      };
      setUser(userData);
      localStorage.setItem('birthday_user', JSON.stringify(userData));
      return { success: true, user: userData };
    } else {
      return { success: false, error: 'Please enter both username and password' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('birthday_user');
  };

  const value = {
    user,
    login,
    logout,
    loading,
    isKhushi: user?.type === 'birthday_girl',
    isGuest: user?.type === 'guest',
    isLoggedIn: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};