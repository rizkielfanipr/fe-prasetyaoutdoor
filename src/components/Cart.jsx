import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const Cart = ({ cartItems, toggleCartDropdown, isCartDropdownOpen, handlePayment }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.product_price * item.quantity, 0);

  return (
    <div className="relative">
      <button onClick={toggleCartDropdown} className="relative focus:outline-none flex items-center">
        <FaShoppingCart className="text-2xl" />
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs transform translate-x-1/2 -translate-y-1/2">
          {cartItems.length}
        </span>
      </button>

      {isCartDropdownOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-md z-20 p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="rounded-3xl border-2 border-gray-200 p-4 grid grid-cols-12 mb-4 gap-y-4">
                <div className="col-span-12 lg:col-span-2 img box">
                  <img src={item.imageUrl} alt={item.product_name} className="w-full rounded-lg object-cover" />
                </div>
                <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                  <div className="flex items-center justify-between w-full mb-2">
                    <h5 className="font-manrope font-bold text-lg leading-9 text-gray-900">{item.product_name}</h5>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <button className="group rounded-full border border-gray-200 p-2 flex items-center justify-center bg-white transition-all duration-500 hover:bg-gray-50">
                        <svg className="stroke-gray-900" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.5 9.5H13.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <input
                        type="text"
                        id="number"
                        className="border border-gray-200 rounded-full w-10 text-center"
                        value={item.quantity}
                        readOnly
                      />
                      <button className="group rounded-full border border-gray-200 p-2 flex items-center justify-center bg-white transition-all duration-500 hover:bg-gray-50">
                        <svg className="stroke-gray-900" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.75 9.5H14.25M9 14.75V4.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                    <h6 className="text-indigo-600 font-manrope font-bold text-lg leading-9">Rp. {item.product_price * item.quantity}</h6>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">Your cart is empty.</div>
          )}

          <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-200 pt-4 mt-4">
            <h5 className="text-gray-900 font-manrope font-semibold text-xl leading-9">Subtotal</h5>
            <h6 className="font-manrope font-bold text-2xl text-indigo-600">Rp. {subtotal}</h6>
          </div>

          <div className="mt-4">
            <button
              onClick={handlePayment}
              className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;