import React from 'react';
import { FaShoppingCart, FaSignInAlt } from 'react-icons/fa'; // Import ikon dari react-icons
import bgImage from '/bg-home.jpg'; // Pastikan path ini benar

const Hero = () => {
  return (
    <div 
      className="hero min-h-screen mb-20 relative" 
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay untuk menurunkan kecerahan */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="hero-content flex-col lg:flex-row-reverse p-4 rounded-lg relative z-10 lg:ml-[-260px]">
        <div>
          <h1 className="text-4xl font-bold text-white font-press-start">Peralatan Berkualitas</h1>
          <h1 className='text-4xl font-bold text-white font-press-start'>Petualangan Alammu!</h1>
          <p className="py-6 text-white">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <div className="flex space-x-4"> {/* Flex container untuk tombol */}
            <button className="btn bg-[#FFC61A] text-black border-0 hover:bg-[#e6b800] transition duration-300 flex items-center">
              <FaShoppingCart className="mr-2" /> {/* Ikon dengan margin kanan */}
              Pesan Sekarang
            </button>
            <button className="btn border border-[#FFC61A] text-[#FFC61A] bg-transparent hover:bg-[#FFC61A] hover:text-black transition duration-300 flex items-center">
              <FaSignInAlt className="mr-2" /> {/* Ikon dengan margin kanan */}
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;