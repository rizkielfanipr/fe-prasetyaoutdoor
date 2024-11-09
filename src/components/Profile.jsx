import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import AuthContext
import { FaUserCircle } from 'react-icons/fa'; // Import Profile Icon from Font Awesome

const Profile = ({ toggleProfileDropdown, isProfileDropdownOpen }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
    toggleProfileDropdown(); // Close dropdown after navigation
  };

  const handleResetPassword = () => {
    navigate('/reset-password');
    toggleProfileDropdown(); // Close dropdown after navigation
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleProfileDropdown} 
        className="text-gray-700 focus:outline-none flex items-center"
      >
        <FaUserCircle className="mr-2" /> {/* Profile icon */}
        <span>Hai, {user?.name || 'Pengguna'}</span>
      </button>
      {isProfileDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
          <div className="px-4 py-2 text-gray-700">
            <div>{user?.name}</div>
            <div className="text-sm text-gray-500">{user?.username}</div>
          </div>
          <div className="border-t"></div>
          <button
            onClick={handleEditProfile}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Edit Profile
          </button>
          <button
            onClick={handleResetPassword}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Reset Password
          </button>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;