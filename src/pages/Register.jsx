import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nama, setNama] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    // Validasi input
    if (!nama || !username || !email || !password || !passwordConfirmation) {
      alert('Semua field harus diisi!');
      return;
    }

    if (password !== passwordConfirmation) {
      alert('Password dan konfirmasi password tidak cocok!');
      return;
    }

    // Logika untuk memproses registrasi
    try {
      const response = await fetch('http://localhost:3000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nama,
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      alert('Registrasi berhasil!'); // Informasikan pengguna jika berhasil
      navigate('/'); // Arahkan ke halaman utama setelah registrasi
    } catch (error) {
      alert(`Registrasi gagal: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-lg font-semibold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Ulangi Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={handleRegister} className="bg-blue-500 text-white rounded-md py-2 w-full">
          Register
        </button>
        <p className="mt-4">
          Sudah punya akun? <a href="/login" className="text-blue-500">Login di sini</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
