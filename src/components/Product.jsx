import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Modal from './Modal';
import { AuthContext } from '../context/AuthContext';
import { FaShoppingCart } from 'react-icons/fa'; // Import ikon dari react-icons
import { useMediaQuery } from 'react-responsive'; // Import react-responsive

const Product = ({ cart, setCart }) => {
  const [barang, setBarang] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isLoggedIn, user } = useContext(AuthContext);

  // Media queries untuk menentukan ukuran layar
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setBarang(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();

    if (isLoggedIn && user) {
      fetchCartItems();
    }
  }, [isLoggedIn, user]);

  const fetchCartItems = async () => {
    if (!user) return;

    try {
      const response = await axios.get(`http://localhost:3000/cart/${user.id}`);
      setCart(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const addToCart = async (product) => {
    if (!isLoggedIn) {
      window.location.href = '/login';
      return;
    }

    const newCartItem = {
      user_id: user.id,
      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      quantity: 1,
    };

    try {
      setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
        if (existingProductIndex !== -1) {
          const updatedCart = [...prevCart];
          updatedCart[existingProductIndex].quantity += 1;
          return updatedCart;
        }
        return [...prevCart, { ...product, quantity: 1 }];
      });

      await axios.post('http://localhost:3000/cart/cart', newCartItem);
      console.log(`${product.name} has been added to cart!`);
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Gagal menambahkan item ke keranjang: ' + error.message);
    } finally {
      closeModal();
    }
  };

  const handleProductClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/products/${id}`);
      setSelectedProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-24"> {/* Added padding for mobile devices */}
      {/* Katalog Alat Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold mb-4 font-press-start">Katalog Alat</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Prasetya Outdoor menyediakan perlengkapan terbaik untuk kebutuhan outdoor Anda,
          mulai dari tenda, sepatu hiking, hingga alat panjat tebing.
        </p>
      </section>

      {/* Product List */}
      <div className={`mb-4 grid gap-4 ${isMobile ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4'}`}>
        {barang.map((item) => (
          <div key={item.id} className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="h-56 w-full">
              <a href="#">
                <img className="mx-auto h-full dark:hidden" src={item.picture} alt={item.name} />
                <img className="mx-auto hidden h-full dark:block" src={item.picture} alt={item.name} />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4">
                <button type="button" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => handleProductClick(item.id)}>
                  <span className="sr-only">Lihat Barang</span>
                  <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                    <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </button>
              </div>
              <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">{item.name}</a>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">Rp. {item.price}</p>
                <button type="button" className="rounded-lg bg-[#FFC61A] text-white px-4 py-2 flex items-center gap-2" onClick={() => addToCart(item)}>
                  <FaShoppingCart /> {/* Ikon dari react-icons */}
                  <span className="sr-only">Add to cart</span>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={closeModal}
          onAddToCart={() => addToCart(selectedProduct)}
        />
      )}
    </div>
  );
};

export default Product;
