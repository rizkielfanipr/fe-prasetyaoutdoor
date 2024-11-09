import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import PaymentModal from './PaymentModal';
import { FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
import logo from '/logo.png'; // Sesuaikan path ke public/logo.png

const Navbar = () => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isCartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn, user, logout } = useAuth();

  useEffect(() => {
    const fetchCartItems = async () => {
      if (isLoggedIn && user) {
        try {
          const response = await axios.get(`http://localhost:3000/cart/${user.id}`);
          setCartItems(response.data);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }
    };
    fetchCartItems();
  }, [isLoggedIn, user]);

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
    if (isCartDropdownOpen) setCartDropdownOpen(false);
  };

  const toggleCartDropdown = () => {
    setCartDropdownOpen(!isCartDropdownOpen);
    if (isProfileDropdownOpen) setProfileDropdownOpen(false);
  };

  const handlePayment = () => {
    setPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setPaymentModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Prasetya Outdoor Logo" className="w-20 h-8 ml-24" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button onClick={toggleCartDropdown} className="relative flex items-center">
              <div className="bg-[#FFC107] rounded-full p-2 flex items-center justify-center">
                <FaShoppingCart className="text-white text-xl" /> {/* Ubah warna ikon menjadi putih */}
              </div>
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            {isCartDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <div className="p-4 text-sm">
                  <span>{cartItems.length} Items</span>
                  <span className="block mt-1 font-medium">
                    Subtotal: ${cartItems.reduce((total, item) => total + item.product_price * item.quantity, 0)}
                  </span>
                </div>
                <div className="border-t">
                  <button onClick={handlePayment} className="w-full px-4 py-2 text-center text-blue-600 hover:bg-gray-100">
                    View Cart
                  </button>
                </div>
              </div>
            )}
          </div>
          {isLoggedIn ? (
            <div className="relative">
              <button onClick={toggleProfileDropdown} className="focus:outline-none">
                <img
                  src={user?.avatar || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </button>
              {isProfileDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                  </li>
                  <li>
                    <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="flex items-center px-4 py-2 text-white bg-[#FFC107] rounded-xl"
            >
              <FaSignInAlt className="mr-2" /> Login
            </button>
          )}
        </div>
      </div>
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={closePaymentModal}
        cartItems={cartItems}
        totalAmount={cartItems.reduce((total, item) => total + item.product_price * item.quantity, 0)}
      />
    </div>
  );
};

export default Navbar;
