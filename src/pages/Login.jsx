import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ensure this path is correct

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { login } = useAuth(); // Get the login function from AuthContext
  const navigate = useNavigate();

  const handleLogin = async () => {
    setErrorMessage(''); // Reset error message on new login attempt
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed');
        return;
      }

      const data = await response.json();
      login(data.user); // Call login function from context with user data
      navigate('/'); // Redirect to the home page after successful login
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('An error occurred while logging in.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Login</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
          required
        />
        <button 
          onClick={handleLogin} 
          className="bg-blue-500 text-white rounded-md py-2 w-full"
        >
          Login
        </button>
        <p className="mt-4">
          Belum punya akun? <a href="/register" className="text-blue-500">Daftar di sini</a>
        </p>
      </div>
    </div>
  );
};

export default Login;