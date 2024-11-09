import React, { useState } from 'react';

const PaymentModal = ({ isOpen, onClose, cartItems, totalAmount }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Dummy payment methods
  const paymentMethods = [
    { id: 'credit_card', name: 'Kartu Kredit' },
    { id: 'bank_transfer', name: 'Transfer Bank' },
    { id: 'e_wallet', name: 'E-Wallet' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
      <div className="bg-white rounded-lg w-full max-w-2xl shadow-md dark:bg-gray-800">
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Detail Pembayaran</h2>
          <div className="space-y-6">
            {cartItems.map((item, index) => (
              <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <a href="#" className="shrink-0 md:order-1">
                    <img className="h-20 w-20 dark:hidden" src={item.imageUrl} alt={item.product_name} />
                    <img className="hidden h-20 w-20 dark:block" src={item.imageUrlDark} alt={item.product_name} />
                  </a>

                  <label htmlFor={`counter-input-${index}`} className="sr-only">Choose quantity:</label>
                  <div className="flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center">
                      <button type="button" id={`decrement-button-${index}`} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" id={`counter-input-${index}`} className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" value={item.quantity} readOnly />
                      <button type="button" id={`increment-button-${index}`} className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900 dark:text-white">Rp {item.product_price * item.quantity}</p>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                    <a href="#" className=" text-base font-medium text-gray-900 hover:underline dark:text-white">{item.product_name}</a>
                    <div className="flex items-center gap-4">
                      <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                        <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                        </svg>
                        Add to Favorites
                      </button>
                      <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                        <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total:</span>
            <span>Rp {totalAmount}</span>
          </div>

          <h3 className="text-md font-semibold mb-2">Pilih Metode Pembayaran</h3>
          <div className="space-y-2 mb-4">
            {paymentMethods.map((method) => (
              <label key={method.id} className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={method.id}
                  checked={selectedPaymentMethod === method.id}
                  onChange={() => setSelectedPaymentMethod(method.id)}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                />
                <span className="text-gray-900 dark:text-white">{method.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between p-4 border-t">
          <button 
            onClick={onClose} 
            className="w-full bg-gray-300 rounded-md py-2 hover:bg-gray-400 focus:outline-none">
            Tutup
          </button>
          <button
            onClick={() => alert(`Metode pembayaran yang dipilih: ${selectedPaymentMethod}`)}
            className="ml-2 w-full bg-primary-700 text-white rounded-md py-2 hover:bg-primary-800 focus:outline-none"
            disabled={!selectedPaymentMethod}
          >
            Konfirmasi Pembayaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;